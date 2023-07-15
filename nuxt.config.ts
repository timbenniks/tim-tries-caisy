export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-graphql-client', '@nuxtjs/tailwindcss', '@nuxt/image'],

  runtimeConfig: {
    public: {
      'graphql-client': {
        clients: {
          caisy: {
            host: process.env.CAISY_HOST as string,
            headers: {
              'x-caisy-apikey': process.env.CAISY_APIKEY as string,
            }
          }
        }
      }
    }
  },

  image: {
    providers: {
      customProvider: {
        name: 'caisy',
        provider: '~/providers/caisy',
      }
    }
  },
})
