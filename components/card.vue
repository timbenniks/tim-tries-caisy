<script setup lang="ts">
import { Article } from "../types";

defineProps<{
  article: Article;
}>();
</script>

<template>
  <li class="py-4 bg-slate-100 rounded-md">
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
        :src="(article?.teaserImage?.src as string)"
        :alt="(article?.teaserImage?.title as string)"
        :width="(article?.teaserImage?.width as number)"
        :height="(article?.teaserImage?.height as number)"
        loading="lazy"
      />
      <p v-if="article?.teaserDesciption" class="px-4 line-clamp-3">
        {{ article.teaserDesciption }}
      </p>
    </figure>
  </li>
</template>
