import { all, fork } from 'redux-saga/effects'

import getLoadedProfilesSaga from './sagas/getLoadedProfiles.saga'
import getReadUserAuthSaga from './sagas/getReadUserAuth.saga'
import getSavedUserProfileSaga from './sagas/getSavedUserProfile.saga'
import getOAuthUiDataSaga from './sagas/getOAuthUiData.saga'
import getOAuthGoogleSaga from './sagas/getOAuthGoogle.saga'
import getAuthWebTokenSaga from './sagas/getAuthWebToken.saga'
import getAuthSignInSaga from './sagas/getAuthSignIn.saga'
import getAuthRegisteredSaga from './sagas/getAuthRegistered.saga'
import getSavedAnalyticsSaga from './sagas/getSavedAnalytics.saga'
import sendEmailDocumentSaga from './sagas/sendEmailDocument.saga'
import findDocumentSaga from './sagas/findDocument.saga'
import addDocumentSaga from './sagas/addDocument.saga'
import getContentInfoSaga from './sagas/getContentInfo.saga'
import getGlobalVarsSaga from './sagas/getGlobalVars.saga'

export default function* indexSaga() {
  yield all([
    fork(getLoadedProfilesSaga),
    fork(getReadUserAuthSaga),
    fork(getSavedUserProfileSaga),
    fork(getOAuthUiDataSaga),
    fork(getOAuthGoogleSaga),
    fork(getAuthWebTokenSaga),
    fork(getAuthSignInSaga),
    fork(getAuthRegisteredSaga),
    fork(getSavedAnalyticsSaga),
    fork(sendEmailDocumentSaga),
    fork(findDocumentSaga),
    fork(addDocumentSaga),
    fork(getContentInfoSaga),
    fork(getGlobalVarsSaga),
  ])
}
