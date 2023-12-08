import { takeEvery, put } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'

function* readDocument(params: ActionReduxType | any): Iterable<any> {
  const { data: documentID } = params

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables = {
      readDocumentsIdsInput: [documentID],
    }

    const readDocuments: any = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'readDocuments',
    })

    yield put(actionSync.ADD_DOCUMENT(readDocuments[0]))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('readDocument [40]', error.name + ': ' + error.message)
  }
}

export default function* readDocumentSaga() {
  yield takeEvery([actionAsync.FIND_DOCUMENT.REQUEST().type], readDocument)
}
