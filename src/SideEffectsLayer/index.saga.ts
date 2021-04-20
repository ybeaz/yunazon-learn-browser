import { all, fork } from 'redux-saga/effects'

import addDocumentWatcher from './sagas/addDocument.saga'
import getContentInfoWatcher from './sagas/getContentInfo.saga'
import getGlobalVarsWatcher from './sagas/getGlobalVars.saga'

export default function* indexSaga() {
  yield all([
    fork(addDocumentWatcher),
    fork(getContentInfoWatcher),
    fork(getGlobalVarsWatcher),
  ])
}
