import { delay, select } from 'redux-saga/effects'
import { getNestedProp } from 'yourails_common'

export const waitForStoreDataSaga: (params: { path: string; interval: number }) => any =
  function* ({ path, interval }) {
    while (true) {
      const data = yield select(state => getNestedProp({ obj: state, path }))
      if (data) return data
      yield delay(interval)
    }
  }
