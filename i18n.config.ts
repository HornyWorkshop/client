import { messages } from "./locale";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  silentFallbackWarn: true,
  silentTranslationWarn: true,
  messages,
}));
