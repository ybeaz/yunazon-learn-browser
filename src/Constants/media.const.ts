export type IMedia = Record<string, { en: string; ru: string }>

export const MEDIA: IMedia = {
  instant_online: {
    en: 'instant online',
    ru: 'онлайн в текущем времени',
  },
  anyOnline: {
    en: 'any online tool',
    ru: 'любой способ онлайн',
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
  offline: {
    en: 'meet in person',
    ru: 'встреча лично',
  },
  other: {
    en: 'other',
    ru: 'другое',
  },
}
