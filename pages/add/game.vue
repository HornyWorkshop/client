<script lang="ts" setup>
definePageMeta({ layout: "add" });

const name = reactive({ ru: "", en: "" });
const files = ref<File[]>([]);
</script>

<template>
  <section>
    <h1>create game page</h1>
    <section class="flex flex-col gap-2">
      <UiByLangInput v-model="name" />
      <UiAttachedIcons v-model="files" />
    </section>
  </section>
</template>
