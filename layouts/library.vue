<script lang="ts" setup></script>

<template>
  <section class="grid grid-cols-[auto_1fr] items-start gap-4 px-4 pb-4">
    <AppHeader class="col-span-full" />
    <GameList />
    <section class="rounded bg-white/5 p-4">
      <slot />
    </section>
  </section>
</template>

<style scoped></style>
