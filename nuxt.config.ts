// import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxthq/ui", "@pinia/nuxt", "@nuxtjs/i18n", "nuxt-icon", "@vueuse/nuxt"],
  devtools: { enabled: true },
  ssr: false,
  i18n: {},
  devServer: {
    port: 1420,
  },
  vue: {
    propsDestructure: true,
    defineModel: true,
  },
  pinia: {
    autoImports: ["defineStore"],
  },
  vite: {
    // https://github.com/intlify/bundle-tools/issues/273
    // plugins: [VueI18nPlugin({})],
    clearScreen: true,
    server: {
      strictPort: true,
    },
    envPrefix: ["VITE_", "TAURI_"],
  },
});
