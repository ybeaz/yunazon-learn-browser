import { call, takeEvery, put, delay, select } from 'redux-saga/effects'

import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSlug } from 'yourails_common'
import { createDocument } from './createDocumentSaga'
import { readProfile } from './readProfileSaga'
import { updateProfile } from './updateProfileSaga'
import { withDebounce } from 'yourails_common'
import { sendEmailDocument } from './sendEmailDocumentSaga'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { getArrayItemByProp } from 'yourails_common'
import { getLocalStorageSetObjTo } from 'yourails_common'
import { withLoaderWrapperSaga } from './withLoaderWrapperSaga'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

function* createDocumentScenarioGenerator(params: ActionReduxType | any): Iterable<any> {
  const {
    data: { navigate, creatorID },
  } = params

  const stateSelected10: RootStoreType | any = yield select((state: RootStoreType) => state)
  const {
    componentsState: { createModuleStages: createModuleStages10 },
  } = stateSelected10

  const data2 = [
    {
      childName: 'QuestionScores',
      isActive: false,
      childProps: {},
    },
  ]
  yield put(actionSync.SET_MODAL_FRAMES(data2))

  yield call(readProfile, { data: { profileID: creatorID } })

  const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)
  const {
    forms: {
      profileActive: { nameFirst, nameMiddle, nameLast },
    },
    profiles,
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  const profile = getArrayItemByProp({
    arr: profiles,
    propName: 'userID',
    propValue: sub,
  })

  yield call(updateProfile, {
    data: {
      profile: {
        ...profile,
        nameFirst,
        nameMiddle,
        nameLast,
      },
    },
  })

  const documents: any = yield call(createDocument)

  const {
    documentID,
    module: { capture },
    learner: { emails },
  } = documents[0]

  yield call(sendEmailDocument, {
    data: {
      documentID,
      sendTo: emails[0] || '',
      sendCc: '',
      sendBcc: '',
      isSendingBcc: false,
    },
  })
  const slug = getSlug(capture)
  const pathname = `/d/${documentID}/${slug}`
  yield navigate(pathname)
  delay(500)
  if (decodeURIComponent(location.pathname) !== pathname)
    window.location.href = `${window.location.origin}${pathname}`

  getLocalStorageSetObjTo({
    modulesInProgress: [],
  })
}

export const createDocumentScenario = withDebounce(
  withTryCatchFinallySaga(withLoaderWrapperSaga(createDocumentScenarioGenerator), {
    optionsDefault: { funcParent: 'createDocumentScenarioSagaa' },
    resDefault: [],
  }),
  500
)

export default function* createDocumentScenarioSaga() {
  yield takeEvery([actionAsync.CREATE_DOCUMENT_SCENARIO.REQUEST().type], createDocumentScenario)
}
