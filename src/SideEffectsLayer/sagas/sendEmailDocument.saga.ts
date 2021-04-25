import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import * as action from '../../DataLayer/index.action'
import { sendEmailDocumentConnector } from '../../ComminicationLayer/sendEmailDocument.connector'

function* sendEmailDocument(dataInput) {
  const {
    data: { documentID, sendTo, sendCc },
  } = dataInput

  console.info('sendEmailDocument.saga [12]', {
    documentID,
    sendTo,
    sendCc,
  })

  const sendToCc = sendCc ? `${sendTo},${sendCc}` : `${sendTo}`

  const fragmentName = 'DocumentModelGraphqlAll'
  const { method, url, data, options } = sendEmailDocumentConnector(
    documentID,
    sendToCc,
    fragmentName
  )

  try {
    yield put(action.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { sendEmailDocument },
      },
    } = yield axios[method](url, data, options)

    console.info('sendEmailDocument.saga [27]', { sendEmailDocument })
    // ? yield put(action.SEND_EMAIL_DOCUMENT.SUCCESS(sendEmailDocument))

    yield put(action.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    console.info('sendEmailDocument [40]', error.name + ': ' + error.message)
  }
}

export default function* sendEmailDocumentWatcher() {
  yield takeEvery(
    [action.SEND_EMAIL_DOCUMENT.REQUEST().type],
    sendEmailDocument
  )
}
