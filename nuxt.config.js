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
        hid: 'description',
        name: 'description',
        content: 'How is the weather today?',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Weather Forecast by mkxhmn',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'How is the weather today?',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://source.unsplash.com/WwD-LlmXp5o/640x480',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Weather Forecast by mkxhmn',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Weather Forecast by mkxhmn',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'How is the weather today?',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://source.unsplash.com/WwD-LlmXp5o/640x480',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://source.unsplash.com/WwD-LlmXp5o/640x480',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Weather Forecast by mkxhmn',
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
