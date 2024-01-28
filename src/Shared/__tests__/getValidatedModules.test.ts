import { consoler } from '../consoler'
import { consolerError } from '../consolerError'
const modules = require('../__mocks__/2024-01-26-20-41-30-modules-d-l-n139.json')

import { getValidatedModules } from '../getValidatedEntity/getValidatedModules'

const tests = [{ isActive: true, input: modules, expected: '' }]

/**
 * @Description Test to challenge function getValidatedModules
 * @test yarn jest getValidatedModules.test.ts
 *    In debugging mode:
 *       node --inspect-brk getValidatedModules.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)(
    '-- getValidatedModules.test',
    ({ isActive, input, expected }) => {
      if (isActive) {
        let outputed = getValidatedModules(input)
        // consoler('getValidatedModules.test', { outputed })

        // outputed = true
        // const expected2 = true
        // expect(outputed).toEqual(expected2)
      }
    }
  )
})
