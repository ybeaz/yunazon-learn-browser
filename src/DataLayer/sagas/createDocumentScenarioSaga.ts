import { call, takeEvery, put, delay, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSlug } from '../../Shared/getSlug'
import { createDocument } from './createDocumentSaga'
import { readProfile } from './readProfileSaga'
import { updateProfile } from './updateProfileSaga'
import { withDebounce } from '../../Shared/withDebounce'
import { sendEmailDocument } from './sendEmailDocumentSaga'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { getArrayItemByProp } from '../../Shared/getArrayItemByProp'

function* createDocumentScenarioGenerator(
  params: ActionReduxType | any
): Iterable<any> {
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

    const stateSelected: RootStoreType | any = yield select(
      (state: RootStoreType) => state
    )
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

    const slug = getSlug(capture)
    const pathname = `/d/${documentID}/${slug}`
    navigate(pathname)

    delay(1000)
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info(
      'createDocumentScenario [82] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const createDocumentScenario = withDebounce(
  createDocumentScenarioGenerator,
  500
)

export default function* createDocumentScenarioSaga() {
  yield takeEvery(
    [actionAsync.CREATE_DOCUMENT_SCENARIO.REQUEST().type],
    createDocumentScenario
  )
}
