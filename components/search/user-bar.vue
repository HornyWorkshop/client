<script lang="ts">
type Entries = Map<number, { id: number; name: string }>;

export type UserSearchModel = {
  tags: {
    exclude: Entries;
    include: Entries;
  };
  authors: {
    exclude: Entries;
    include: Entries;
  };
  franchises: {
    exclude: Entries;
    include: Entries;
  };
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
      <SearchUserSuggs
        v-model="model"
        class="invisible absolute top-full w-full backdrop-blur hover:visible peer-focus-within:visible"
      />
    </div>

    <SearchUserSelected v-model="model" class="pt-2" />
  </form>
</template>
