<script lang="ts" setup>
import { UserSearchModel } from "./bar.vue";

const model = defineModel<UserSearchModel>({ required: true });

const included = computed(() => [
  { icon: "tags", entry: model.value.tags.include },
  { icon: "authors", entry: model.value.authors.include },
  { icon: "franchises", entry: model.value.franchises.include },
]);

const excluded = computed(() => [
  { icon: "tags", entry: model.value.tags.exclude },
  { icon: "authors", entry: model.value.authors.exclude },
  { icon: "franchises", entry: model.value.franchises.exclude },
]);

const added = computed(() => {
  for (const item of [included.value, excluded.value].flat()) {
    if (item.entry.size !== 0) {
      return true;
    }
  }

  return false;
});
</script>

<template>
  <section class="flex flex-col gap-2 rounded bg-gray-800 p-2">
    <h1 class="text-center font-bold">{{ $t("pages.library.choise") }}</h1>

    <section class="flex flex-wrap gap-2" :class="{ hidden: added === false }">
      <template v-for="{ icon, entry } of included">
        <SearchSelectedEntry
          v-for="[key, value] of entry"
          :key="key"
          :icon="icon"
          state="add"
          class="rounded bg-green-500/50"
          @click="model.tags.include.delete(key)"
        >
          {{ $t(value) }}
        </SearchSelectedEntry>
      </template>

      <template v-for="{ icon, entry } of excluded">
        <SearchSelectedEntry
          v-for="[key, value] of entry"
          :key="key"
          :icon="icon"
          state="ban"
          class="rounded bg-red-500/50 px-2"
          @click="model.tags.exclude.delete(key)"
        >
          {{ $t(value) }}
        </SearchSelectedEntry>
      </template>
    </section>
  </section>
</template>
