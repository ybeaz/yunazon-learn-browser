export type ISortBy = Record<string, { en: string; ru: string }>

export const SORT_BY: ISortBy = {
  ascending: {
    en: 'ascending by date',
    ru: 'возрастание по дате',
  },
  descending: {
    en: 'descending by date',
    ru: 'убывание по дате',
  },
  other: {
    en: 'no sorting',
    ru: 'не сортировать',
  },
}
