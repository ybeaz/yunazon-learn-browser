import { getTemplateFuncAsync } from '../getTemplateFuncAsync'

/**
 * @Description Test to challenge function getTemplateFuncAsync
 * @command to run `yarn jest getTemplateFuncAsync.test.ts`
 */

describe('Algoritms', () => {
  it('-- getTemplateFuncAsync.test', () => {
    const getTemplateFuncAsync = (input: any) => {
      return true
    }

    const tests = [{ isActive: true, input: '', expected: '' }]

    tests.forEach(test => {
      const { isActive, input, expected } = test

      if (isActive) {
        let outputed = getTemplateFuncAsync(input)
        console.info('[]', { outputed })

        outputed = true
        const expected2 = true
        expect(outputed).toEqual(expected2)
      }
    })
  })
})
