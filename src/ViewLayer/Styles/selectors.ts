import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { getObjectSlice } from '../../Shared/getObjectSlice'

export const selectorTheme = (arrProps: string[]) => {
  const selectTheme = createSelector(
    (state: RootStoreType) => state,
    (state: RootStoreType) => {
      const getObjectSliceParams = {
        entity: state,
        arrProps,
      }
      const sliceInner = getObjectSlice(getObjectSliceParams)

      console.info('selectors [19]', {
        slice,
      })

      return sliceInner
    }
  )

  const slice = useSelector(selectTheme)

  console.info('selectors [30]', { slice })
  return slice
}
