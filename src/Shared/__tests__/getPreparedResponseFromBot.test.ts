import { consoler } from '../consoler'
import { consolerError } from '../consolerError'

import { getPreparedResponseFromBot } from '../getPreparedResponseFromBot/getPreparedResponseFromBot'
import {
  response01,
  response02,
  response04,
  response05,
} from '../__mocks__/responsesOfBots'

const tests = [
  { isActive: true, input: response01, expected: true },
  { isActive: true, input: response02, expected: true },
  { isActive: true, input: response04, expected: true },
  { isActive: true, input: response05, expected: true },
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
        let res = getPreparedResponseFromBot(input)
        consoler('getPreparedResponseFromBot.test', { res })

        const output = Array.isArray(res)
        expect(output).toEqual(expected)
      }
    }
  )
})
