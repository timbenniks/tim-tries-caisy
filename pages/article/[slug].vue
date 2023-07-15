<script lang="ts" setup>
import { RichTextRenderer } from "@caisy/rich-text-vue-renderer";
import DocumentLink from "../../components/overwrites/DocumentLink.vue";

const route = useRoute();
const { slug } = route.params;
const data = await GqlAllBlogArticleBySlug({ slug: slug as string });

const article = computed(() => {
  if (data.allBlogArticle?.edges) {
    return data.allBlogArticle?.edges[0]?.node;
  }
});
</script>

<template>
  <main class="m-8 max-w-6xl mx-auto">
    <p class="uppercase text-xs mb-4">
      <nuxt-link to="/" class="underline">← back to overview</nuxt-link>
    </p>

    <header class="mb-8">
      <h1 class="text-5xl mb-2">{{ article?.teaserHeadline }}</h1>

      <p class="uppercase text-xs">
        By <span class="underline">{{ article?.author?.name }}</span> in
        <span class="underline">{{ article?.category?.name }}</span>
      </p>
    </header>

    <nuxt-img
      v-if="article?.teaserImage?.src"
      provider="caisy"
      class="aspect-[28/9] object-cover w-full h-auto block mb-8"
      :src="`${article?.teaserImage?.src}`"
      :alt="(article?.teaserImage?.title as string)"
      :width="(article?.teaserImage?.width as number)"
      :height="Number((article?.teaserImage?.width as number) * (9/28)).toFixed(0)"
      loading="lazy"
      sizes="sm:100vw"
    />

    <article class="prose mx-auto">
      <RichTextRenderer
        :blockMap="{ documentLink: DocumentLink }"
        :node="article?.text?.json"
        :connections="article?.text?.connections"
      />
    </article>
  </main>
</template>
