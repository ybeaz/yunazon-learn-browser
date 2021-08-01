import { all, fork } from 'redux-saga/effects'

import getOAuthUiDataWatcher from './sagas/getOAuthUiData.saga'
import getOAuthGoogleWatcher from './sagas/getOAuthGoogle.saga'
import getAuthWebTokenWatcher from './sagas/getAuthWebToken.saga'
import getAuthSignInWatcher from './sagas/getAuthSignIn.saga'
import getAuthRegisteredWatcher from './sagas/getAuthRegistered.saga'
import getSavedAnalyticsWatcher from './sagas/getSavedAnalytics.saga'
import sendEmailDocumentWatcher from './sagas/sendEmailDocument.saga'
import findDocumentWatcher from './sagas/findDocument.saga'
import addDocumentWatcher from './sagas/addDocument.saga'
import getContentInfoWatcher from './sagas/getContentInfo.saga'
import getGlobalVarsWatcher from './sagas/getGlobalVars.saga'

export default function* indexSaga() {
  yield all([
    fork(getOAuthUiDataWatcher),
    fork(getOAuthGoogleWatcher),
    fork(getAuthWebTokenWatcher),
    fork(getAuthSignInWatcher),
    fork(getAuthRegisteredWatcher),
    fork(getSavedAnalyticsWatcher),
    fork(sendEmailDocumentWatcher),
    fork(findDocumentWatcher),
    fork(addDocumentWatcher),
    fork(getContentInfoWatcher),
    fork(getGlobalVarsWatcher),
  ])
}
