declare global {
  enum ContentLocaleVariant {
    En,
    Ru,
  }

  const enum ContentIconVariant {
    x16 = 1,
    x24 = 2,
    x32 = 3,
    x48 = 4,
    x64 = 5,
    x96 = 6,
    x128 = 7,
    x192 = 8,
    x256 = 9,
  }

  // enum GameFeature {
  //   None = 0,
  //   Cards = 1,
  //   Scenes = 2,
  //   Plugins = 4,
  //   ZipMods = 8,
  // }

  type ContentLocale = Record<ContentLocaleVariant, string>;
}

export {};
