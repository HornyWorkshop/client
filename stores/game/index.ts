import { useGamesQuery } from "~/api/gql";
import { mergeLocale } from "~/locale/utils";
import { Game } from "./types";

export const useGameStore = defineStore("game-store", () => {
  const { result } = useGamesQuery();
  const gameList = computed(() => result.value?.games.map((e) => new Game(e.id, e.features)) ?? []);

  const { mergeLocaleMessage } = useI18n();
  watch(result, (values) => {
    if (!values) {
      return;
    }

    for (const { id, name } of values.games) {
      mergeLocale(id, "games", name, (locale: string, token: string, value: string) =>
        mergeLocaleMessage(locale, { [token]: value }),
      );
    }
  });

  return { gameList };
});
