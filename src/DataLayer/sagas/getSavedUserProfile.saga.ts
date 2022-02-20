import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getSavedUserProfileConnector } from '../../CommunicationLayer/getSavedUserProfile.connector'

function* getSavedUserProfile() {
  const {
    forms: { user },
  } = yield select(store => store)

  const { method, url, payload, options } = getSavedUserProfileConnector(user)
  console.info('getSavedUserProfile.saga [13]', {
    method,
    url,
    payload,
    options,
  })

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: { data },
    } = yield axios[method](url, payload, options)

    const {} = data[payload.operationName]

    // STOPPED HERE SET_USER_PROFILE
    // yield put(actionSync.SET_USER_PROFILE(data))
    console.info('getSavedUserProfile.saga [19]', {
      'data[payload.operationName]': data[payload.operationName],
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
