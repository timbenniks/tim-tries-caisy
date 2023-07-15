export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-graphql-client', '@nuxtjs/tailwindcss'],

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
  }
})
