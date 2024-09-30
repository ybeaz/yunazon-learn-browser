import { consoler } from '../consoler'
import { consolerError } from '../consolerError'

import { getRearrangedArrayByIndex } from '../getRearrangedArrayByIndex'

const tests = [
  {
    isActive: true,
    params: {
      arrayIn: [
        { typeIn: 'player', component: 1 },
        { typeIn: 'summary', component: 2 },
        { typeIn: 'objections', component: 3 },
        { typeIn: 'article', component: 4 },
      ],
      typeIn: 'article',
    },
    expected: [
      { typeIn: 'article', component: 4 },
      { typeIn: 'player', component: 1 },
      { typeIn: 'summary', component: 2 },
      { typeIn: 'objections', component: 3 },
    ],
  },
  { isActive: true, params: { arrayIn: [1, 2, 3, 4], indexIn: 2 }, expected: [3, 1, 2, 4] },
]

/**
 * @Description Test to challenge function getRearrangedArrayByIndex
 * @test yarn jest getRearrangedArrayByIndex.test.ts
 *    In debugging mode:
 *       node --inspect-brk getRearrangedArrayByIndex.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)('-- getRearrangedArrayByIndex.test', ({ isActive, params, expected }) => {
    if (isActive) {
      let output = getRearrangedArrayByIndex(params, { printRes: false })
      consoler('getRearrangedArrayByIndex.test', { output })
      expect(output).toEqual(expected)
    }
  })
})
