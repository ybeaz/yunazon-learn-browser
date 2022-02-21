import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedUserProfileConnector } from '../../CommunicationLayer/getSavedUserProfile.connector'

function* getSavedUserProfile() {
  const {
    forms: { user },
  } = yield select(store => store)

  const { userId, userIdExternal: userIdExternalPrev, ...user2 } = user
  const user3 = { ...user2, userId: userIdExternalPrev }

  const { method, url, payload, options } = getSavedUserProfileConnector(user3)

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: { data },
    } = yield axios[method](url, payload, options)

    const {
      responseMessage,
      userId: userIdExternal,
      ...rest
    } = data[payload.operationName]

    yield put(actionSync.SET_USER_PROFILE({ ...rest, userId, userIdExternal }))
    console.info('getSavedUserProfile.saga [19]', {
      'data[payload.operationName]': data[payload.operationName],
      operationName: payload.operationName,
      responseMessage,
      payload,
      userId,
      userIdExternalPrev,
      userIdExternal,
      user3,
    })
    // yield put(actionAsync.SAVE_USER_PROFILE.SUCCESS())

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    console.info('getSavedUserProfile [40]', error.name + ': ' + error.message)
  }
}

export default function* getSavedUserProfileWatcher() {
  yield takeEvery(
    [actionAsync.SAVE_USER_PROFILE.REQUEST().type],
    getSavedUserProfile
  )
}
