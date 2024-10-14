import { call, takeEvery, put, delay, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
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
function* createDocumentScenarioGenerator(params: ActionReduxType | any): Iterable<any> {
  const {
    data: { navigate, creatorID },
  } = params

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

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
        emailBcc: '',
        isSendingBcc: false,
      },
    })
    try {
      const slug = getSlug(capture)
      const pathname = `/d/${documentID}/${slug}`
      yield navigate(pathname)
      delay(500)
      if (decodeURIComponent(location.pathname) !== pathname)
        window.location.href = `${window.location.origin}${pathname}`
    } catch (error: any) {
      console.error('createDocumentScenarioSaga [86] ERROR', `${error.name}: ${error.message}`)
    }
  } catch (error: any) {
    console.info('createDocumentScenario [92] ERROR', `${error.name}: ${error.message}`)
  } finally {
    getLocalStorageSetObjTo({
      modulesInProgress: [],
    })
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  }
}

export const createDocumentScenario = withDebounce(createDocumentScenarioGenerator, 500)

export default function* createDocumentScenarioSaga() {
  yield takeEvery([actionAsync.CREATE_DOCUMENT_SCENARIO.REQUEST().type], createDocumentScenario)
}
