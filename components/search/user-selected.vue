<script lang="ts" setup>
import { UserSearchModel } from "./user-bar.vue";

const model = defineModel<UserSearchModel>({ required: true });

const included = computed(() => [
  model.value.tags.include,
  model.value.authors.include,
  model.value.franchises.include,
]);

const excluded = computed(() => [
  model.value.tags.exclude,
  model.value.authors.exclude,
  model.value.franchises.exclude,
]);
</script>

<template>
  <section class="rounded bg-white/5">
    <h1 class="text-center font-bold">Selected</h1>

    <section class="flex flex-wrap gap-2 p-2">
      <template v-for="entry of included">
        <SearchSelectedEntry
          v-for="[key, value] of entry"
          :key="key"
          class="bg-green-500/10"
          @click="model.tags.include.delete(key)"
        >
          {{ $t(value.name) }}
        </SearchSelectedEntry>
      </template>

      <template v-for="entry of excluded">
        <SearchSelectedEntry
          v-for="[key, value] of entry"
          :key="key"
          class="bg-red-500/10"
          @click="model.tags.exclude.delete(key)"
        >
          {{ $t(value.name) }}
        </SearchSelectedEntry>
      </template>
    </section>
  </section>
</template>
