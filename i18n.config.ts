import { messages } from "./locale";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  silentFallbackWarn: import.meta.dev,
  silentTranslationWarn: import.meta.dev,
  messages
}));
