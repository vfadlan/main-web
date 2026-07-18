import { v4 as uuid } from "uuid";
import { useDb } from "../../db";

export default defineEventHandler(async (event) => {
    const ip = getHeader(event, 'x-forwarded-for') || event.node.req.socket.remoteAddress || 'anonymous'

    const storage = useStorage('db')
    const rateLimitKey = `rate_limit:${ip.replace(/:/g, '_')}`

    const now = Date.now()
    const limitWindow = 60 * 1000
    const lastRequestTime = await storage.getItem<number>(rateLimitKey)

    if (lastRequestTime && now - lastRequestTime < limitWindow) {
        const secondsLeft = Math.ceil((limitWindow - (now - lastRequestTime)) / 1000)
        throw createError({
            statusCode: 429,
            statusMessage: `Terlalu banyak permintaan. Silakan coba lagi dalam ${secondsLeft} detik.`
        })
    }

    const body = await readBody(event);
    const config = useRuntimeConfig();

    if (!body.email || !body.name) {
        throw createError({
            statusCode: 400,
            statusMessage: "Email and name is required."
        });
    }

    const valid = await verifyTurnstileToken(body.token, event);

    if (!valid) {
        throw createError({
            statusCode: 400,
            statusMessage: "Turnstile verification failed."
        });
    }

    const db = await useDb();

    const id = uuid();

    await db.run(
        `
            INSERT INTO tracking_pixels(id,email,name)
            VALUES(?,?,?)
        `,
        id,
        body.email,
        body.name
    );

    const pixelUrl = `${getRequestURL(event).origin}/api/pixels/${id}`;

    try {
        await $fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                accept: "application/json",
                "api-key": config.brevoApiKey,
                "content-type": "application/json"
            },
            body: {
                sender: {
                    name: "Fadlan Abduh",
                    email: "noreply@fadlanabduh.my.id"
                },
                to: [
                    {
                        email: body.email,
                        name: body.name
                    }
                ],
                subject: "Email Tracking Experiment",
                htmlContent: `
<p>Hello ${body.name ?? ""}</p>

<p>
Ada gambar tersembunyi di surel ini.
Saat gambar tersebut diunduh, Anda akan menerima email lain bersubjek "EKSPERIMEN: Surel Telah Dibuka".
</p>

<img src="${pixelUrl}" width="1" height="1" alt="">
`
            }
        });

        return {
            success: true
        };
    } catch (e) {
        await db.run(
            `DELETE FROM tracking_pixels WHERE id=?`,
            id
        );

        throw createError({
            statusCode: 500,
            statusMessage: "Failed to send email."
        });
    }
});