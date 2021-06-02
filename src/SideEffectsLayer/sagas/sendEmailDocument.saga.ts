import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import * as action from '../../DataLayer/index.action'
import { sendEmailDocumentConnector } from '../../CommunicationLayer/sendEmailDocument.connector'

function* sendEmailDocument(dataInput) {
  const {
    data: { documentID, sendTo, sendCc, emailBcc, isSendingBcc },
  } = dataInput

  const sendBcc = `t3531350@yahoo.com${isSendingBcc ? `,${emailBcc}` : ''}`
  console.info('sendEmailDocument.saga [13]', {
    sendBcc,
    emailBcc,
    isSendingBcc,
  })
  const fragmentName = 'DocumentModelGraphqlAll'
  const { method, url, data, options } = sendEmailDocumentConnector(
    documentID,
    sendTo,
    sendCc,
    sendBcc,
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
    yield put(action.TOGGLE_MODAL_FRAME(false))
    // ? yield put(action.SEND_EMAIL_DOCUMENT.SUCCESS(sendEmailDocument))

    yield put(action.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    yield put(action.TOGGLE_LOADER_OVERLAY(false))
    yield put(action.TOGGLE_MODAL_FRAME(false))
  }
}

export default function* sendEmailDocumentWatcher() {
  yield takeEvery(
    [action.SEND_EMAIL_DOCUMENT.REQUEST().type],
    sendEmailDocument
  )
}
