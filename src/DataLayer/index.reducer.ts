export const rootReducer: Function = (store: any = {}, action: any): any => {
  const { type } = action
  // console.info('rootReducer [3]', { action })
  switch (type) {
    case 'GET_PRODUCT_CARD_SUCCESS': {
      const { data } = action
      return { ...store, ecomAssets: data }
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
