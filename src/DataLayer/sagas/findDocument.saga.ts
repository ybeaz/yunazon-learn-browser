import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { findDocumentConnector } from '../../CommunicationLayer/findDocument.connector'

function* findDocument(dataInput) {
  const { data: documentID } = dataInput

  const fragmentName = 'DocumentModelGraphqlAll'
  const { axiosClient, method, params } = findDocumentConnector(
    documentID,
    fragmentName
  )

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { findDocument },
      },
    } = yield axiosClient[method]('', params)

    yield put(actionAsync.CREATE_DOCUMENT.SUCCESS(findDocument))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    console.info('findDocument [40]', error.name + ': ' + error.message)
  }
}

export default function* findDocumentSaga() {
  yield takeEvery([actionAsync.FIND_DOCUMENT.REQUEST().type], findDocument)
}
