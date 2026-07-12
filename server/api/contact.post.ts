export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const config = useRuntimeConfig()

    if (!body.email || !body.message) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Email and message are required.'
        })
    }


    const isValid = await verifyTurnstileToken(body.token, event)

    if (!isValid) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Cloudflare Turnstile verification failed.'
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
                        name: body.name || 'Portfolio Visitor',
                        email: 'noreply@fadlanabduh.my.id'
                    },
                    to: [
                        {
                            email: config.toEmail
                        }
                    ],
                    replyTo: {
                        email: body.email,
                        name: body.name || body.email
                    },
                    subject: `New Message from ${body.name || body.email}`,
                    textContent: `
From: ${body.name || 'Anonymous'}
Email: ${body.email}

Message:
${body.message}
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