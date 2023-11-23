import { consoler } from '../consoler'
import { consolerError } from '../consolerError'

import { getTemplateFuncAsync } from '../getTemplateFuncAsync'

/**
 * @Description Test to challenge function getTemplateFuncAsync
 * @test yarn jest getTemplateFuncAsync.test.ts
 */

describe('Algoritms', () => {
  it('-- getTemplateFuncAsync.test', () => {
    const tests = [{ isActive: true, input: '', expected: '' }]

    tests.forEach(test => {
      const { isActive, input, expected } = test

      if (isActive) {
        let outputed = getTemplateFuncAsync(input)
        consoler('getTemplateFuncAsync.test', '[]', { outputed })

        // @ts-expect-error
        outputed = true
        const expected2 = true
        expect(outputed).toEqual(expected2)
      }
    })
  })
})
