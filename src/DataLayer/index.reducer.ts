import { RootState } from '../Interfaces/RootState'

export const rootReducer: Function = (
  store: RootState = { globalVars: {} },
  action: any
): any => {
  const { type } = action
  // console.info('rootReducer [3]', { action })
  switch (type) {
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
