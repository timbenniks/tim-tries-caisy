<script lang="ts" setup>
import { Article } from "../types";

const data = await GqlBlogArticles();
const articles = computed(() => {
  if (data.allBlogArticle && data.allBlogArticle.edges) {
    return data.allBlogArticle.edges.map((article) => {
      return article?.node as Article;
    });
  }
});
</script>

<template>
  <Head>
    <Title>Tim Tries Caisy</Title>
  </Head>
  <main class="m-8">
    <h1 class="text-5xl my-8">Latest blog articles</h1>

    <ul class="grid gap-8 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <card
        v-for="article in articles"
        :key="article?.slug"
        :article="article"
      />
    </ul>
  </main>
</template>
