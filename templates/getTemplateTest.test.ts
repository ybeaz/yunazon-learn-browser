/**
 * @Description Exploring algorithms
 * @command to run `yarn jest getTemplateTest.test`
 */

describe('Algoritms', () => {
  it('-- getTemplateTest', () => {
    const getTemplateTest = (input: any) => {
      return true
    }

    const tests = [{ isActive: true, input: '', expected: '' }]

    tests.forEach(test => {
      const { isActive, input, expected } = test

      if (isActive) {
        let outputed = getTemplateTest(input)
        console.info('[]', { outputed })

        outputed = true
        const expected2 = true
        expect(outputed).toEqual(expected2)
      }
    })
  })
})
