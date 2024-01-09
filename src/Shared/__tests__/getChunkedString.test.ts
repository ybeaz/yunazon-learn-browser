import { consoler } from '../consoler'
import { consolerError } from '../consolerError'

import { getChunkedString } from '../getChunkedString'
import {
  text01,
  expected01,
  expected02,
  text20,
  expected20,
  text32,
} from '../__mocks__/texts'

/**
 * @Description Test to challenge function getChunkedString
 * @test yarn jest getChunkedString.test.ts
 *    In debugging mode:
 *       node --inspect-brk getChunkedString.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */

/*
.each(params)('With params %s, %s, %s', (a, b, c) => {
  it(`${a} === ${b} should be ${c}`, () => {
    expect(a === b).toBe(c);
  });
});

*/

const tests = [
  {
    isActive: true,
    params: { input: text32 },
    expected: [text32],
    options: {
      chunkCharacters: ['.\n\n', '.\n', '. ', '\n', ', ', ' '],
      chunkSize: 5000,
      maxSearch: 256,
    },
  },
  {
    isActive: true,
    params: { input: text01 },
    expected: expected01,
    options: {
      chunkCharacters: ['.\n\n', '.\n', '. ', '\n', ', ', ' '],
      chunkSize: 20,
      maxSearch: 10,
    },
  },
  {
    isActive: true,
    params: { input: text01 },
    expected: expected02,
    options: {
      chunkCharacters: ['.\n\n', '.\n', '. ', '\n', ', ', ' '],
      chunkSize: 55,
      maxSearch: 20,
    },
  },
  {
    isActive: true,
    params: { input: text20 },
    expected: expected20,
    options: {
      chunkCharacters: ['.\n\n', '.\n', '. ', '\n', ', ', ' '],
      chunkSize: 5000,
      maxSearch: 256,
    },
  },
]

describe('Algoritms', () => {
  it.each(tests)(
    '-- getChunkedString.test',
    ({ isActive, params, options, expected }) => {
      if (isActive) {
        const { chunkCharacters, chunkSize, maxSearch } = options

        let outputed = getChunkedString(params, options)
        // consoler('getChunkedString.test [26]', {
        //   input: params.input,
        //   outputed,
        //   inputLen: params.input.length,
        //   expected,
        // })

        expect(outputed).toEqual(expected)
        outputed.forEach((item: string, index: number) => {
          if (index < outputed.length - 1) {
            expect(item.length).toBeGreaterThanOrEqual(chunkSize - maxSearch)
            expect(item.length).toBeLessThanOrEqual(chunkSize + maxSearch)
            expect(chunkCharacters.includes(item.slice(-1))).toBeTruthy()
          }
        })
      }
    }
  )
})
