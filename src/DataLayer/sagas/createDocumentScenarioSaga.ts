import { call, takeEvery, put, delay } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSlug } from '../../Shared/getSlug'
import { createDocument } from './createDocumentSaga'
import { readProfile } from './readProfileSaga'
import { updateProfile } from './updateProfileSaga'
import { withDebounce } from '../../Shared/withDebounce'

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
    yield call(updateProfile)
    const documents: any = yield call(createDocument)

    const {
      module: { capture },
      documentID,
    } = documents[0]
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
