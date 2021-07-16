import { all, fork } from 'redux-saga/effects'

import sendAuthSignInWatcher from './sagas/sendAuthSignIn.saga'
import sendAuthSignUpWatcher from './sagas/sendAuthSignUp.saga'
import getSavedAnalyticsWatcher from './sagas/getSavedAnalytics.saga'
import sendEmailDocumentWatcher from './sagas/sendEmailDocument.saga'
import findDocumentWatcher from './sagas/findDocument.saga'
import addDocumentWatcher from './sagas/addDocument.saga'
import getContentInfoWatcher from './sagas/getContentInfo.saga'
import getGlobalVarsWatcher from './sagas/getGlobalVars.saga'

export default function* indexSaga() {
  yield all([
    fork(sendAuthSignInWatcher),
    fork(sendAuthSignUpWatcher),
    fork(getSavedAnalyticsWatcher),
    fork(sendEmailDocumentWatcher),
    fork(findDocumentWatcher),
    fork(addDocumentWatcher),
    fork(getContentInfoWatcher),
    fork(getGlobalVarsWatcher),
  ])
}
