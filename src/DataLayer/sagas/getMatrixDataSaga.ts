import { takeEvery, call, put, select } from 'redux-saga/effects'

import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { withLoaderWrapperSaga } from './withLoaderWrapperSaga'

export function* getMatrixData(params: ActionReduxType | any): Iterable<any> {
  try {
    yield put(actionAsync.READ_MODULES_CONNECTION.REQUEST({ isLoaderOverlay: false }))

    yield put(actionAsync.READ_TAGS_CONNECTION.REQUEST({ isLoaderOverlay: false }))
  } catch (error: any) {
    console.info('getMatrixData [46] ERROR', `${error.name}: ${error.message}`)
  }
}

export default function* getMatrixDataSaga() {
  yield takeEvery([actionAsync.GET_MATRIX_DATA.REQUEST().type], getMatrixData)
}
