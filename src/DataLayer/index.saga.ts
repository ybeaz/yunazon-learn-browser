import { all, fork } from 'redux-saga/effects'

import deactivateModulesSaga from './sagas/deactivateModulesSaga'
import getModulesSaga from './sagas/getModulesSaga'
import getCourse60ModuleCreatedSaga from './sagas/getCourse60ModuleCreatedSaga'
import getCourse55ObjectionsCreatedSaga from './sagas/getCourse55ObjectionsCreatedSaga'
import getCourse45QuestionsCreatedSaga from './sagas/getCourse45QuestionsCreatedSaga'
import getCourse35SummaryCreatedSaga from './sagas/getCourse35SummaryCreatedSaga'
import getCourse20TranscriptCreatedSaga from './sagas/getCourse20TranscriptCreatedSaga'
import getCourse10MataDataCreatedSaga from './sagas/getCourse10MataDataCreatedSaga'
import getCourseBotResponseSaga from './sagas/getCourseBotResponseSaga'
import getCourseCreatedSaga from './sagas/getCourseCreatedSaga'
import readArticleSaga from './sagas/readArticleSaga'
import deactivateCoursesSaga from './sagas/deactivateCoursesSaga'
import deactivateDocumentsSaga from './sagas/deactivateDocumentsSaga'
import getDocumentsSaga from './sagas/getDocumentsSaga'
import getAuthDataSaga from './sagas/getAuthDataSaga'
import getAuthAwsCognitoUserRevokedSaga from './sagas/getAuthAwsCognitoUserRevokedSaga'
import getAuthAwsCognitoUserRefreshedSaga from './sagas/getAuthAwsCognitoUserRefreshedSaga'
import getAuthAwsCognitoUserDataSaga from './sagas/getAuthAwsCognitoUserDataSaga'
import getModuleDataSaga from './sagas/getModuleDataSaga'
import sendEmailDocumentSaga from './sagas/sendEmailDocumentSaga'
import readDocumentSaga from './sagas/readDocumentSaga'
import addDocumentSaga from './sagas/createDocumentSaga'
import getCoursesSaga from './sagas/getCoursesSaga'
import getMatrixDataSaga from './sagas/getMatrixDataSaga'

export default function* indexSaga() {
  yield all([
    fork(getCourseBotResponseSaga),
    fork(getCourse60ModuleCreatedSaga),
    fork(getCourse55ObjectionsCreatedSaga),
    fork(getCourse45QuestionsCreatedSaga),
    fork(getCourse35SummaryCreatedSaga),
    fork(getCourse20TranscriptCreatedSaga),
    fork(getCourse10MataDataCreatedSaga),
    fork(getCourseCreatedSaga),
    fork(deactivateModulesSaga),
    fork(getModulesSaga),
    fork(readArticleSaga),
    fork(deactivateCoursesSaga),
    fork(deactivateDocumentsSaga),
    fork(getDocumentsSaga),
    fork(getAuthDataSaga),
    fork(getAuthAwsCognitoUserRevokedSaga),
    fork(getAuthAwsCognitoUserRefreshedSaga),
    fork(getAuthAwsCognitoUserDataSaga),
    fork(getModuleDataSaga),
    fork(sendEmailDocumentSaga),
    fork(readDocumentSaga),
    fork(addDocumentSaga),
    fork(getCoursesSaga),
    fork(getMatrixDataSaga),
  ])
}
