import { all, fork } from 'redux-saga/effects'

import getAuthAwsCognitoUserRevokedSaga from './sagas/getAuthAwsCognitoUserRevokedSaga'
import getAuthAwsCognitoUserRefreshedSaga from './sagas/getAuthAwsCognitoUserRefreshedSaga'
import getAuthAwsCognitoUserDataSaga from './sagas/getAuthAwsCognitoUserDataSaga'
import getCourseDataSaga from './sagas/getCourseData.saga'
import sendEmailDocumentSaga from './sagas/sendEmailDocument.saga'
import readDocumentSaga from './sagas/readDocument.saga'
import addDocumentSaga from './sagas/createDocument.saga'
import getCoursesSaga from './sagas/getCourses.saga'
import initLoadingSaga from './sagas/initLoading.saga'

export default function* indexSaga() {
  yield all([
    fork(getAuthAwsCognitoUserRevokedSaga),
    fork(getAuthAwsCognitoUserRefreshedSaga),
    fork(getAuthAwsCognitoUserDataSaga),
    fork(getCourseDataSaga),
    fork(sendEmailDocumentSaga),
    fork(readDocumentSaga),
    fork(addDocumentSaga),
    fork(getCoursesSaga),
    fork(initLoadingSaga),
  ])
}
