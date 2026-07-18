import { useDb } from "../../db";

const PIXEL = Buffer.from(
    "R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    "base64"
);

export default defineEventHandler(async (event) => {
    setHeader(event, "Content-Type", "image/gif");
    setHeader(event, "Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    setHeader(event, "Pragma", "no-cache");
    setHeader(event, "Expires", "0");

    const id = getRouterParam(event, "id");
    const ip = getHeader(event, "x-forwarded-for") || event.node.req.socket.remoteAddress || "unknown";

    const db = await useDb();

    const row = await db.get(
        `SELECT * FROM tracking_pixels WHERE id = ?`,
        id
    );

    if (!row) {
        return PIXEL;
    }

    if (!row.opened_at) {
        try {
            const result = await db.run(
                `
                UPDATE tracking_pixels
                SET opened_at = CURRENT_TIMESTAMP
                WHERE id = ? AND opened_at IS NULL
                `,
                id
            );

            if (result.changes && result.changes > 0) {
                const updatedRow = await db.get(
                    `SELECT opened_at FROM tracking_pixels WHERE id = ?`,
                    id
                );

                const dbDate = new Date(updatedRow.opened_at.includes('Z') ? updatedRow.opened_at : updatedRow.opened_at + ' Z');
                const formatter = new Intl.DateTimeFormat("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZone: "Asia/Jakarta",
                    hour12: false
                });

                const config = useRuntimeConfig();
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
                                email: row.email,
                                name: row.name || "Explorer"
                            }
                        ],
                        subject: "EKSPERIMEN: Surel Telah Dibuka",
                        textContent: `Hi,
                        
Klien email Anda sudah mengunduh gambar tersembunyi.

Waktu: ${formatter.format(dbDate)} WIB
IP Address: ${ip}

Selamat, sekarang Anda tidak bisa melupakan betapa intrusifnya internet.

Take care,
Fadlan A.
`
                    }
                }).catch((err) => {
                    console.error("Failed to send mail read notification:", err?.data || err.message);
                });
            }
        } catch (dbError) {
            console.error("DB Update Error:", dbError);
        }
    }

    return PIXEL;
});