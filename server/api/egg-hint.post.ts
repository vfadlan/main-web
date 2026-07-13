export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const config = useRuntimeConfig()

    if (!body.email) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Email address required.'
        })
    }

    try {
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