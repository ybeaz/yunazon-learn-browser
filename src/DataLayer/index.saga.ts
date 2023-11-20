import { all, fork } from 'redux-saga/effects'

import getAuthAwsCognitoUserRevokedSaga from './sagas/getAuthAwsCognitoUserRevokedSaga'
import getAuthAwsCognitoUserRefreshedSaga from './sagas/getAuthAwsCognitoUserRefreshedSaga'
import getAuthAwsCognitoUserDataSaga from './sagas/getAuthAwsCognitoUserDataSaga'
import getCourseDataSaga from './sagas/getCourseData.saga'
import getLoadedProfilesSaga from './sagas/getLoadedProfiles.saga'
import getReadUserAuthSaga from './sagas/getReadUserAuth.saga'
import getSavedUserProfileSaga from './sagas/getSavedUserProfile.saga'
import getOAuthUiDataSaga from './sagas/getOAuthUiData.saga'
import getOAuthGoogleSaga from './sagas/getOAuthGoogle.saga'
import getAuthSignInSaga from './sagas/getAuthSignIn.saga'
import getAuthRegisteredSaga from './sagas/getAuthRegistered.saga'
import getSavedAnalyticsSaga from './sagas/getSavedAnalytics.saga'
import sendEmailDocumentSaga from './sagas/sendEmailDocument.saga'
import findDocumentSaga from './sagas/findDocument.saga'
import addDocumentSaga from './sagas/createDocument.saga'
import getCoursesSaga from './sagas/getCourses.saga'
import initLoadingSaga from './sagas/initLoading.saga'

export default function* indexSaga() {
  yield all([
    fork(getAuthAwsCognitoUserRevokedSaga),
    fork(getAuthAwsCognitoUserRefreshedSaga),
    fork(getAuthAwsCognitoUserDataSaga),
    fork(getCourseDataSaga),
    fork(getLoadedProfilesSaga),
    fork(getReadUserAuthSaga),
    fork(getSavedUserProfileSaga),
    fork(getOAuthUiDataSaga),
    fork(getOAuthGoogleSaga),
    fork(getAuthSignInSaga),
    fork(getAuthRegisteredSaga),
    fork(getSavedAnalyticsSaga),
    fork(sendEmailDocumentSaga),
    fork(findDocumentSaga),
    fork(addDocumentSaga),
    fork(getCoursesSaga),
    fork(initLoadingSaga),
  ])
}
