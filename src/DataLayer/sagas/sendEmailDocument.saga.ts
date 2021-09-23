import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { sendEmailDocumentConnector } from '../../CommunicationLayer/sendEmailDocument.connector'

function* sendEmailDocument(dataInput) {
  const {
    data: { documentID, sendTo, sendCc, emailBcc, isSendingBcc },
  } = dataInput

  const sendBcc = `t3531350@yahoo.com${isSendingBcc ? `,${emailBcc}` : ''}`

  const fragmentName = 'DocumentModelGraphqlAll'
  const { method, url, payload, options } = sendEmailDocumentConnector(
    documentID,
    sendTo,
    sendCc,
    sendBcc,
    fragmentName
  )

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { sendEmailDocument },
      },
    } = yield axios[method](url, payload, options)

    yield put(
      actionSync.SET_MODAL_FRAMES([
        {
          childName: 'EmalInputs',
          isActive: false,
          childProps: {},
        },
      ])
    )
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    yield put(
      actionSync.SET_MODAL_FRAMES([
        {
          childName: 'EmalInputs',
          isActive: false,
          childProps: {},
        },
      ])
    )
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  }
}

export default function* sendEmailDocumentWatcher() {
  yield takeEvery(
    [actionAsync.SEND_EMAIL_DOCUMENT.REQUEST().type],
    sendEmailDocument
  )
}
