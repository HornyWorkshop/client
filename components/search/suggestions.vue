<script lang="ts" setup>
import { useSearchAuthorsQuery, useSearchFranchisesQuery, useSearchTagsQuery } from "~/api/gql";
import type { UserSearchModel } from "./bar.vue";

const model = defineModel<UserSearchModel>({ required: true });
const request = computed(() => ({ value: model.value.value }));

const { result: remoteTags } = useSearchTagsQuery(request);
const tags = computed(
  () => remoteTags?.value?.tags?.edges?.map(({ node }) => ({ id: node.id, name: node.name })) ?? [],
);

const { result: remoteAuthors } = useSearchAuthorsQuery(request);
const authors = computed(
  () =>
    remoteAuthors?.value?.authors?.edges?.map(({ node }) => ({
      id: node.id,
      name: { id: node.name, en: node.name, ru: node.name },
    })) ?? [],
);

const { result: remoteFranchises } = useSearchFranchisesQuery(request);
const franchises = computed(
  () => remoteFranchises.value?.franchises?.edges?.map(({ node }) => ({ id: node.id, name: node.name })) ?? [],
);
</script>

<template>
  <section class="grid grid-cols-3 gap-2">
    <SearchSuggestionList v-model="model.tags" token="tags" :remote="tags" />
    <SearchSuggestionList v-model="model.authors" token="authors" :remote="authors" />
    <SearchSuggestionList v-model="model.franchises" token="franchises" :remote="franchises" />
  </section>
</template>
