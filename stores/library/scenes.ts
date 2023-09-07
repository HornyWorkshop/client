import { useGamesQuery } from "~/api/gql";

type FilterEntries = {
  tags: Set<number>;
  authors: Set<number>;
  persons: Set<number>;
  franchises: Set<number>;
};

type Filter = {
  exclude: FilterEntries;
  include: FilterEntries;
};

export const useScenesStore = defineStore("scenes-store", () => {
})

export const useGamesStore = defineStore("games-store", () => {
  const games = reactive(new Map<number, Filter>());

  const { onResult } = useGamesQuery();

  onResult((e) => {
    for (const game of e.data.games) {
      if (games.has(game.id) === false) {
        games.set(game.id, {
          exclude: {
            tags: new Set(),
            authors: new Set(),
            persons: new Set(),
            franchises: new Set(),
          },
          include: {
            tags: new Set(),
            authors: new Set(),
            persons: new Set(),
            franchises: new Set(),
          },
        });
      }
    }
  });
});
