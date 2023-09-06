<script lang="ts" setup></script>

<template>
  <section class="grid grid-cols-[auto_1fr] gap-4 px-4">
    <AppHeader class="col-span-full" />
    <AddMenuList />
    <slot />
  </section>
</template>

<style scoped></style>
