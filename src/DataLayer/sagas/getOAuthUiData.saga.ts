import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getOAuthUiDataConnector } from '../../CommunicationLayer/getOAuthUiData.connector'

function* getOAuthUiData(args: ActionReduxType | any): Iterable<any> {
  const {
    data: { nameLast, nameFirst, picture, userIdExternal, userName },
  } = args

  const { axiosClient, method, params } = getOAuthUiDataConnector({
    nameLast,
    nameFirst,
    picture,
    userIdExternal,
    userName,
  })

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { oAuthUiData },
      },
    } = yield axiosClient[method]('', params)

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
        userId: oAuthUiData.uid,
        userIdExternal: '',
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

export default function* getOAuthUiDataSaga() {
  yield takeEvery(
    [actionAsync.GET_OAUTH_UI_DATA.REQUEST().type],
    getOAuthUiData
  )
}
