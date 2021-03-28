import axios from 'axios'
import { takeEvery, put, select } from 'redux-saga/effects'

import * as action from '../../DataLayer/index.action'
import { getContentInfoConnector } from '../../ComminicationLayer/getContentInfo.connector'

function* getContentInfo() {
  try {
    const { method, url, options } = getContentInfoConnector()
    const {
      data: { content },
    } = yield axios[method](url, {}, options)
    yield put({ type: action.GET_CONTENT_DATA.SUCCESS, data: content })
  } catch (error) {
    console.info('getContentInfo  [13]', error.name + ': ' + error.message)
  }
}

export default function* getContentInfoWatcher() {
  yield takeEvery([action.GET_CONTENT_DATA.REQUEST], getContentInfo)
}
