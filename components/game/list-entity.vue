<script lang="ts" setup>
import { Game, GameFeature } from "~/stores/game/types";

type Props = {
  game: Game;
};

const { game } = defineProps<Props>();

const features = computed(() => [
  { url: "cards", condition: game.isEnabled(GameFeature.Cards) },
  { url: "scenes", condition: game.isEnabled(GameFeature.Scenes) },
  { url: "plugins", condition: game.isEnabled(GameFeature.Plugins) },
  { url: "zipmods", condition: game.isEnabled(GameFeature.ZipMods) },
]);

const [state, toggle] = useToggle();
</script>

<template>
  <section>
    <button class="flex items-center gap-2" type="button" @click="toggle()">
      <img :src="game.icon(1)" :alt="$t(`games.${game.id}`)" />
      <div>{{ $t(`games.${game.id}`) }}</div>
    </button>

    <template v-if="state">
      <template v-for="{ url, condition } of features" :key="url">
        <NuxtLink v-if="condition" :to="`/library/${game.id}/${url}`" class="flex flex-col py-1 pl-6">
          {{ $t(`sidebar.features.${url}`) }}
        </NuxtLink>
      </template>
    </template>
  </section>
</template>
