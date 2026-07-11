export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'light',
    fallback: 'light',
  },
  runtimeConfig: {
    brevoApiKey: process.env.NUXT_BREVO_API_KEY || '',
    toEmail: process.env.NUXT_TO_EMAIL || '',
    public: {
      ghostKey: process.env.NUXT_GHOST_KEY || '',
      ghostUrl: process.env.NUXT_GHOST_URL || '',
    }
  }
})