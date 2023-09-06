<script lang="ts" setup>
import { mergeLocale } from "~/locale/utils";
import { useSearchTagsQuery, useSearchAuthorsQuery } from "~/api/gql";

import type { UserSearchModel } from "./user-bar.vue";

const model = defineModel<UserSearchModel>({ required: true });
const request = computed(() => ({ value: model.value.value }));

const { result: tagsResult } = useSearchTagsQuery(request);
const tags = computed(() => {
  let values = tagsResult.value?.tags?.edges ?? [];

  values = values.filter((e) => model.value.tags.include.some((v) => e.node.id == v.id) === false);
  values = values.filter((e) => model.value.tags.exclude.some((v) => e.node.id == v.id) === false);

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

const { result: authorsResult } = useSearchAuthorsQuery(request);
const authors = computed(() => authorsResult.value?.authors?.edges ?? []);
</script>

<template>
  <section class="pt-2">
    <section class="grid grid-cols-3 gap-2 rounded bg-white/5 p-2">
      <SearchSuggEntries
        :values="tags.map(({ node }) => ({ id: node.id, name: `tags.${node.id}` }))"
        @add="(id, name) => model.tags.include.push({ id, name })"
        @ban="(id, name) => model.tags.exclude.push({ id, name })"
      >
        {{ $t("search.tags") }}
      </SearchSuggEntries>

      <SearchSuggEntries :values="authors.map(({ node }) => ({ id: node.id, name: node.name }))">
        {{ $t("search.authors") }}
      </SearchSuggEntries>

      <SearchSuggEntries :values="[]">
        {{ $t("search.franchises") }}
      </SearchSuggEntries>
    </section>
  </section>
</template>
