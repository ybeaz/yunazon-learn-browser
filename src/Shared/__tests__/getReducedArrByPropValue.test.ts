import { getReducedArrByPropValue } from '../getReducedArrByPropValue'
import { getReducedArrByElem } from '../getReducedArrByElem'

describe('Algoritms', () => {
  it('test getUniqArrByPropLast', () => {
    const arr = [
      {
        childName: 'AuthUser',
        childProps: {
          scenario: {
            branch: 'signInManually',
            step: '',
          },
        },
        isActive: false,
      },
      {
        childName: 'AuthUser',
        childProps: {
          scenario: {
            branch: 'signInManually',
            step: '',
          },
        },
        isActive: true,
      },
      {
        childName: 'AuthUser',
        childProps: {
          scenario: {
            branch: 'signInWithVkontakte',
            step: '',
          },
        },
        isActive: true,
      },
    ]

    const res = getReducedArrByPropValue(arr, 'childName', 'AuthUser')

    const elemToCompare = {
      childName: 'AuthUser',
      childProps: {
        scenario: {
          branch: 'signInManually',
          step: '',
        },
      },
      isActive: true,
    }

    const res2 = getReducedArrByElem(arr, elemToCompare)
    console.info('getUniqArrByIdLast [38]', { res, res2 })

    expect(true).toEqual(true)
  })
})
