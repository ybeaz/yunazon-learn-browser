import { takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { addDocumentConnector } from '../../CommunicationLayer/addDocument.connector'

function* addDocument(dataInput) {
  const {
    data: {
      capture,
      contentID,
      courseID,
      description,
      meta,
      moduleID,
      userEmail,
      userNameFirst,
      userNameMiddle,
      userNameLast,
    },
  } = dataInput

  const { language } = yield select(store => store)

  let payload = {
    courseID,
    capture,
    description,
    meta,
    moduleIDs: [moduleID],
    contentIDs: [contentID],
    userName: {
      firstName: userNameFirst,
      middleName: userNameMiddle,
      lastName: userNameLast,
    },
    lang: language,
  }

  const fragmentName = 'DocumentModelGraphqlAll'
  const { axiosClient, method, params } = addDocumentConnector(
    payload,
    fragmentName
  )

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { addDocument },
      },
    } = yield axiosClient[method]('', params)

    yield put(actionAsync.ADD_DOCUMENT.SUCCESS(addDocument))
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    console.info('addDocument [40]', error.name + ': ' + error.message)
  }
}

export default function* addDocumentSaga() {
  yield takeEvery([actionAsync.ADD_DOCUMENT.REQUEST().type], addDocument)
}
