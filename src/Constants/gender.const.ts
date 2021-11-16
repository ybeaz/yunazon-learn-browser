export type IGender = Record<string, { en: string; ru: string }>

export const GENDER: IGender = {
  any: {
    en: 'any',
    ru: 'любой',
  },
  female: {
    en: 'female',
    ru: 'женщина',
  },
  male: {
    en: 'male',
    ru: 'мужчина',
  },
  other: {
    en: 'other',
    ru: 'другое',
  },
}
