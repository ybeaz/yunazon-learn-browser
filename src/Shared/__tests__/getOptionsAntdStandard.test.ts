import { getOptionsAntdStandard } from '../getOptionsAntdStandard'

const userSkillsExpertise = [
  'Autoclub',
  'Auto_flea_market',
  'Auto_parts_and_repair',
]

const CATEGORIES_TO_EXCHANGE = {
  Autoclub: { en: 'Autoclub', ru: 'Автоклуб' },
  Auto_flea_market: { en: 'Auto flea market', ru: 'Автобарахолка' },
  Auto_parts_and_repair: {
    en: 'Auto parts and repair',
    ru: 'Автозапчасти и ремонт',
  },
  Bankruptcy: { en: 'Bankruptcy', ru: 'Банкротство' },
  Bankruptcy_of_individuals: {
    en: 'Bankruptcy of individuals',
    ru: 'Банкротство физических лиц',
  },
  Insolvency_manager: {
    en: 'Insolvency manager',
    ru: 'Арбитражное управление',
  },
  Car_audio_and_multimedia: {
    en: 'Car audio and multimedia',
    ru: 'Автозвук и мультимедиа',
  },
}

const language = 'ru'

describe('Test function getOptionsAntdStandard', () => {
  it('test', () => {
    const outputed = getOptionsAntdStandard(
      userSkillsExpertise,
      CATEGORIES_TO_EXCHANGE,
      language
    )

    const expected = [
      { label: 'Автоклуб', value: 'Autoclub' },
      { label: 'Автобарахолка', value: 'Auto_flea_market' },
      { label: 'Автозапчасти и ремонт', value: 'Auto_parts_and_repair' },
    ]

    // console.info('ggetOptionsUserSkillsExpertise.test [42]', { outputed })

    expect(outputed).toEqual(expected)
  })
})
