<script setup lang="ts">
import { Article } from "../types";

defineProps<{
  article: Article;
}>();
</script>

<template>
  <li class="py-4 bg-slate-100 rounded-md" :id="article?.id">
    <nuxt-link :to="`/article/${article.slug}`" rel="noopener">
      <header class="mb-4 px-4">
        <h3
          class="line-clamp-1 font-bold text-xl uppercase"
          v-if="article?.teaserHeadline"
        >
          {{ article.teaserHeadline }}
        </h3>
        <p class="uppercase text-xs">
          By <span class="underline">{{ article?.author?.name }}</span> in
          <span class="underline">{{ article?.category?.name }}</span>
        </p>
      </header>
      <figure>
        <img
          class="aspect-video object-cover w-full h-auto block mb-4"
          v-if="article?.teaserImage?.src"
          :src="`${article?.teaserImage?.src}?w=600`"
          :alt="article?.teaserImage?.title"
          :width="article?.teaserImage?.width"
          :height="article?.teaserImage?.height"
          loading="lazy"
        />
        <p v-if="article?.teaserDesciption" class="px-4 line-clamp-3">
          {{ article.teaserDesciption }}
        </p>
      </figure>
    </nuxt-link>
  </li>
</template>
