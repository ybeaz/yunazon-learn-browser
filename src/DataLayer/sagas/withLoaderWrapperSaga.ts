import { put } from 'redux-saga/effects'
import { actionSync } from '../../DataLayer/index.action'

export const withLoaderWrapperSaga: (saga: any) => any = (saga: any): any => {
  return function* (params: any) {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const result = yield saga(params)
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
    return result
  }
}
