import { all, fork } from 'redux-saga/effects'

import readTagsCloudModulesSaga from './sagas/readTagsCloudModulesSaga'
import reateSiteMapSaga from './sagas/createSiteMapSaga'
import createProfileSaga from './sagas/createProfileSaga'
import createDocumentScenarioSaga from './sagas/createDocumentScenarioSaga'
import updateProfileSaga from './sagas/updateProfileSaga'
import deactivateModulesSaga from './sagas/deactivateModulesSaga'
import readProfileSaga from './sagas/readProfileSaga'
import getModulesSaga from './sagas/getModulesSaga'
import getModule60ModuleCreatedSaga from './sagas/getModule60ModuleCreatedSaga'
import getModule55ObjectionsCreatedSaga from './sagas/getModule55ObjectionsCreatedSaga'
import getModule45QuestionsCreatedSaga from './sagas/getModule45QuestionsCreatedSaga'
import getModule35SummaryCreatedSaga from './sagas/getModule35SummaryCreatedSaga'
import getModule20TranscriptCreatedSaga from './sagas/getModule20TranscriptCreatedSaga'
import getModule10MetaDataCreatedSaga from './sagas/getModule10MetaDataCreatedSaga'
import getBotResponseSaga from './sagas/getBotResponseSaga'
import getModuleScenarioSaga from './sagas/getModuleScenarioSaga'
import readArticleSaga from './sagas/readArticleSaga'
import deactivateCoursesSaga from './sagas/deactivateCoursesSaga'
import deactivateDocumentsSaga from './sagas/deactivateDocumentsSaga'
import getDocumentsSaga from './sagas/getDocumentsSaga'
import getAuthDataSaga from './sagas/getAuthDataSaga'
import getAuthAwsCognitoUserRevokedSaga from './sagas/getAuthAwsCognitoUserRevokedSaga'
import getAuthAwsCognitoUserRefreshedSaga from './sagas/getAuthAwsCognitoUserRefreshedSaga'
import getAuthAwsCognitoUserDataSaga from './sagas/getAuthAwsCognitoUserDataSaga'
import getModuleSaga from './sagas/getModuleSaga'
import sendEmailDocumentSaga from './sagas/sendEmailDocumentSaga'
import readDocumentSaga from './sagas/readDocumentSaga'
import createDocumentSaga from './sagas/createDocumentSaga'
import getCoursesSaga from './sagas/getCoursesSaga'
import getMatrixDataSaga from './sagas/getMatrixDataSaga'

export default function* indexSaga() {
  yield all([
    fork(readTagsCloudModulesSaga),
    fork(reateSiteMapSaga),
    fork(createProfileSaga),
    fork(createDocumentScenarioSaga),
    fork(updateProfileSaga),
    fork(readProfileSaga),
    fork(getBotResponseSaga),
    fork(getModule60ModuleCreatedSaga),
    fork(getModule55ObjectionsCreatedSaga),
    fork(getModule45QuestionsCreatedSaga),
    fork(getModule35SummaryCreatedSaga),
    fork(getModule20TranscriptCreatedSaga),
    fork(getModule10MetaDataCreatedSaga),
    fork(getModuleScenarioSaga),
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
    fork(getModuleSaga),
    fork(sendEmailDocumentSaga),
    fork(readDocumentSaga),
    fork(createDocumentSaga),
    fork(getCoursesSaga),
    fork(getMatrixDataSaga),
  ])
}
