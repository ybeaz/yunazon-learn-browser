import { takeEvery, put } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'

function* findDocument(props: any): Iterable<any> {
  const { data: documentID } = props

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables = { documentID }

    const findDocument: any = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'findDocument',
    })

    yield put(actionSync.ADD_DOCUMENT(findDocument))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('findDocument [40]', error.name + ': ' + error.message)
  }
}

export default function* findDocumentSaga() {
  yield takeEvery([actionAsync.FIND_DOCUMENT.REQUEST().type], findDocument)
}
