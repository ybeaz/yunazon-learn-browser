import { consoler } from '../consoler'
import { consolerError } from '../consolerError'

import { getObjectCleared } from '../getObjectCleared'

/**
 * @Description Test to challenge function getObjectCleared
 * @test yarn jest getObjectCleared.test.ts
 */

describe('Algoritms', () => {
  it('-- getObjectCleared.test', () => {
    const obj01 = {
      courseActive: {
        courseID: 'cj8dDTHGJBY',
        passRate: 0.75,
        meta: {
          institution: 'YouRails Academy',
          specTitle: 'Tutor',
          specName: 'Anna Ches',
          email: 'anya.cheskidova@gmail.com',
          isSendingBcc: false,
          __typename: 'MetaType',
        },
        modules: [
          {
            moduleID: 'cj8dDTHGJBY',
            index: 0,
            isActive: true,
            contentType: 'ytID',
            contentID: 'cj8dDTHGJBY',
            capture: 'Модуль I',
            duration: '11:34',
            questions: [
              {
                questionID: 'UZTgswU6_SAskInnb_pY2',
                capture: 'What did Robert Hooke discover?',
                isActive: true,
                options: [
                  {
                    optionID: 'ka4EHelfB30eE_cfL-sNy',
                    label: 'cell',
                    status: true,
                    __typename: 'OptionType',
                    answer: false,
                  },
                ],
                __typename: 'QuestionType',
              },
            ],
            __typename: 'ModuleType',
          },
        ],
        __typename: 'CourseType',
      },
    }

    const obj02 = {
      courseActive: {
        courseID: 'cj8dDTHGJBY',
        passRate: 0.75,
        meta: {
          institution: 'YouRails Academy',
          specTitle: 'Tutor',
          specName: 'Anna Ches',
          email: 'anya.cheskidova@gmail.com',
          isSendingBcc: false,
        },
        modules: [
          {
            moduleID: 'cj8dDTHGJBY',
            index: 0,
            isActive: true,
            contentType: 'ytID',
            contentID: 'cj8dDTHGJBY',
            capture: 'Модуль I',
            duration: '11:34',
            questions: [
              {
                questionID: 'UZTgswU6_SAskInnb_pY2',
                capture: 'What did Robert Hooke discover?',
                isActive: true,
                options: [
                  {
                    optionID: 'ka4EHelfB30eE_cfL-sNy',
                    label: 'cell',
                    status: true,

                    answer: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    }

    const obj10 = {
      courseActive: {
        courseID: 'cj8dDTHGJBY',
        capture:
          'Eukaryopolis - The City of Animal Cells: Crash Course Biology #4',
        description:
          'Hank tells us about the city of Eukaryopolis - the animal cell that is responsible for all the cool things that happen in our bodies.',
        language: 'ru',
        isActive: true,
        dateCreated: 1640995200000,
        dateUpdated: 1640995200000,
        dateDeleted: null,
        meta: {
          institution: 'YouRails Academy',
          specTitle: 'Tutor',
          specName: 'Anna Ches',
          email: 'anya.cheskidova@gmail.com',
          isSendingBcc: false,
          __typename: 'MetaType',
        },
        modules: [
          {
            moduleID: 'cj8dDTHGJBY',
            index: 0,
            isActive: true,
            contentType: 'ytID',
            contentID: 'cj8dDTHGJBY',
            capture: 'Модуль I',
            duration: '11:34',
            questionNumber: 5,
            passRate: 0.75,
            questions: [
              {
                questionID: 'UZTgswU6_SAskInnb_pY2',
                capture: 'What did Robert Hooke discover?',
                isActive: true,
                options: [
                  {
                    optionID: 'US_Ntf3t4TJA27SM50A1a',
                    label: 'membrane',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: 'Vl_XaLMd1GLKXPta8LBeA',
                    label: 'organelles',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: 'K-maruT7SKYLJyO4ngz2h',
                    label: 'nucleus',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: 'ka4EHelfB30eE_cfL-sNy',
                    label: 'cell',
                    status: true,
                    __typename: 'OptionType',
                    answer: false,
                  },
                ],
                __typename: 'QuestionType',
              },
              {
                questionID: '8JpWcBEDysroKiCsIR64E',
                capture: 'What are the cilia and flagella made of?',
                isActive: true,
                options: [
                  {
                    optionID: 'bfud4EkMb4Z5q5-j48TAX',
                    label: 'protein microtubules',
                    status: true,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: 'WfOBRXcN8kWSB0w8SSB5F',
                    label: 'cellulose',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                ],
                __typename: 'QuestionType',
              },
              {
                questionID: 'QpB6zCXtxxmEG5iwEzCWQ',
                capture: 'What is the function of the membrane?',
                isActive: true,
                options: [
                  {
                    optionID: 'KKb2OcbnnBvD0VylLcPBs',
                    label: 'synthesizes proteins',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: 'sMmiL7f1Vdv5VLAWz-NbT',
                    label: 'controls what goes in and out of the cage.',
                    status: true,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: '2CA-PSuNw-dk-rMqTEtZh',
                    label: 'performs heat exchange with the environment',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                ],
                __typename: 'QuestionType',
              },
              {
                questionID: '-XSDKbBl7SR32_Y8mNYEF',
                capture:
                  'Does the cytoplasm provide infrastructure for ALL organelles?',
                isActive: true,
                options: [
                  {
                    optionID: 'gDQgq8cD1iVISaXI18lR2',
                    label: 'no',
                    status: true,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: 'YIvI59HDbvpEWTzIf8RlG',
                    label: 'yes',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                ],
                __typename: 'QuestionType',
              },
              {
                questionID: 'jMv9UbNjxPyLDeau-hG2x',
                capture: 'What does a rough ER do?',
                isActive: true,
                options: [
                  {
                    optionID: '_rYGNSmaVS93lqaXpIZ0v',
                    label: 'gives the cell a shape',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: 'QyKGAQMbadDD649ImRtoO',
                    label: 'helps to synthesize and package proteins',
                    status: true,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: 'KJ6qrAd5mzUnt1LnDl30I',
                    label: 'helps make lipids',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: 'HbW6gO99endjl1uUygeRl',
                    label: 'protects the cell from the inside',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                ],
                __typename: 'QuestionType',
              },
              {
                questionID: 'YZCk4TKpSOmEUoWVF_NER',
                capture: 'What is the job of ribosomes?',
                isActive: true,
                options: [
                  {
                    optionID: '3p8QbAvUOI8CCf8l2ngui',
                    label: 'collect proteins',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: '6pnvfTmGm9Ad4wNO5Uxwi',
                    label: 'create energy',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: 'UvyaLhkzTdxPudyCPeRMZ',
                    label: 'collect amino acids and polypeptides',
                    status: true,
                    __typename: 'OptionType',
                    answer: false,
                  },
                ],
                __typename: 'QuestionType',
              },
              {
                questionID: '9tsYtXnHU1caP9iRPzmP9',
                capture:
                  'What is the name of the particles that make up the Golgi apparatus?',
                isActive: true,
                options: [
                  {
                    optionID: '4EG1eW3IUE9VT_VyiyVsO',
                    label: 'Golgi components',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: '79yUuKCFJSJ-kCxDNWBsi',
                    label: 'mini membrane',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: 'SsMgzC4r307JpABGaqrhI',
                    label: 'Golgi pouches',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: 'lvEameL__BUKV-OqxfKcr',
                    label: 'Golgi bodies',
                    status: true,
                    __typename: 'OptionType',
                    answer: false,
                  },
                ],
                __typename: 'QuestionType',
              },
              {
                questionID: 'l84s8--Z7q0PXg_F2b3P9',
                capture: 'What is the function of lysosomes?',
                isActive: true,
                options: [
                  {
                    optionID: 'Zh8aBFNHSPEsaK90IhwSo',
                    label: 'waste recycling',
                    status: true,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: 'crtKg7KFFdae5V2P1ba3W',
                    label: 'lead the cell',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: 'GV1d0tmIvr8ZurYQzy6Mq',
                    label: 'produce proteins',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: 'Cuzm-HhIhBwR4LQ0dTT7R',
                    label: 'generate energy',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                ],
                __typename: 'QuestionType',
              },
              {
                questionID: '4n_SuEfbZC3HWW1w8PfBo',
                capture: 'What does the nucleus store?',
                isActive: true,
                options: [
                  {
                    optionID: 'Y-04YaY8Hu9F7xULLqI8N',
                    label: 'RVC',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: 'v_S2nx6MAdVU9y661JSMG',
                    label: 'RNA',
                    status: false,
                    __typename: 'OptionType',
                    answer: false,
                  },
                  {
                    optionID: 'AVHsTQ_F47u4loQZzcvlz',
                    label: 'DNA',
                    status: true,
                    __typename: 'OptionType',
                    answer: false,
                  },
                ],
                __typename: 'QuestionType',
              },
            ],
            __typename: 'ModuleType',
          },
        ],
        __typename: 'CourseType',
        searchString:
          'eukaryopolis - the city of animal cells: crash course biology #4 hank tells us about the city of eukaryopolis - the animal cell that is responsible for all the cool things that happen in our bodies. модуль i  what did robert hooke discover? membrane organelles nucleus cell what are the cilia and flagella made of? protein microtubules cellulose what is the function of the membrane? synthesizes proteins controls what goes in and out of the cage. performs heat exchange with the environment does the cytoplasm provide infrastructure for all organelles? no yes what does a rough er do? gives the cell a shape helps to synthesize and package proteins helps make lipids protects the cell from the inside what is the job of ribosomes? collect proteins create energy collect amino acids and polypeptides what is the name of the particles that make up the golgi apparatus? golgi components mini membrane golgi pouches golgi bodies what is the function of lysosomes? waste recycling lead the cell produce proteins generate energy what does the nucleus store? rvc rna dna',
      },
    }

    const obj11 = {
      courseActive: {
        courseID: 'cj8dDTHGJBY',
        capture:
          'Eukaryopolis - The City of Animal Cells: Crash Course Biology #4',
        description:
          'Hank tells us about the city of Eukaryopolis - the animal cell that is responsible for all the cool things that happen in our bodies.',
        language: 'ru',
        isActive: true,
        dateCreated: 1640995200000,
        dateUpdated: 1640995200000,
        dateDeleted: null,
        meta: {
          institution: 'YouRails Academy',
          specTitle: 'Tutor',
          specName: 'Anna Ches',
          email: 'anya.cheskidova@gmail.com',
          isSendingBcc: false,
        },
        modules: [
          {
            moduleID: 'cj8dDTHGJBY',
            index: 0,
            isActive: true,
            contentType: 'ytID',
            contentID: 'cj8dDTHGJBY',
            capture: 'Модуль I',
            duration: '11:34',
            questionNumber: 5,
            passRate: 0.75,
            questions: [
              {
                questionID: 'UZTgswU6_SAskInnb_pY2',
                capture: 'What did Robert Hooke discover?',
                isActive: true,
                options: [
                  {
                    optionID: 'US_Ntf3t4TJA27SM50A1a',
                    label: 'membrane',
                    status: false,

                    answer: false,
                  },
                  {
                    optionID: 'Vl_XaLMd1GLKXPta8LBeA',
                    label: 'organelles',
                    status: false,

                    answer: false,
                  },
                  {
                    optionID: 'K-maruT7SKYLJyO4ngz2h',
                    label: 'nucleus',
                    status: false,

                    answer: false,
                  },
                  {
                    optionID: 'ka4EHelfB30eE_cfL-sNy',
                    label: 'cell',
                    status: true,

                    answer: false,
                  },
                ],
              },
              {
                questionID: '8JpWcBEDysroKiCsIR64E',
                capture: 'What are the cilia and flagella made of?',
                isActive: true,
                options: [
                  {
                    optionID: 'bfud4EkMb4Z5q5-j48TAX',
                    label: 'protein microtubules',
                    status: true,

                    answer: false,
                  },
                  {
                    optionID: 'WfOBRXcN8kWSB0w8SSB5F',
                    label: 'cellulose',
                    status: false,

                    answer: false,
                  },
                ],
              },
              {
                questionID: 'QpB6zCXtxxmEG5iwEzCWQ',
                capture: 'What is the function of the membrane?',
                isActive: true,
                options: [
                  {
                    optionID: 'KKb2OcbnnBvD0VylLcPBs',
                    label: 'synthesizes proteins',
                    status: false,

                    answer: false,
                  },
                  {
                    optionID: 'sMmiL7f1Vdv5VLAWz-NbT',
                    label: 'controls what goes in and out of the cage.',
                    status: true,

                    answer: false,
                  },
                  {
                    optionID: '2CA-PSuNw-dk-rMqTEtZh',
                    label: 'performs heat exchange with the environment',
                    status: false,

                    answer: false,
                  },
                ],
              },
              {
                questionID: '-XSDKbBl7SR32_Y8mNYEF',
                capture:
                  'Does the cytoplasm provide infrastructure for ALL organelles?',
                isActive: true,
                options: [
                  {
                    optionID: 'gDQgq8cD1iVISaXI18lR2',
                    label: 'no',
                    status: true,

                    answer: false,
                  },
                  {
                    optionID: 'YIvI59HDbvpEWTzIf8RlG',
                    label: 'yes',
                    status: false,

                    answer: false,
                  },
                ],
              },
              {
                questionID: 'jMv9UbNjxPyLDeau-hG2x',
                capture: 'What does a rough ER do?',
                isActive: true,
                options: [
                  {
                    optionID: '_rYGNSmaVS93lqaXpIZ0v',
                    label: 'gives the cell a shape',
                    status: false,

                    answer: false,
                  },
                  {
                    optionID: 'QyKGAQMbadDD649ImRtoO',
                    label: 'helps to synthesize and package proteins',
                    status: true,

                    answer: false,
                  },
                  {
                    optionID: 'KJ6qrAd5mzUnt1LnDl30I',
                    label: 'helps make lipids',
                    status: false,

                    answer: false,
                  },
                  {
                    optionID: 'HbW6gO99endjl1uUygeRl',
                    label: 'protects the cell from the inside',
                    status: false,

                    answer: false,
                  },
                ],
              },
              {
                questionID: 'YZCk4TKpSOmEUoWVF_NER',
                capture: 'What is the job of ribosomes?',
                isActive: true,
                options: [
                  {
                    optionID: '3p8QbAvUOI8CCf8l2ngui',
                    label: 'collect proteins',
                    status: false,

                    answer: false,
                  },
                  {
                    optionID: '6pnvfTmGm9Ad4wNO5Uxwi',
                    label: 'create energy',
                    status: false,

                    answer: false,
                  },
                  {
                    optionID: 'UvyaLhkzTdxPudyCPeRMZ',
                    label: 'collect amino acids and polypeptides',
                    status: true,

                    answer: false,
                  },
                ],
              },
              {
                questionID: '9tsYtXnHU1caP9iRPzmP9',
                capture:
                  'What is the name of the particles that make up the Golgi apparatus?',
                isActive: true,
                options: [
                  {
                    optionID: '4EG1eW3IUE9VT_VyiyVsO',
                    label: 'Golgi components',
                    status: false,

                    answer: false,
                  },
                  {
                    optionID: '79yUuKCFJSJ-kCxDNWBsi',
                    label: 'mini membrane',
                    status: false,

                    answer: false,
                  },
                  {
                    optionID: 'SsMgzC4r307JpABGaqrhI',
                    label: 'Golgi pouches',
                    status: false,

                    answer: false,
                  },
                  {
                    optionID: 'lvEameL__BUKV-OqxfKcr',
                    label: 'Golgi bodies',
                    status: true,

                    answer: false,
                  },
                ],
              },
              {
                questionID: 'l84s8--Z7q0PXg_F2b3P9',
                capture: 'What is the function of lysosomes?',
                isActive: true,
                options: [
                  {
                    optionID: 'Zh8aBFNHSPEsaK90IhwSo',
                    label: 'waste recycling',
                    status: true,

                    answer: false,
                  },
                  {
                    optionID: 'crtKg7KFFdae5V2P1ba3W',
                    label: 'lead the cell',
                    status: false,

                    answer: false,
                  },
                  {
                    optionID: 'GV1d0tmIvr8ZurYQzy6Mq',
                    label: 'produce proteins',
                    status: false,

                    answer: false,
                  },
                  {
                    optionID: 'Cuzm-HhIhBwR4LQ0dTT7R',
                    label: 'generate energy',
                    status: false,

                    answer: false,
                  },
                ],
              },
              {
                questionID: '4n_SuEfbZC3HWW1w8PfBo',
                capture: 'What does the nucleus store?',
                isActive: true,
                options: [
                  {
                    optionID: 'Y-04YaY8Hu9F7xULLqI8N',
                    label: 'RVC',
                    status: false,

                    answer: false,
                  },
                  {
                    optionID: 'v_S2nx6MAdVU9y661JSMG',
                    label: 'RNA',
                    status: false,

                    answer: false,
                  },
                  {
                    optionID: 'AVHsTQ_F47u4loQZzcvlz',
                    label: 'DNA',
                    status: true,

                    answer: false,
                  },
                ],
              },
            ],
          },
        ],

        searchString:
          'eukaryopolis - the city of animal cells: crash course biology #4 hank tells us about the city of eukaryopolis - the animal cell that is responsible for all the cool things that happen in our bodies. модуль i  what did robert hooke discover? membrane organelles nucleus cell what are the cilia and flagella made of? protein microtubules cellulose what is the function of the membrane? synthesizes proteins controls what goes in and out of the cage. performs heat exchange with the environment does the cytoplasm provide infrastructure for all organelles? no yes what does a rough er do? gives the cell a shape helps to synthesize and package proteins helps make lipids protects the cell from the inside what is the job of ribosomes? collect proteins create energy collect amino acids and polypeptides what is the name of the particles that make up the golgi apparatus? golgi components mini membrane golgi pouches golgi bodies what is the function of lysosomes? waste recycling lead the cell produce proteins generate energy what does the nucleus store? rvc rna dna',
      },
    }

    const obj20 = obj01

    const obj21 = {
      courseActive: {
        courseID: null,
        passRate: null,
        meta: {
          institution: null,
          specTitle: null,
          specName: null,
          email: null,
          isSendingBcc: null,
        },
        modules: [
          {
            moduleID: null,
            index: null,
            isActive: null,
            contentType: null,
            contentID: null,
            capture: null,
            duration: null,
            questions: [
              {
                questionID: null,
                capture: null,
                isActive: null,
                options: [
                  {
                    optionID: null,
                    label: null,
                    status: null,
                    answer: null,
                  },
                ],
              },
            ],
          },
        ],
      },
    }

    const options = {
      propsToRemove: ['__typename'],
    }
    const options2 = {
      propsToRemove: ['__typename'],
      isAnyPropertyToNull: true,
    }

    const tests = [
      { isActive: true, input: obj20, options: options2, expected: obj21 },
      { isActive: true, input: obj10, options, expected: obj11 },
      { isActive: true, input: obj01, options, expected: obj02 },
    ]

    tests.forEach(test => {
      const { isActive, input, options, expected } = test

      if (isActive) {
        let outputed = getObjectCleared(input, options)
        // consoler('getObjectCleared.test', '[736]', { outputed })
        expect(outputed).toEqual(expected)
      }
    })
  })
})
