import { consoler } from 'yourails_common'

import { DICTIONARY } from 'yourails_common'
import modulesJson from '../__mocks__/2025_02_20_modules.json'
import * as expectedDict from '../__mocks__/getQuestionScoresPropsOutExpected'

import {
  getQuestionScoresPropsOut,
  GetQuestionScoresPropsOutParamsType,
  GetQuestionScoresPropsOutOptionsType,
  GetQuestionScoresPropsOutResType,
} from '../Components/QuestionScores/getQuestionScoresPropsOut'

type GetQuestionScoresPropsOutTestType = {
  testScenario: string
  params: GetQuestionScoresPropsOutParamsType
  expected: GetQuestionScoresPropsOutResType
}

const language = 'en'
const handleEvents = () => {}

const tests: GetQuestionScoresPropsOutTestType[] = [
  {
    testScenario: ['success (auth)', 'no names'].join(', '),
    params: {
      navigate: () => {},
      modules: modulesJson as any,
      queryUrl: {
        pageModules: '1',
        pageTags: '1',
        pageDocuments: '1',
        modulesSearch: 'animal testing',
        tagsSearch: 'animal testing',
      },
      handleEvents,
      scenario: {
        scenarioCase: 'success',
        message: 'scenario test success',
        buttonForwardProps: {
          icon: 'MdForward',
          classAdded: 'Button_ConfirmEditName',
          handleEvents,
          action: {
            typeEvent: 'CLICK_ON_CONFIRM_NAMES',
            data: {},
          },
          tooltipText: DICTIONARY.Confirm[language] as any,
          tooltipPosition: 'top',
          captureLeft: DICTIONARY.Confirm[language],
          isDisplaying: true,
        },
      },
      isEditNameVisible: false,
      language: 'en',
      nameFirst: '',
      nameLast: '',
    },
    expected: expectedDict.expected01,
  },
]

/**
 * @Description Test to challenge function getQuestionScoresPropsOut
 * @test yarn jest src/ViewLayer/__tests__/getQuestionScoresPropsOut.test.ts
 * yarn jest src/ViewLayer/__tests__/getQuestionScoresPropsOut.test.ts --coverage --collectCoverageFrom="src/ViewLayer/Components/QuestionScores/getQuestionScoresPropsOut.ts"
 *    In debugging mode:
 *       node --inspect-brk getQuestionScoresPropsOut.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  beforeEach(() => {})

  it.each(tests)(`-- getQuestionScoresPropsOut.test: $testScenario`, ({ params, expected }) => {
    let output: GetQuestionScoresPropsOutResType = getQuestionScoresPropsOut(params)
    // consoler('getQuestionScoresPropsOut.test', { output })

    expect(JSON.stringify(output)).toEqual(JSON.stringify(expected))
  })
})
