import { all, fork } from 'redux-saga/effects'

import getCourse60ModuleCreatedSaga from './sagas/getCourse60ModuleCreated.saga'
import getCourse55ObjectionsCreatedSaga from './sagas/getCourse55ObjectionsCreated.saga'
import getCourse45QuestionsCreatedSaga from './sagas/getCourse45QuestionsCreated.saga'
import getCourse35SummaryCreatedSaga from './sagas/getCourse35SummaryCreated.saga'
import getCourse20TranscriptCreatedSaga from './sagas/getCourse20TranscriptCreated.saga'
import getCourse10MataDataCreatedSaga from './sagas/getCourse10MataDataCreated.saga'
import getCourseBotResponseSaga from './sagas/getCourseBotResponse.saga'
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
    fork(getCourseBotResponseSaga),
    fork(getCourse60ModuleCreatedSaga),
    fork(getCourse55ObjectionsCreatedSaga),
    fork(getCourse45QuestionsCreatedSaga),
    fork(getCourse35SummaryCreatedSaga),
    fork(getCourse20TranscriptCreatedSaga),
    fork(getCourse10MataDataCreatedSaga),
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
