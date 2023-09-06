<script lang="ts" setup>
type Props = { icon: "tags" | "authors" };
defineProps<Props>();
</script>

<template>
  <button class="flex flex-row items-center gap-2 rounded px-2 hover:opacity-50">
    <Icon v-if="icon === 'tags'" name="material-symbols:bookmark-outline" />
    <Icon v-else-if="icon === 'authors'" name="material-symbols:person-2-outline" />
    <slot />
  </button>
</template>
