<script lang="ts" setup>
import { mergeLocale } from "~/locale/utils";
import { useSearchTagsQuery } from "~/api/gql";

import type { UserSearchModel } from "./user-bar.vue";

const model = defineModel<UserSearchModel>({ required: true });
const request = computed(() => ({ value: model.value.value }));

const { result } = useSearchTagsQuery(request);
const tags = computed(() => {
  let values = result.value?.tags?.edges ?? [];

  values = values.filter(({ node }) => model.value.tags.include.has(node.id) === false);
  values = values.filter(({ node }) => model.value.tags.exclude.has(node.id) === false);

  return values;
});

const { mergeLocaleMessage } = useI18n();

watch(tags, (values) => {
  for (const { node } of values) {
    mergeLocale(node.id, "tags", node.name, (locale, token, value) => {
      mergeLocaleMessage(locale, { [token]: value });
    });
  }
});
</script>

<template>
  <SearchSuggEntries
    :values="tags.map(({ node }) => ({ id: node.id, name: $t(`tags.${node.id}`) }))"
    @add="(id, name) => model.tags.include.set(id, name)"
    @ban="(id, name) => model.tags.exclude.set(id, name)"
  >
    {{ $t("search.tags") }}
  </SearchSuggEntries>
</template>
