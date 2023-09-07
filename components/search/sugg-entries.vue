<script lang="ts" setup>
type Props = {
  values: { id: number; name: string }[];
};

type Emits = {
  (e: "add", id: number, name: string): void;
  (e: "ban", id: number, name: string): void;
};

defineProps<Props>();
defineEmits<Emits>();
</script>

<template>
  <section class="flex flex-col gap-2 rounded bg-white/5 p-2">
    <h1 class="font-semibold">
      <slot />
    </h1>

    <div class="flex max-h-48 flex-col gap-2 overflow-auto">
      <div v-for="{ id, name } of values" :key="id" class="flex items-center gap-2">
        <button type="button" class="rounded bg-green-900/50 px-2 py-1 hover:opacity-50" @click="$emit('add', id)">
          add
        </button>
        <span class="w-full truncate">
          {{ $t(name) }}
        </span>
        <button type="button" class="rounded bg-red-900/50 px-2 py-1 hover:opacity-50" @click="$emit('ban', id)">
          ban
        </button>
      </div>
    </div>
  </section>
</template>
