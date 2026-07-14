// server/api/count-explorer.ts
export default defineEventHandler(async (event) => {
    const hasCleared = getCookie(event, 'ctf_cleared')
    const storage = useStorage('db')

    let currentCount = (await storage.getItem<number>('explorer_count')) || 0

    if (!hasCleared) {
        currentCount += 1
        await storage.setItem('explorer_count', currentCount)

        setCookie(event, 'ctf_cleared', 'true', {
            maxAge: 60 * 60 * 24 * 365, // 1 Tahun
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax'
        })
    }

    return {
        success: true,
        visitorNumber: currentCount
    }
})