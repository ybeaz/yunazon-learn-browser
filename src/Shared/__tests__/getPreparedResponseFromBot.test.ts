import { consoler } from '../consoler'
import { consolerError } from '../consolerError'

import { getPreparedResponseFromBot } from '../getPreparedResponseFromBot'
import {
  response01,
  response02,
  response04,
} from '../__mocks__/responsesOfBots'

const tests = [
  // { isActive: true, input: response01, expected: '' },
  { isActive: true, input: response04, expected: '' },
]

/**
 * @Description Test to challenge function getPreparedResponseFromBot
 * @test yarn jest getPreparedResponseFromBot.test.ts
 *    In debugging mode:
 *       node --inspect-brk getPreparedResponseFromBot.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)(
    '-- getPreparedResponseFromBot.test',
    ({ isActive, input, expected }) => {
      if (isActive) {
        let outputed = getPreparedResponseFromBot(input)
        consoler('getPreparedResponseFromBot.test', { outputed })

        // outputed = true
        // const expected2 = true
        // expect(outputed).toEqual(expected2)
      }
    }
  )
})
