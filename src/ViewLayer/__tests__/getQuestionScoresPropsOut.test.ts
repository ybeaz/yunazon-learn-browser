import { ReactElement, JSXElementConstructor } from 'react'
import { consoler } from 'yourails_common'
import { handleEvents } from '../../DataLayer/index.handleEvents'

import { DICTIONARY } from 'yourails_common'
import modulesJson from '../__mocks__/2025_02_20_modules.json'

import {
  getQuestionScoresPropsOut,
  GetQuestionScoresPropsOutParamsType,
  GetQuestionScoresPropsOutOptionsType,
  GetQuestionScoresPropsOutResType,
} from '../Components/QuestionScores/getQuestionScoresPropsOut'

type GetQuestionScoresPropsOutTestType = {
  params: GetQuestionScoresPropsOutParamsType
  options: GetQuestionScoresPropsOutOptionsType
  expected: GetQuestionScoresPropsOutResType
}

const language = 'en'

const tests: GetQuestionScoresPropsOutTestType[] = [
  {
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
    options: {},
    // @ts-expect-error
    expected: {},
  },
]

/**
 * @Description Test to challenge function getQuestionScoresPropsOut
 * @test yarn jest src/ViewLayer/__tests__/getQuestionScoresPropsOut.test.ts
 *    In debugging mode:
 *       node --inspect-brk getQuestionScoresPropsOut.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  beforeEach(() => {})

  it.each(tests)('-- getQuestionScoresPropsOut.test', ({ params, options, expected }) => {
    let output: GetQuestionScoresPropsOutResType = getQuestionScoresPropsOut(params, options)
    consoler('getQuestionScoresPropsOut.test', { output })

    // expect(output).toEqual(expected)
  })
})
