<script lang="ts" setup>
const values = defineModel<Record<ContentLocaleVariant, string>>({ required: true });
</script>

<template>
  <section class="grid grid-cols-[auto_1fr] items-center gap-2">
    <template v-for="(_, key) in values" :key="key">
      <span>{{ $t(`locale.${key}`) }}</span>
      <UInput v-model="values[key]" />
    </template>
  </section>
</template>
