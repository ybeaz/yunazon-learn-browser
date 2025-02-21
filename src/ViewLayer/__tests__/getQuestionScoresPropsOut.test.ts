import { consoler } from 'yourails_common'

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

const tests: GetQuestionScoresPropsOutTestType[] = [
  // @ts-expect-error
  { params: '', options: {}, expected: 5 },
]

const getNumber = () => 5

/**
 * @Description Test to challenge function getQuestionScoresPropsOut
 * @test yarn jest src/ViewLayer/__tests__/getQuestionScoresPropsOut.test.ts
 *    In debugging mode:
 *       node --inspect-brk getQuestionScoresPropsOut.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)('-- getQuestionScoresPropsOut.test', ({ params, options, expected }) => {
    let output: GetQuestionScoresPropsOutResType = getQuestionScoresPropsOut(params, options)
    consoler('getQuestionScoresPropsOut.test', { output })

    // expect(output).toEqual(expected)
  })
})
