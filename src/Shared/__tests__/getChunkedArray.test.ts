import { consoler } from '../consoler'
import { consolerError } from '../consolerError'

import { getChunkedArray } from '../getChunkedArray'

const tests = [
  {
    isActive: true,
    arr: ['a', 'b', 'c', 'd', 'e'],
    size: 2,
    expected: [['a', 'b'], ['c', 'd'], ['e']],
  },
  {
    isActive: true,
    arr: ['a', 'b', 'c', 'd', 'e'],
    size: 6,
    expected: [['a', 'b', 'c', 'd', 'e']],
  },
  {
    isActive: true,
    arr: ['a', 'b', 'c', 'd', 'e'],
    size: 1,
    expected: [['a'], ['b'], ['c'], ['d'], ['e']],
  },
]

/**
 * @Description Test to challenge function getChunkedArray
 * @test yarn jest getChunkedArray.test.ts
 *    In debugging mode:
 *       node --inspect-brk getChunkedArray.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)(
    '-- getChunkedArray.test',
    ({ isActive, arr, size, expected }) => {
      if (isActive) {
        let outputed = getChunkedArray(arr, size)
        // consoler('getChunkedArray.test', { outputed })

        expect(outputed).toEqual(expected)
      }
    }
  )
})
