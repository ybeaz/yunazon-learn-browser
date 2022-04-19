import { takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedUserProfileConnector } from '../../CommunicationLayer/getSavedUserProfile.connector'

function* getSavedUserProfile() {
  const {
    forms: { user },
  } = yield select(store => store)

  const { userIdExternal, ...user2 } = user

  const { axiosClient, method, params } = getSavedUserProfileConnector(user2)

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const {
      data: { data },
    } = yield axiosClient[method]('', params)

    const { responseMessage, ...rest } = data[params.operationName]

    yield put(
      actionSync.SET_USER_PROFILE({
        ...rest,
        userIdExternal,
        calledFrom: 'SAVE_USER_PROFILE',
      })
    )

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    console.info('getSavedUserProfile [40]', error.name + ': ' + error.message)
  }
}

export default function* getSavedUserProfileSaga() {
  yield takeEvery(
    [actionAsync.SAVE_USER_PROFILE.REQUEST().type],
    getSavedUserProfile
  )
}
