<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useGameStore } from "~/stores/game";

const { gameList } = storeToRefs(useGameStore());
</script>

<template>
  <section class="flex flex-col gap-2 rounded bg-white/5 p-4">
    <GameListEntity v-for="game of gameList" :key="game.id" :game="game" />
  </section>
</template>
