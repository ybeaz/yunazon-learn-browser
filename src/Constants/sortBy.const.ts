export type ISortBy = Record<string, { en: string; ru: string }>

export const SORT_BY: ISortBy = {
  ascending: {
    en: 'ascending',
    ru: 'возрастание',
  },
  descending: {
    en: 'descending',
    ru: 'убывание',
  },
  other: {
    en: 'no sorting',
    ru: 'не сортировать',
  },
}
