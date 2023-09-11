<script lang="ts" setup>
import type { UserSearchModel } from "./bar.vue";

const model = defineModel<UserSearchModel>({ required: true });
</script>

<template>
  <input
    v-model="model.value"
    type="text"
    class="w-full rounded bg-gray-700 px-4 py-2 outline-none"
    :placeholder="$t('placeholders.search')"
    @keydown.esc="($event.target as HTMLInputElement).blur()"
  />
</template>
