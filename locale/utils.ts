import { LocaleModel } from "~/api/gql";

export function mergeLocale(
  id: number,
  token: string,
  values: Omit<LocaleModel, "id">,
  callable: (locale: string, token: string, value: string) => void,
) {
  for (const [locale, value] of Object.entries(values)) {
    callable(locale, `${token}.${id}`, value);
  }
}
