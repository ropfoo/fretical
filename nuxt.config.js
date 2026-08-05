export default defineNuxtConfig({
  ssr: true,
  srcDir: '.',
  compatibilityDate: '2026-08-05',
  app: {
    baseURL: '/fretical/',
    head: {
      title: 'Fretical',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no'
        },
        {
          name: 'description',
          content:
            process.env.npm_package_description ||
            'Web app to help getting more confident with the fretboard.'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ]
    }
  },
  css: ['~/assets/scss/main.scss'],
  vue: {
    optionsApi: true
  }
});
