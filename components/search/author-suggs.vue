<script lang="ts" setup>
import { useSearchAuthorsQuery } from "~/api/gql";

import type { UserSearchModel } from "./user-bar.vue";

const model = defineModel<UserSearchModel>({ required: true });
const request = computed(() => ({ value: model.value.value }));

const { result } = useSearchAuthorsQuery(request);
const authors = computed(() => {
  let values = result.value?.authors?.edges ?? [];

  values = values.filter(({ node }) => model.value.authors.include.has(node.id) === false);
  values = values.filter(({ node }) => model.value.authors.exclude.has(node.id) === false);

  return values;
});
</script>

<template>
  <SearchSuggEntries
    :values="authors.map(({ node }) => ({ id: node.id, name: node.name }))"
    @add="(id, name) => model.authors.include.set(id, name)"
    @ban="(id, name) => model.authors.exclude.set(id, name)"
  >
    {{ $t("search.authors") }}
  </SearchSuggEntries>
</template>
