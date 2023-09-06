<script lang="ts" setup>
import { useScenesQuery } from "~/api/gql";
import { UserSearchModel } from "~/components/search/user-bar.vue";

definePageMeta({ layout: "library" });
const route = useRoute();

const model = reactive({
  tags: { exclude: [{ id: 1, name: "test 1" }], include: [{ id: 2, name: "test 2" }] },
  authors: { exclude: [], include: [] },
  franchises: { exclude: [], include: [] },
  value: "",
} as UserSearchModel);

const { result } = useScenesQuery({ id: Number(route.params.game) });
</script>

<template>
  <section class="flex flex-col gap-4">
    <SearchUserBar v-model="model" />

    <div class="flex flex-wrap justify-around gap-4">
      <template v-for="{ cursor, node } of result?.scenes?.edges" :key="cursor">
        <div v-if="node.versions.length">
          <img :src="node.versions[0].cover" :alt="node.versions[0].cover" />
        </div>
      </template>
    </div>
  </section>
</template>
