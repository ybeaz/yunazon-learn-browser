import { getOptionsUserLocaleCountry } from '../getOptionsUserLocaleCountry'

const userLocaleCountry = 'usa'

const COUNTRIES = [
  {
    id: 840,
    name: 'United States of America',
    alpha2: 'us',
    alpha3: 'usa',
    dictionary: {
      en: 'United States of America',
      ru: 'Соединенные Штаты Америки',
    },
  },
  {
    id: 826,
    name: 'United Kingdom of Great Britain and Northern Ireland',
    alpha2: 'gb',
    alpha3: 'gbr',
    dictionary: {
      en: 'Great Britain',
      ru: 'Великобритания',
    },
  },
]

const language = 'ru'

describe('Test function getOptionsAntdStandard', () => {
  it('test', () => {
    const outputed = getOptionsUserLocaleCountry(
      userLocaleCountry,
      COUNTRIES,
      language
    )

    const expected = [{ label: 'Соединенные Штаты Америки', value: 'usa' }]

    // console.info('getOptionsUserLocaleCountry.test [49]', {
    //   expected,
    //   outputed,
    // })

    expect(outputed).toEqual(expected)
  })
})
