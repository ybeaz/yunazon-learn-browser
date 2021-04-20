import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import * as action from '../../DataLayer/index.action'
import { addDocumentConnector } from '../../ComminicationLayer/addDocument.connector'

function* addDocument(dataInput) {
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
  const { method, url, data: payloadNext, options } = addDocumentConnector(
    payload,
    fragmentName
  )

  try {
    yield put(action.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { addDocument },
      },
    } = yield axios[method](url, payloadNext, options)
    const { slug } = addDocument
    console.info('addDocument.saga [36]', { slug, addDocument })
    yield put(action.ADD_DOCUMENT.SUCCESS(addDocument))
    yield put(action.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    console.info('addDocument [40]', error.name + ': ' + error.message)
  }
}

export default function* addDocumentWatcher() {
  yield takeEvery([action.ADD_DOCUMENT.REQUEST().type], addDocument)
}
