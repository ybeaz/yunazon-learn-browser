import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import * as action from '../../DataLayer/index.action'
import { retrieveDocumentDataConnector } from '../../ComminicationLayer/retrieveDocumentData.connector'

function* retrieveDocumentData(dataInput) {
  const {
    data: {
      capture,
      contentID,
      courseID,
      description,
      meta: { institution, specTitle, specName },
      moduleID,
      userEmail,
      userName,
    },
  } = dataInput

  const {
    globalVars: { language },
  } = yield select(store => store)

  let payload = {
    courseID,
    capture,
    description,
    meta: {
      institution,
      specTitle,
      specName,
    },
    moduleIDs: [moduleID],
    contentIDs: [contentID],
    userName,
    userEmail,
    lang: language,
  }

  const fragmentName = 'DocumentModelGraphqlAll'
  const {
    method,
    url,
    data: payloadNext,
    options,
  } = retrieveDocumentDataConnector(payload, fragmentName)

  try {
    yield put(action.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { addDocument },
      },
    } = yield axios[method](url, payloadNext, options)
    console.info('retrieveDocumentData.saga [36]', { addDocument })
    yield put(action.RETRIEVE_DOCUMENT_DATA.SUCCESS(addDocument))
    yield put(action.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    console.info('retrieveDocumentData [40]', error.name + ': ' + error.message)
  }
}

export default function* retrieveDocumentDataWatcher() {
  yield takeEvery(
    [action.RETRIEVE_DOCUMENT_DATA.REQUEST().type],
    retrieveDocumentData
  )
}
