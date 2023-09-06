export class Game {
  public constructor(
    public id: number,
    public features: GameFeature,
  ) {}

  public isEnabled(feature: GameFeature) {
    return (this.features & feature) === feature;
  }

  public icon(icon: ContentIconVariant) {
    return `http://localhost:5000/assets/icons/games/${this.id}/${icon}.ico`;
  }
}

export enum GameFeature {
  None = 0,
  Cards = 1,
  Scenes = 2,
  Plugins = 4,
  ZipMods = 8,
}
