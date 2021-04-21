import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import * as action from '../../DataLayer/index.action'
import { findDocumentConnector } from '../../ComminicationLayer/findDocument.connector'

function* findDocument(dataInput) {
  const { data: documentID } = dataInput

  const fragmentName = 'DocumentModelGraphqlAll'
  const { method, url, data, options } = findDocumentConnector(
    documentID,
    fragmentName
  )

  try {
    yield put(action.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { findDocument },
      },
    } = yield axios[method](url, data, options)
    yield put(action.ADD_DOCUMENT.SUCCESS(findDocument))

    yield put(action.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    console.info('findDocument [40]', error.name + ': ' + error.message)
  }
}

export default function* findDocumentWatcher() {
  yield takeEvery([action.FIND_DOCUMENT.REQUEST().type], findDocument)
}
