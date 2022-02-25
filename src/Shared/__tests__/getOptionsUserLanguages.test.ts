import { getOptionsUserLanguages } from '../getOptionsUserLanguages'
import { ILanguages } from '../../Interfaces/ILanguages'

const userLanguages = ['en', 'zh']

const LANGUAGES: ILanguages = {
  eng: {
    '639-1': 'en',
    '639-2': 'eng',
    de: ['Englisch'],
    en: ['English'],
    fr: ['Anglais'],
    ru: ['Английский'],
    svgFile: 'en.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/English_language',
  },
  zho: {
    '639-1': 'zh',
    '639-2': 'zho',
    de: ['Chinesisch'],
    en: ['Chinese'],
    fr: ['Chinoise'],
    ru: ['Китайский'],
    svgFile: 'zh.svg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Mandar_language',
  },
}
const language = 'ru'

describe('Test function getOptionsUserLanguages', () => {
  it('test', () => {
    const outputed = getOptionsUserLanguages(userLanguages, LANGUAGES, language)
    const expected = [
      {
        label: 'Английский',
        value: 'en',
      },
      {
        label: 'Китайский',
        value: 'zh',
      },
    ]
    // console.info('getOptionsUserLanguages.test [40]', { outputed, expected })
    expect(outputed).toEqual(expected)
  })
})
