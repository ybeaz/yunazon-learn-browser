import { all, fork } from 'redux-saga/effects'

import findDocumentWatcher from './sagas/findDocument.saga'
import addDocumentWatcher from './sagas/addDocument.saga'
import getContentInfoWatcher from './sagas/getContentInfo.saga'
import getGlobalVarsWatcher from './sagas/getGlobalVars.saga'

export default function* indexSaga() {
  yield all([
    fork(findDocumentWatcher),
    fork(addDocumentWatcher),
    fork(getContentInfoWatcher),
    fork(getGlobalVarsWatcher),
  ])
}
