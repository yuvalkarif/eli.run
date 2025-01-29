export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  app: {
    head: {
      title: 'eli.run - Open links from your terminal',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Open links directly from your terminal with eli.run' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  compatibilityDate: '2025-01-29'
})