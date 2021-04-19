import { all, fork } from 'redux-saga/effects'

import retrieveDocumentDataWatcher from './sagas/retrieveDocumentData.saga'
import getContentInfoWatcher from './sagas/getContentInfo.saga'
import getGlobalVarsWatcher from './sagas/getGlobalVars.saga'

export default function* indexSaga() {
  yield all([
    fork(retrieveDocumentDataWatcher),
    fork(getContentInfoWatcher),
    fork(getGlobalVarsWatcher),
  ])
}
