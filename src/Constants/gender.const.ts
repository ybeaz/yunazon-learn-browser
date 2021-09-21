export type IGender = Record<string, { en: string; ru: string }>

export const GENDER: IGender = {
  female: {
    en: 'female',
    ru: 'женщина',
  },
  male: {
    en: 'male',
    ru: 'мужчина',
  },
  both: {
    en: 'both',
    ru: 'все',
  },
  other: {
    en: 'other',
    ru: 'другой',
  },
}
