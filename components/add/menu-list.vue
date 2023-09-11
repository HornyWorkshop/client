<template>
  <section class="flex flex-col content-start items-start justify-start gap-2 rounded bg-gray-800 px-4 py-2">
    <NuxtLink to="/add/game">{{ $t("game") }}</NuxtLink>
    <NuxtLink to="/add/card">{{ $t("card") }}</NuxtLink>
    <NuxtLink to="/add/scene">{{ $t("scene") }}</NuxtLink>
    <NuxtLink to="/add/plugin">{{ $t("plugin") }}</NuxtLink>
    <NuxtLink to="/add/zipmod">{{ $t("zipmod") }}</NuxtLink>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "game": "Game",
    "card": "Card",
    "scene": "Scene",
    "plugin": "Plugin",
    "zipmod": "ZipMod"
  }
}
</i18n>
