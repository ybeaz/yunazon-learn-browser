export type IMedia = Record<string, { en: string; ru: string }>

export const MEDIA: IMedia = {
  offline: {
    en: 'offline',
    ru: '',
  },
  Zoom: {
    en: 'Zoom',
    ru: 'Zoom',
  },
  WhatsApp: {
    en: 'WhatsApp',
    ru: 'WhatsApp',
  },
  Telegram: {
    en: 'Telegram',
    ru: 'Telegram',
  },
  Discord: {
    en: 'Discord',
    ru: 'Discord',
  },
  other: {
    en: 'other',
    ru: 'другой',
  },
}
