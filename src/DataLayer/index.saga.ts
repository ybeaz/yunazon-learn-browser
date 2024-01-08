import { all, fork } from 'redux-saga/effects'

import getCourseS6ModuleCreatedSaga from './sagas/getCourseS6ModuleCreated.saga'
import getCourseS5ObjectionsCreatedSaga from './sagas/getCourseS5ObjectionsCreated.saga'
import getCourseS4QuestionsCreatedSaga from './sagas/getCourseS4QuestionsCreated.saga'
import getCourseS3SummaryCreatedSaga from './sagas/getCourseS3SummaryCreated.saga'
import getCourseS2TranscriptCreatedSaga from './sagas/getCourseS2TranscriptCreated.saga'
import getCourseS1MataDataCreatedSaga from './sagas/getCourseS1MataDataCreated.saga'
import getCourseCreatedSaga from './sagas/getCourseCreated.saga'
import readArticleSaga from './sagas/readArticle.saga'
import deactivateDocumentsSaga from './sagas/deactivateDocuments.saga'
import getDocumentsSaga from './sagas/getDocuments.saga'
import getAuthDataSaga from './sagas/getAuthData.saga'
import getAuthAwsCognitoUserRevokedSaga from './sagas/getAuthAwsCognitoUserRevokedSaga'
import getAuthAwsCognitoUserRefreshedSaga from './sagas/getAuthAwsCognitoUserRefreshedSaga'
import getAuthAwsCognitoUserDataSaga from './sagas/getAuthAwsCognitoUserDataSaga'
import getModuleDataSaga from './sagas/getModuleData.saga'
import sendEmailDocumentSaga from './sagas/sendEmailDocument.saga'
import readDocumentSaga from './sagas/readDocument.saga'
import addDocumentSaga from './sagas/createDocument.saga'
import getCoursesSaga from './sagas/getCourses.saga'
import getMatrixDataSaga from './sagas/getMatrixData.saga'

export default function* indexSaga() {
  yield all([
    fork(getCourseS6ModuleCreatedSaga),
    fork(getCourseS5ObjectionsCreatedSaga),
    fork(getCourseS4QuestionsCreatedSaga),
    fork(getCourseS3SummaryCreatedSaga),
    fork(getCourseS2TranscriptCreatedSaga),
    fork(getCourseS1MataDataCreatedSaga),
    fork(getCourseCreatedSaga),
    fork(readArticleSaga),
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
