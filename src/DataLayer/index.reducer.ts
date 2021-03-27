import { RootState } from '../@types/RootState'

export const rootReducer: Function = (
  store: RootState = { sideNavigationState: false, globalVars: {} },
  action: any
): any => {
  const { type } = action
  switch (type) {
    case 'TOGGLE_SIDE_NAVIGATION': {
      const { sideNavigationState } = store
      // console.info('rootReducer [11]', { action })
      return { ...store, sideNavigationState: !sideNavigationState }
    }

    case 'GET_GLOBAL_VARS_SUCCESS': {
      const { data } = action
      const storeNext = { ...store, globalVars: data }
      return storeNext
    }

    case 'TEST_ACTION': {
      const { data } = action
      return { ...store, test: data }
    }

    default: {
      return store
    }
  }
}
