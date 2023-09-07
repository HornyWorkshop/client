<script lang="ts" setup>
import type { UserSearchModel } from "./user-bar.vue";

const model = defineModel<UserSearchModel>({ required: true });
</script>

<template>
  <section class="grid grid-cols-3 gap-2 rounded bg-white/5 p-2">
    <!-- <SearchTagsSuggs v-model="model" /> -->
    <SearchAuthorSuggs v-model="model" />

    <SearchSuggEntries :values="[]">
      {{ $t("search.franchises") }}
    </SearchSuggEntries>
  </section>
</template>
