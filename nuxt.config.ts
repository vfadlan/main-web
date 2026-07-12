export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/turnstile'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
  ui: {
    theme: {
      colors: [
        'brandred',
        'primary',
        'secondary',
        'tertiary',
        'info',
        'success',
        'warning',
        'error'
      ]
    }
  },
  turnstile: {
    secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY || ''
  },
  runtimeConfig: {
    brevoApiKey: process.env.NUXT_BREVO_API_KEY || '',
    toEmail: process.env.NUXT_TO_EMAIL || '',
    public: {
      ghostKey: process.env.NUXT_GHOST_KEY || '',
      ghostUrl: process.env.NUXT_GHOST_URL || '',
      turnstile: {
        siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || ''
      }
    }
  }
})