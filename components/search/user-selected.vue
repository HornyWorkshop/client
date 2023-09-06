<script lang="ts" setup>
import { UserSearchModel } from "./user-bar.vue";

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
  for (const item of [...included.value, ...excluded.value]) {
    if (item.entry.size !== 0) {
      return true;
    }
  }

  return false;
});
</script>

<template>
  <section class="flex flex-col gap-2 rounded bg-white/5 p-2">
    <h1 class="text-center font-bold">Selected</h1>

    <section class="flex flex-wrap gap-2" :class="{ hidden: added === false }">
      <template v-for="{ icon, entry } of included">
        <SearchSelectedEntry
          v-for="[key, value] of entry"
          :key="key"
          :icon="icon"
          state="add"
          class="bg-green-500/10"
          @click="model.tags.include.delete(key)"
        >
          {{ $t(value.name) }}
        </SearchSelectedEntry>
      </template>

      <template v-for="{ icon, entry } of excluded">
        <SearchSelectedEntry
          v-for="[key, value] of entry"
          :key="key"
          :icon="icon"
          state="ban"
          class="bg-red-500/10"
          @click="model.tags.exclude.delete(key)"
        >
          {{ $t(value.name) }}
        </SearchSelectedEntry>
      </template>
    </section>
  </section>
</template>
