import axios from 'axios'
import { takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getOAuthUiDataConnector } from '../../CommunicationLayer/getOAuthUiData.connector'

function* getOAuthUiData(args: any) {
  const {
    data: { userNameLast, userNameFirst, picture, uidExternal, userName },
  } = args

  const { method, url, payload, options } = getOAuthUiDataConnector({
    userNameLast,
    userNameFirst,
    picture,
    uidExternal,
    userName,
  })

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
      actionSync.SET_USER_PROFILE({
        ...oAuthUiData,
        userWebTokenAuth: oAuthUiData.webToken,
        userStatus: oAuthUiData.status,
        userLoginSource: 'un.userto.com',
      })
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
