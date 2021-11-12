export const SVG_FILE_DIR: string = 'https://yourails.com/images/languages/'
export interface ILanguage {
  '639-1'?: string
  '639-2'?: string
  '639-2/B'?: string
  de: string[]
  en: string[]
  fr: string[]
  ru: string[]
  svgFile: string
  wikiUrl: string
}

export type ILanguages = Record<string, ILanguage>

export const LANGUAGES: ILanguages = {
  eng: {
    '639-1': 'en',
    '639-2': 'eng',
    de: ['Englisch'],
    en: ['English'],
    fr: ['anglais'],
    ru: ['Английский'],
    svgFile: 'en.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/English_language',
  },
  zho: {
    '639-2': 'zh',
    de: ['Chinesisch'],
    en: ['Chinese'],
    fr: ['Chinoise'],
    ru: ['Китайский'],
    svgFile: 'zh.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Mandar_language',
  },
  hin: {
    '639-1': 'hi',
    '639-2': 'hin',
    de: ['Hindi'],
    en: ['Hindi'],
    fr: ['hindi'],
    ru: ['Хинди'],
    svgFile: 'hi.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Hindi_language',
  },
  spa: {
    '639-1': 'es',
    '639-2': 'spa',
    de: ['Spanisch'],
    en: ['Spanish', 'Castilian'],
    fr: ['espagnol', 'castillan'],
    ru: ['Испанский'],
    svgFile: 'es.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Spanish_language',
  },
  ara: {
    '639-1': 'ar',
    '639-2': 'ara',
    de: ['Arabisch'],
    en: ['Arabic'],
    fr: ['arabe'],
    ru: ['Арабский'],
    svgFile: 'ar.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Arabic_language',
  },
  ben: {
    '639-1': 'bn',
    '639-2': 'ben',
    de: ['Bengali'],
    en: ['Bengali'],
    fr: ['bengali'],
    ru: ['Бенгали'],
    svgFile: 'bn.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Bengali_language',
  },
  fra: {
    '639-1': 'fr',
    '639-2': 'fra',
    '639-2/B': 'fre',
    de: ['Französisch'],
    en: ['French'],
    fr: ['français'],
    ru: ['Французский'],
    svgFile: 'fr.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/French_language',
  },
  rus: {
    '639-1': 'ru',
    '639-2': 'rus',
    de: ['Russisch'],
    en: ['Russian'],
    fr: ['russe'],
    ru: ['Русский'],
    svgFile: 'ru.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Russian_language',
  },
  por: {
    '639-1': 'pt',
    '639-2': 'por',
    de: ['Portugiesisch'],
    en: ['Portuguese'],
    fr: ['portugais'],
    ru: ['Португальский'],
    svgFile: 'pt.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Portuguese_language',
  },
  urd: {
    '639-1': 'ur',
    '639-2': 'urd',
    de: ['Urdu'],
    en: ['Urdu'],
    fr: ['ourdou'],
    ru: ['Урду'],
    svgFile: 'ur.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Urdu_language',
  },
  ind: {
    '639-1': 'id',
    '639-2': 'ind',
    de: ['Bahasa Indonesia'],
    en: ['Indonesian'],
    fr: ['indonésien'],
    ru: ['Индонезийский'],
    svgFile: 'id.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Indonesian_language',
  },
  deu: {
    '639-1': 'de',
    '639-2': 'deu',
    '639-2/B': 'ger',
    de: ['Deutsch'],
    en: ['German'],
    fr: ['allemand'],
    ru: ['Немецкий'],
    svgFile: 'de.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/German_language',
  },
  jpn: {
    '639-1': 'ja',
    '639-2': 'jpn',
    de: ['Japanisch'],
    en: ['Japanese'],
    fr: ['japonais'],
    ru: ['Японский'],
    svgFile: 'ja.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Japanese_language',
  },
  kor: {
    '639-1': 'ko',
    '639-2': 'kor',
    de: ['Koreanisch'],
    en: ['Korean'],
    fr: ['coréen'],
    ru: ['Корейский'],
    svgFile: 'ko.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Korean_language',
  },
}
