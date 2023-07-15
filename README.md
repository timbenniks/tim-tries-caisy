# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
yarn install
```

## Add GraphQL and Hygraph connections

Install `nuxt-graphql-client`

```bash
yarn add nuxt-graphql-client
```

In `.env` add and make sure to create an API key in Caisy developer settings

```
CAISY_HOST="https://cloud.caisy.io/api/v3/e/<PROJECT_ID>/graphql"
CAISY_APIKEY="<API_KEY>"
```

In Nuxt Config add

```js
export default defineNuxtConfig({
  modules: ["nuxt-graphql-client"],
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
});
```

Add `.gql` query files in the `./queries` folder and use the Gql generated functions like this:

```js
// All Blog Articles
const { data } = await const data = await GqlBlogArticles();

// Blog Article By Slug
const data = await GqlAllBlogArticleBySlug({ slug: slug as string });
```

## Additional goodies

- Tailwind
- A custom Caisy Nuxt image Provider
- Caisy RichTextEditor output

## Development Server

Start the development server on `http://localhost:3000`:

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
