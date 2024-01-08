import { all, fork } from 'redux-saga/effects'

import getCourseS60ModuleCreatedSaga from './sagas/getCourseS60ModuleCreated.saga'
import getCourseS50ObjectionsCreatedSaga from './sagas/getCourseS50ObjectionsCreated.saga'
import getCourseS40QuestionsCreatedSaga from './sagas/getCourseS40QuestionsCreated.saga'
import getCourseS30SummaryCreatedSaga from './sagas/getCourseS30SummaryCreated.saga'
import getCourseS20TranscriptCreatedSaga from './sagas/getCourseS20TranscriptCreated.saga'
import getCourseS10MataDataCreatedSaga from './sagas/getCourseS10MataDataCreated.saga'
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
    fork(getCourseS60ModuleCreatedSaga),
    fork(getCourseS50ObjectionsCreatedSaga),
    fork(getCourseS40QuestionsCreatedSaga),
    fork(getCourseS30SummaryCreatedSaga),
    fork(getCourseS20TranscriptCreatedSaga),
    fork(getCourseS10MataDataCreatedSaga),
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
