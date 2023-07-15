<script setup>
defineProps({
  node: Object,
  connections: Array,
});
</script>

<template>
  <template v-for="component in connections">
    <nuxt-img
      v-if="
        component?.__typename == 'Asset' &&
        node?.attrs?.documentId == component.id
      "
      provider="caisy"
      class="my-4 not-prose"
      loading="lazy"
      :src="component?.src"
      :width="component?.width"
      :height="component?.height"
      :alt="component?.title"
      sizes="sm:100vw md:50vw"
    />
  </template>
</template>
