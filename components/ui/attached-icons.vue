<script lang="ts" setup>
const values = defineModel<File[]>({ required: true });

const icons = ref([] as HTMLImageElement[]);

watch(values, async (values) => {
  icons.value = await Promise.all(
    values
      .sort((a, b) => b.size - a.size)
      .map(
        (e) =>
          new Promise<HTMLImageElement>((resolve) => {
            const reader = new FileReader();

            reader.onload = (e) => {
              if (typeof e.target?.result === "string") {
                const image = new Image();
                image.src = e.target.result;
                resolve(image);
              }
            };

            reader.readAsDataURL(e);
          }),
      ),
  );
});

function onFileChange(e: Event) {
  const { target } = e;
  if (target instanceof HTMLInputElement) {
    values.value = Array.from(target.files ?? []);
  }
}
</script>

<template>
  <section>
    <label
      for="icons"
      class="flex w-full cursor-pointer place-content-center place-items-center border border-dashed border-white/10 hover:border-white/50"
      name="icons"
    >
      <template v-if="icons.length <= 0">
        <span class="py-10">
          {{ $t("help") }}
        </span>
      </template>

      <div v-else class="flex flex-wrap gap-2 p-4">
        <div v-for="icon of icons" :key="icon.src" class="flex flex-col items-center gap-2">
          <template v-if="icon.src">
            <div class="none text-center font-bold">{{ icon.width }} x {{ icon.height }}</div>
            <img :src="icon.src" :alt="`${icon.width}x${icon.height}`" />
          </template>
        </div>
      </div>
    </label>
    <UInput id="icons" type="file" class="hidden" multiple accept="image/x-icon" @change="onFileChange" />
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "help": "Drop icons here"
  }
}
</i18n>
