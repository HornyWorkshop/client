<script lang="ts" setup>
import { LocaleModel } from "~/api/gql";
import { mergeLocale } from "~/locale/utils";

type Remote = {
  id: number | string;
  name: Omit<LocaleModel, "id"> & { id: string | number };
};

type Props = {
  token: string;
  remote: Remote[];
};

type Model = {
  exclude: Map<number | string, number | string>;
  include: Map<number | string, number | string>;
};

const model = defineModel<Model>({ required: true });

const { token, remote } = defineProps<Props>();

const values = computed(() => {
  let values = remote;

  values = values.filter(({ id }) => model.value.include.has(id) === false);
  values = values.filter(({ id }) => model.value.exclude.has(id) === false);

  return values;
});

const { mergeLocaleMessage } = useI18n();

watch(values, (values) => {
  for (const { id, name } of values) {
    mergeLocale(id, token, name, (locale, token, value) => {
      mergeLocaleMessage(locale, { [token]: value });
    });
  }
});
</script>

<template>
  <section class="rounded bg-gray-800 p-2">
    <SearchSuggestionHeader>
      {{ $t(`search.${token}`) }}
    </SearchSuggestionHeader>

    <section class="grid max-h-24 grid-cols-[auto_1fr_auto] gap-2 overflow-auto">
      <template v-for="{ id } of values" :key="id">
        <button
          class="rounded bg-green-500/50 px-2 text-xs font-semibold uppercase hover:opacity-50"
          type="button"
          @click="model.include.set(id, `${token}.${id}`)"
        >
          {{ $t("search.add") }}
        </button>
        <div class="truncate">
          {{ $t(`${token}.${id}`) }}
        </div>
        <button
          class="rounded bg-red-500/50 px-2 text-xs font-semibold uppercase hover:opacity-50"
          type="button"
          @click="model.exclude.set(id, `${token}.${id}`)"
        >
          {{ $t("search.ban") }}
        </button>
      </template>
    </section>
  </section>
</template>
