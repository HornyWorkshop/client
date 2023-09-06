<script lang="ts" setup>
import { UserSearchModel } from "./user-bar.vue";

const model = defineModel<UserSearchModel>({ required: true });
</script>

<template>
  <section class="rounded bg-white/5">
    <h1 class="text-center font-bold">Selected</h1>

    <section class="flex flex-wrap gap-2 p-2">
      <span
        v-for="{ id, name } of [...model.tags.include, ...model.authors.include, ...model.franchises.include]"
        :key="id"
        class="rounded bg-green-500/10 px-2"
      >
        {{ $t(name) }}
      </span>

      <span
        v-for="{ id, name } of [...model.tags.exclude, ...model.authors.exclude, ...model.franchises.exclude]"
        :key="id"
        class="rounded bg-red-500/10 px-2"
      >
        {{ $t(name) }}
      </span>
    </section>
  </section>
</template>
