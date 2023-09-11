<script lang="ts" setup>
import { UserSearchModel } from "./bar.vue";

const model = defineModel<UserSearchModel>({ required: true });

const included = computed(() => [
  { token: "tags", entry: model.value.tags.include },
  { token: "authors", entry: model.value.authors.include },
  { token: "franchises", entry: model.value.franchises.include },
]);

const excluded = computed(() => [
  { token: "tags", entry: model.value.tags.exclude },
  { token: "authors", entry: model.value.authors.exclude },
  { token: "franchises", entry: model.value.franchises.exclude },
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
  <section class="flex flex-col gap-2 rounded bg-gray-800 p-2" :class="{ hidden: added === false }">
    <section class="flex flex-wrap gap-2">
      <template v-for="{ token, entry } of included" :key="token">
        <SearchSelectedEntry
          v-for="[key, value] of entry"
          :key="key"
          :icon="token"
          state="add"
          class="rounded bg-green-500/50"
          @click="entry.delete(key)"
        >
          {{ $t(value) }}
        </SearchSelectedEntry>
      </template>

      <template v-for="{ token, entry } of excluded" :key="token">
        <SearchSelectedEntry
          v-for="[key, value] of entry"
          :key="key"
          :icon="token"
          state="ban"
          class="rounded bg-red-500/50 px-2"
          @click="entry.delete(key)"
        >
          {{ $t(value) }}
        </SearchSelectedEntry>
      </template>
    </section>
  </section>
</template>
