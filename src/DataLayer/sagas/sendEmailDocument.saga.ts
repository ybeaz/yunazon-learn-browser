import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'

function* sendEmailDocument(dataInput: any): Iterable<any> {
  const {
    data: { documentID, sendTo, sendCc, emailBcc, isSendingBcc },
  } = dataInput

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const sendBcc = `t3531350@yahoo.com${isSendingBcc ? `,${emailBcc}` : ''}`

    const variables = {
      documentID,
      sendTo,
      sendCc,
      sendBcc,
    }

    const sendEmailDocument: any = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'sendEmailDocument',
    })

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

export default function* sendEmailDocumentSaga() {
  yield takeEvery(
    [actionAsync.SEND_EMAIL_DOCUMENT.REQUEST().type],
    sendEmailDocument
  )
}
