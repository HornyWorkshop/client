<script lang="ts" setup>
type Props = { icon: "tags" | "authors"; state: "add" | "ban" };
defineProps<Props>();
</script>

<template>
  <button class="flex flex-row items-center gap-2 rounded px-2 hover:opacity-50">
    <template v-if="icon === 'tags'">
      <Icon v-if="state == 'add'" name="material-symbols:label-outline" />
      <Icon v-else name="material-symbols:label-off-outline" />
    </template>

    <template v-else-if="icon === 'authors'">
      <Icon v-if="state == 'add'" name="material-symbols:person-off-outline" />
      <Icon v-else name="material-symbols:person-2-outline" />
    </template>
    <slot />
  </button>
</template>
