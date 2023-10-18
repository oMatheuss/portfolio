import 'server-only';

const dictionaries = {
  en: () => import('@/i18n/en.json'),
  'pt-br': () => import('@/i18n/pt-br.json'),
};

export type Langs = keyof typeof dictionaries;

export const getDictionary = async (locale: Langs) => dictionaries[locale]();
