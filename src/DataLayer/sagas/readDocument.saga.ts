import { takeEvery, put } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

function* readDocument(params: ActionReduxType | any): Iterable<any> {
  const { data: documentID } = params

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables = {
      readDocumentsIdsInput: [documentID],
    }

    const readDocuments: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'readDocuments',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    yield put(actionSync.ADD_DOCUMENT(readDocuments[0]))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('readDocument [35] ERROR', `${error.name}: ${error.message}`)
  }
}

export default function* readDocumentSaga() {
  yield takeEvery([actionAsync.FIND_DOCUMENT.REQUEST().type], readDocument)
}
