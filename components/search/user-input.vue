<script lang="ts" setup>
import type { UserSearchModel } from "./user-bar.vue";

const model = defineModel<UserSearchModel>({ required: true });
</script>

<template>
  <input
    v-model="model.value"
    type="text"
    class="w-full rounded bg-white/5 px-4 py-2 outline-none"
    :placeholder="$t('placeholders.search')"
  />
</template>
