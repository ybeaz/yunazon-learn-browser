import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { findDocumentConnector } from '../../CommunicationLayer/findDocument.connector'

function* findDocument(dataInput) {
  const { data: documentID } = dataInput

  const fragmentName = 'DocumentModelGraphqlAll'
  const { method, url, payload, options } = findDocumentConnector(
    documentID,
    fragmentName
  )

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { findDocument },
      },
    } = yield axios[method](url, payload, options)
    yield put(actionAsync.ADD_DOCUMENT.SUCCESS(findDocument))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    console.info('findDocument [40]', error.name + ': ' + error.message)
  }
}

export default function* findDocumentWatcher() {
  yield takeEvery([actionAsync.FIND_DOCUMENT.REQUEST().type], findDocument)
}
