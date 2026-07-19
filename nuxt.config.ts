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
    },
    storage: {
      db: {
        driver: 'fs',
        base: './.data/kv'
      }
    },
    externals: {
      inline: [],
      external: ['sqlite3']
    },
    experimental: {
      nodeFetchCompat: true
    },
    esbuild: {
      options: {
        target: 'node20'
      }
    }
  },

  vue: {
    compilerOptions: {
      comments: true
    }
  },

  site: {
    url: 'https://www.fadlanabduh.my.id',
    name: 'Fadlan Abduh Erman Nawa'
  },

  sitemap: {
    exclude: ['/api/**']
  },

  routeRules: {
    '/chopin': {
      headers: {
        'X-CTF-Fun-Fact-1': 'Chopin menulis /first-ballade pada tahun 1834. Musik ini juga dimainkan di film pemenang Oscar \'The ' +
            'Pianist\' (2002) dan menjadi klimaks emosional yang ikonik di anime \'Your Lie in April\'.',

        'X-CTF-Fun-Fact-2': 'Banyak musisi menganggap karya ini sebagai representasi sempurna dari siklus hidup manusia:' +
            ' dimulai dengan keraguan yang sunyi, diisi badai konflik, dan diakhiri dengan tragedi yang megah.',

        'X-CTF-Fun-Fact-3': 'Setiap pianis membawakannya dengan interpretasi emosi yang berbeda, dan bagian coda di ' +
            'akhir lagu merupakan salah satu tingkat kesulitan teknis tertinggi dalam sejarah musik klasik.'
      }
    },
    '/api/egg-hint': {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': 'https://blog.fadlanabduh.my.id',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept'
      }
    },
    '/api/pixels/experiment': {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': 'https://blog.fadlanabduh.my.id',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Accept'
      }
    }
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