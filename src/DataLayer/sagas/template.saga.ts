import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { templateConnector } from '../../CommunicationLayer/template.connector'

function* template(dataInput) {
  const { data } = dataInput

  const { method, url, payload, options } = templateConnector()

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { templateData },
      },
    } = yield axios[method](url, payload, options)
    yield put(actionAsync.ACT_TEMPLATE.SUCCESS(templateData))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    console.info('template [40]', error.name + ': ' + error.message)
  }
}

export default function* templateSaga() {
  yield takeEvery([actionAsync.ACT_TEMPLATE.REQUEST().type], template)
}
