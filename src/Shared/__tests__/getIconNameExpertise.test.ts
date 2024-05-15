// @ts-nocheck

import { consoler } from '../consoler'
import { consolerError } from '../consolerError'

import { getExpertiseInfo } from '../getExpertiseInfo'

const tests = [
  {
    isActive: true,
    params: { completed: 0 },
    expected: {
      level: 0,
      name: '',
      min: 0,
      max: 1,
      iconName: '',
      left: 2,
    },
  },
  {
    isActive: true,
    params: { completed: 1 },
    expected: {
      level: 0,
      name: '',
      min: 0,
      max: 1,
      iconName: '',
      left: 1,
    },
  },
  {
    isActive: true,
    params: { completed: 6 },
    expected: {
      level: 2,
      name: 'Beginner',
      min: 6,
      max: 8,
      iconName: 'FaUserMinus',
      left: 3,
    },
  },
  {
    isActive: true,
    params: { completed: 15 },
    expected: {
      level: 4,
      name: 'Intermediate',
      min: 12,
      max: 17,
      iconName: 'FaUserCog',
      left: 3,
    },
  },
  {
    isActive: true,
    params: { completed: 100000 },
    expected: {
      level: 20,
      name: 'Legendary',
      min: 108,
      max: 1000000,
      iconName: 'FaMountainSun',
      left: 900001,
    },
  },
]

/**
 * @Description Test to challenge function getExpertiseInfo
 * @test yarn jest getExpertiseInfo.test.ts
 *    In debugging mode:
 *       node --inspect-brk getExpertiseInfo.test.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 */
describe('Algoritms', () => {
  it.each(tests)('-- getExpertiseInfo.test', ({ isActive, params, expected }) => {
    if (isActive) {
      let output = getExpertiseInfo(params)
      // consoler('getExpertiseInfo.test', { output })

      expect(output).toEqual(expected)
    }
  })
})
