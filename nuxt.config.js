export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'Weather Forecast',
    title: 'Weather Forecast',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'robot',
        name: 'robot',
        content: 'index,follow',
      },
      {
        hid: 'googlebot',
        name: 'googlebot',
        content: 'index,follow',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'How is the weather today? get a glimpse and plan your day ahead with this simple weather forecast app sincerely created by mkxhmn',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Weather Forecast by mkxhmn',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'How is the weather today? get a glimpse and plan your day ahead with this simple weather forecast app sincerely created by mkxhmn',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://source.unsplash.com/WwD-LlmXp5o/1200x628',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Weather Forecast by mkxhmn',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://weather-application-five.vercel.app',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Weather Forecast by mkxhmn',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'How is the weather today? get a glimpse and plan your day ahead with this simple weather forecast app sincerely created by mkxhmn',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://source.unsplash.com/WwD-LlmXp5o/1200x628',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://source.unsplash.com/WwD-LlmXp5o/1200x628',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Weather Forecast by mkxhmn',
      },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '628' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'weather forecast by mkxhmn',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  serverMiddleware: [{ path: '/api', handler: '~/server-middleware' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  modules: [['vue-wait/nuxt', { useVuex: true }]],
  plugins: [
    '~/plugins/vue-browser-location',
    '~/plugins/vuex-persist.client.js',
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
    },
  },
}
