import axios from 'axios'
import { takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getOAuthUiDataConnector } from '../../CommunicationLayer/getOAuthUiData.connector'

function* getOAuthUiData(args: any) {
  const {
    data: { familyName, givenName, picture, uidExternal, userName },
  } = args

  console.info('getOAuthUiData [12]', {
    familyName,
    givenName,
    picture,
    uidExternal,
    userName,
  })

  const { method, url, payload, options } = getOAuthUiDataConnector({
    familyName,
    givenName,
    picture,
    uidExternal,
    userName,
  })
  console.info('getOAuthUiData [19]', { method, url, payload, options })

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { oAuthUiData },
      },
    } = yield axios[method](url, payload, options)

    const data = [
      {
        childName: 'AuthUser',
        isActive: false,
        childProps: { scenario: { branch: 'signInWithFacebook', step: '' } },
      },
      {
        childName: 'AuthUser',
        isActive: false,
        childProps: { scenario: { branch: 'signInWithVkontakte', step: '' } },
      },
    ]
    yield put(actionSync.SET_MODAL_FRAMES(data))

    yield put(
      actionSync.SET_USER({ ...oAuthUiData, loginSource: 'un.userto.com' })
    )

    yield put(actionSync.SET_MODAL_FRAMES([]))
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  }
}

export default function* getOAuthUiDataWatcher() {
  yield takeEvery(
    [actionAsync.GET_OAUTH_UI_DATA.REQUEST().type],
    getOAuthUiData
  )
}
