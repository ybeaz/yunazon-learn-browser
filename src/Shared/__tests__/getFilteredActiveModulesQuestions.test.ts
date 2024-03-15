import { consoler } from '../consoler'
import { consolerError } from '../consolerError'

import { modules01, modulesExpected01 } from '../__mocks__/modules01'

import { getFilteredActiveModulesQuestions } from '../getFilteredActiveModulesQuestions'

const tests = [
  { isActive: true, input: modules01, expected: modulesExpected01 },
]

/**
 * @Description Test to challenge function getFilteredActiveModulesQuestions
 * @test yarn jest getFilteredActiveModulesQuestions.test.ts
 *    In debugging mode:
 *       node --inspect-brk getFilteredActiveModulesQuestions.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)(
    '-- getFilteredActiveModulesQuestions.test',
    ({ isActive, input, expected }) => {
      if (isActive) {
        let outputed = getFilteredActiveModulesQuestions(input)
        // consoler('getFilteredActiveModulesQuestions.test', { outputed })

        //   outputed = true
        //   const expected2 = true
        expect(outputed).toEqual(expected)
      }
    }
  )
})
