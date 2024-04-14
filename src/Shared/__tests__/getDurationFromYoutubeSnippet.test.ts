import { consoler } from '../consoler'
import { consolerError } from '../consolerError'

import { getDurationFromYoutubeSnippet } from '../getDurationFromYoutubeSnippet'

const tests = [
  { isActive: true, input: 'P1Y4M3W2DT10H31M3.452S', expected: '1:4:3:2:10:31:03' },
  { isActive: true, input: 'PT25S', expected: '0:25' },
  { isActive: true, input: 'PT2H25S', expected: '2:00:25' },
  { isActive: true, input: 'PT1M', expected: '1:00' },
  { isActive: true, input: 'PT25M33S', expected: '25:33' },
  { isActive: true, input: 'PT1H', expected: '1:00:00' },
  { isActive: true, input: 'PT1H25M', expected: '1:25:00' },
  { isActive: true, input: 'PT1H25M50S', expected: '1:25:50' },
]

/**
 * @Description Test to challenge function getDurationFromYoutubeSnippet
 * @test yarn jest getDurationFromYoutubeSnippet.test.ts
 *    In debugging mode:
 *       node --inspect-brk getDurationFromYoutubeSnippet.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)('-- getDurationFromYoutubeSnippet.test', ({ isActive, input, expected }) => {
    if (isActive) {
      let outputed = getDurationFromYoutubeSnippet(input, { printRes: false })
      // consoler('getDurationFromYoutubeSnippet.test', { outputed })

      expect(outputed.timeReadable).toEqual(expected)
    }
  })
})
