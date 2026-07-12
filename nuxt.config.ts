export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  devtools: { enabled: false },
  modules: [
    '@nuxt/ui', 
    '@nuxtjs/turnstile',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  site: {
    url: 'https://www.fadlanabduh.my.id',
    name: 'Fadlan Abduh Erman Nawa'
  },

  sitemap: {
    exclude: ['/api/**']
  },

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
    siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || '',
    secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY || ''
  },

  runtimeConfig: {
    brevoApiKey: process.env.NUXT_BREVO_API_KEY || '',
    toEmail: process.env.NUXT_TO_EMAIL || '',

    turnstile: {
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY || ''
    },

    public: {
      ghostKey: process.env.NUXT_GHOST_KEY || '',
      ghostUrl: process.env.NUXT_GHOST_URL || '',
      
      turnstile: {
        siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || ''
      }
    }
  }
})