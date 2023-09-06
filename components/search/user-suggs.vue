<script lang="ts" setup>
import { useSearchAuthorsQuery } from "~/api/gql";

import type { UserSearchModel } from "./user-bar.vue";

const model = defineModel<UserSearchModel>({ required: true });
const request = computed(() => ({ value: model.value.value }));

const { result: authorsResult } = useSearchAuthorsQuery(request);
const authors = computed(() => authorsResult.value?.authors?.edges ?? []);
</script>

<template>
  <section class="pt-2">
    <div class="grid grid-cols-3 gap-2 rounded bg-white/5 p-2">
      <SearchTagsSuggs v-model="model" />

      <SearchSuggEntries :values="authors.map(({ node }) => ({ id: node.id, name: node.name }))">
        {{ $t("search.authors") }}
      </SearchSuggEntries>

      <SearchSuggEntries :values="[]">
        {{ $t("search.franchises") }}
      </SearchSuggEntries>
    </div>
  </section>
</template>
