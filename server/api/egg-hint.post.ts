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

    const body = await readBody(event)
    const config = useRuntimeConfig()

    if (!body.email) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Email address required.'
        })
    }

    try {
        await storage.setItem(rateLimitKey, now)

        const response = await $fetch(
            'https://api.brevo.com/v3/smtp/email',
            {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'api-key': config.brevoApiKey,
                    'content-type': 'application/json'
                },
                body: {
                    sender: {
                        name: 'Fadlan Abduh',
                        email: 'noreply@fadlanabduh.my.id'
                    },
                    to: [
                        {
                            email: body.email,
                            name: body.name || 'Explorer'
                        }
                    ],
                    subject: 'Tantangan CTF: Tahap Berikutnya',
                    textContent: `
Halo ${body.name || 'Explorer'},

Selamat, Anda sudah menempuh jalan sejauh ini.  Grace yourself, teka-
teki akan semakin menantang:

======================================================================
Pesan telah terkirim, namun perjalananmu masih panjang. 
Kunci untuk melangkah lebih jauh tersembunyi di dalam anagram kuno. 
Geserlah takdir sebanyak tiga belas langkah pada kata rahasia ini: 

--> pubcva <--

Bawalah hasil translasinya kembali ke gerbang utama situsku 
(sebagai endpoint/path baru) untuk membuka jalan berikutnya.
======================================================================

Semoga berhasil,
Fadlan Abduh
`
                }
            }
        )

        console.log('Brevo response:', response)

        return {
            success: true
        }
    } catch (error: any) {
        console.error('Brevo error:')
        console.error(error)
        console.error(error?.data)
        console.error(error?.response?._data)

        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to send email.'
        })
    }
})