import { ILanguages } from '../Interfaces/ILanguages'

/**
 * @description Const to define app languages
 * @reference See src/Constants/languagesAll.const.ts
 */
export const LANGUAGES_APP: ILanguages = {
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
}
