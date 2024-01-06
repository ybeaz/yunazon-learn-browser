import { takeEvery, put } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

function* sendEmailDocument(params: ActionReduxType | any): Iterable<any> {
  const {
    data: { documentID, sendTo, sendCc, emailBcc, isSendingBcc },
  } = params

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const sendBcc = `t3531350@yahoo.com${isSendingBcc ? `,${emailBcc}` : ''}`

    const variables = {
      documentID,
      sendTo,
      sendCc,
      sendBcc,
    }

    const sendEmailDocument: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'sendEmailDocument',
      },
      {
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

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
