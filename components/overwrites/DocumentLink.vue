<script setup>
defineProps({
  node: Object,
  connections: Array,
});
</script>

<template>
  <template v-for="component in connections">
    <img
      v-if="
        component?.__typename == 'Asset' &&
        node?.attrs?.documentId == component.id
      "
      class="my-4 not-prose"
      loading="lazy"
      :src="`${component?.src}?w=1920&h=960`"
      :srcset="`${component?.src}?w=3840&h=1920 1920w, ${component?.src}?w=1920&h=960 1280w,
    ${component?.src}?w=1280&h=640 640w`"
      :alt="component?.title"
    />
  </template>
</template>
