import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { getObjectSlice } from '../../../Shared/getObjectSlice'

export type SelectStoreSliceParamsType = string[]

export type SelectStoreSliceOptionsType = {
  printRes?: boolean
  parentFunction?: string
}

export type SelectStoreSliceResType = Record<string, any>

interface SelectStoreSliceType {
  (
    params: SelectStoreSliceParamsType,
    options?: SelectStoreSliceOptionsType
  ): SelectStoreSliceResType
}

const optionsDefault: SelectStoreSliceOptionsType = {
  printRes: false,
  parentFunction: 'not specified',
}

/**
 * @description Function to selectStoreSlice
 * @run ts-node src/shared/utils/selectStoreSlice.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/selectStoreSlice.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { selectStoreSlice, SelectStoreSliceParamsType } from 'src/ViewLayer/ComponentsLibrary/'
 */
export const selectStoreSlice: SelectStoreSliceType = (
  arrProps: SelectStoreSliceParamsType,
  optionsIn: SelectStoreSliceOptionsType = optionsDefault
) => {
  const options: SelectStoreSliceOptionsType = {
    ...optionsDefault,
    ...optionsIn,
  }

  const { printRes, parentFunction } = options

  let output: any = {}

  try {
    const selectTheme = createSelector(
      (state: RootStoreType) => state,
      (state: RootStoreType) => {
        const getObjectSliceParams = {
          entity: state,
          arrProps,
        }
        const sliceInner = getObjectSlice(getObjectSliceParams)
        return sliceInner
      }
    )

    output = useSelector(selectTheme)

    if (printRes) {
      console.log('selectStoreSlice [43]', { output })
    }
  } catch (error: any) {
    console.log('selectStoreSlice', 'Error', {
      parentFunction,
      message: error.messag,
    })
  } finally {
    return output
  }
}

/**
 * @description Here the file is being run directly
 */
if (require.main === module) {
  ;(async () => {
    const arrProps: string[] = []
    const output = selectStoreSlice(arrProps, { printRes: true })
    console.log('selectStoreSlice [60]', { arrProps, output })
  })()
}
