export type IMedia = Record<string, { en: string; ru: string }>

export const MEDIA: IMedia = {
  messenger_and_voice: {
    en: 'messenger and voice',
    ru: 'мессенджер и голос',
  },
  messenger: {
    en: 'messenger',
    ru: 'мессенджер',
  },
  voice: {
    en: 'voice',
    ru: 'голос',
  },
  video: {
    en: 'video',
    ru: 'видео',
  },
  anyOnline: {
    en: 'any online tool',
    ru: 'любой способ онлайн',
  },
  // Zoom: {
  //   en: 'Zoom',
  //   ru: 'Zoom',
  // },
  // WhatsApp: {
  //   en: 'WhatsApp',
  //   ru: 'WhatsApp',
  // },
  // Telegram: {
  //   en: 'Telegram',
  //   ru: 'Telegram',
  // },
  // Discord: {
  //   en: 'Discord',
  //   ru: 'Discord',
  // },
  // offline: {
  //   en: 'meet in person',
  //   ru: 'встреча лично',
  // },
  other: {
    en: 'other',
    ru: 'другое',
  },
}
