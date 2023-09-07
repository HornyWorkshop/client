<script lang="ts">
export type Entry = Map<number, string>;

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
      <SearchUserInput v-model="model" class="peer" />
      <div class="invisible absolute top-full w-full pt-2 hover:visible peer-focus-within:visible">
        <div class="flex flex-col gap-2 rounded bg-white/5 p-2 shadow backdrop-blur">
          <SearchUserSelected v-model="model" class="shadow" />
          <SearchUserSuggs v-model="model" class="shadow" />
        </div>
      </div>
    </div>
  </form>
</template>
