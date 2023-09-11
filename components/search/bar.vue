<script lang="ts">
export type Entry = Map<number | string, string /** locale path */>;

export type Entries = {
  exclude: Entry;
  include: Entry;
};

export type UserSearchModel = {
  tags: Entries;
  authors: Entries;
  franchises: Entries;
  value: string;
};
</script>

<script lang="ts" setup>
const model = defineModel<UserSearchModel>({ required: true });
</script>

<template>
  <form class="flex flex-col gap-2">
    <div class="relative">
      <SearchInput v-model="model" class="peer" />
      <!-- invisible -->
      <div class="absolute top-full w-full pt-2 hover:visible peer-focus-within:visible">
        <div class="flex flex-col gap-2 rounded bg-gray-700 p-2 shadow">
          <SearchSelected v-model="model" class="shadow" />
          <SearchSuggestions v-model="model" />
        </div>
      </div>
    </div>
  </form>
</template>
