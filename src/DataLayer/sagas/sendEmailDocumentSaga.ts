import { takeEvery, put, select } from 'redux-saga/effects'
import { QuerySendEmailDocumentArgs } from 'yourails_common'
import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { getHeadersAuthDict } from 'yourails_common'
import { withDebounce } from 'yourails_common'
import { withLoaderWrapperSaga } from './withLoaderWrapperSaga'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'
import { RootStoreType } from '../../Interfaces/RootStoreType'

function* sendEmailDocumentGenerator(params: ActionReduxType | any): Iterable<any> {
  const {
    data: { documentID, sendTo, sendCc, sendBcc: sendBccIn, isSendingBcc },
  } = params

  try {
    const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)

    const {
      urlParamsQuery: { sendBcc: sendBccState },
    } = stateSelected as RootStoreType

    const sendBcc = `t3531350@yahoo.com${isSendingBcc ? `,${sendBccIn}` : ''}${sendBccState ? `,${sendBccState}` : ''}`

    console.info('sendEmailDocument [27]', { documentID, sendTo, sendCc, sendBcc })
    const variables: QuerySendEmailDocumentArgs = {
      documentID,
      sendTo,
      sendCc,
      sendBcc,
    }

    const sendEmailDocument: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: ResolveGraphqlEnumType['sendEmailDocument'],
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
  }
}

export const sendEmailDocument = withDebounce(
  withTryCatchFinallySaga(withLoaderWrapperSaga(sendEmailDocumentGenerator), {
    optionsDefault: { funcParent: 'sendEmailDocumentSaga' },
    resDefault: [],
  }),
  500
)

export default function* sendEmailDocumentSaga() {
  yield takeEvery([actionAsync.SEND_EMAIL_DOCUMENT.REQUEST().type], sendEmailDocument)
}
