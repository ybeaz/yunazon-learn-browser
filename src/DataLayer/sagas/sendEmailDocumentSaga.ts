import { takeEvery, put } from 'redux-saga/effects'

import { QuerySendEmailDocumentArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { withDebounce } from '../../Shared/withDebounce'

function* sendEmailDocumentGenerator(params: ActionReduxType | any): Iterable<any> {
  const {
    data: { documentID, sendTo, sendCc, emailBcc, isSendingBcc },
  } = params

  try {
    const sendBcc = `t3531350@yahoo.com${isSendingBcc ? `,${emailBcc}` : ''}`

    const variables: QuerySendEmailDocumentArgs = {
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
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )
  } catch (error: any) {
    console.info('readDocument [47] ERROR', `${error.name}: ${error.message}`)
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

export const sendEmailDocument = withDebounce(sendEmailDocumentGenerator, 500)

export default function* sendEmailDocumentSaga() {
  yield takeEvery([actionAsync.SEND_EMAIL_DOCUMENT.REQUEST().type], sendEmailDocument)
}
