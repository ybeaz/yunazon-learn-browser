import { getObjectSlice } from '../getObjectSlice'
import { storeObject } from '../__mocks__/storeObject'

const consoleDirOptions = {
  showHidden: true,
  depth: null,
  showPrototypes: true,
}

/**
 * @test yarn jest getObjectSlice.test
 */
describe('Test function getObjectSlice', () => {
  it('test', () => {
    const tests = [
      {
        isActive: true,
        params: {
          entity: storeObject,
          arrProps: ['pageCourses'],
        },
        expected: { pageCourses: { first: 0, offset: 10 } },
      },
      {
        isActive: true,
        params: {
          entity: { a: 1, b: { c: 'str1', d: 'str2' }, e: 'str3' },
          arrProps: ['c', 'e'],
        },
        expected: { c: 'str1', e: 'str3' },
      },
      {
        isActive: true,
        params: {
          entity: {
            a: 1,
            b: {
              c: 'str1',
              d: {
                da: 'str4',
                db: ['str5', 'str6'],
                dc: {
                  dca: 1,
                  dcb: 22,
                  dcc: {},
                },
              },
            },
            e: 'str3',
          },
          arrProps: ['a', 'd', 'dcb', 'db', 'e'],
        },
        expected: {
          a: 1,
          d: {
            da: 'str4',
            db: ['str5', 'str6'],
            dc: {
              dca: 1,
              dcb: 22,
              dcc: {},
            },
          },
          db: ['str5', 'str6'],
          dcb: 22,
          e: 'str3',
        },
      },
    ]

    tests.forEach(async (test: any) => {
      const { isActive, params, expected } = test
      if (isActive) {
        const outputed = getObjectSlice(params)

        // console.info('getObjectSlice [21]', { outputed })

        expect(outputed).toEqual(expected)
      }
    })
  })
})
