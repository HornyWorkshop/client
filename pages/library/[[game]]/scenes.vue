<script lang="ts" setup>
import { useScenesQuery } from "~/api/gql";
import { UserSearchModel } from "~/components/search/bar.vue";

definePageMeta({ layout: "library" });
const route = useRoute();

const model = reactive({
  tags: { exclude: new Map(), include: new Map() },
  authors: { exclude: new Map(), include: new Map() },
  franchises: { exclude: new Map(), include: new Map() },
  value: "",
} as UserSearchModel);

const { result } = useScenesQuery({ id: Number(route.params.game) });
</script>

<template>
  <section class="flex flex-col gap-4">
    <SearchBar v-model="model" />

    <div class="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-4">
      <template v-for="{ cursor, node } of result?.scenes?.edges" :key="cursor">
        <div v-if="node.versions.length">
          <img :src="node.versions[0].cover" :alt="node.versions[0].cover" class="w-full" />
        </div>
      </template>
    </div>
  </section>
</template>
