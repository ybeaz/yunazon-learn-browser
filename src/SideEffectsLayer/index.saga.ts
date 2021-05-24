import { all, fork } from 'redux-saga/effects'

import getSavedAnalyticsWatcher from './sagas/getSavedAnalytics.saga'
import sendEmailDocumentWatcher from './sagas/sendEmailDocument.saga'
import findDocumentWatcher from './sagas/findDocument.saga'
import addDocumentWatcher from './sagas/addDocument.saga'
import getContentInfoWatcher from './sagas/getContentInfo.saga'
import getGlobalVarsWatcher from './sagas/getGlobalVars.saga'

export default function* indexSaga() {
  yield all([
    fork(getSavedAnalyticsWatcher),
    fork(sendEmailDocumentWatcher),
    fork(findDocumentWatcher),
    fork(addDocumentWatcher),
    fork(getContentInfoWatcher),
    fork(getGlobalVarsWatcher),
  ])
}
