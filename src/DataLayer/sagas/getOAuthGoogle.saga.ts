import { takeEvery, put } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getOAuthGoogleConnector } from '../../CommunicationLayer/getOAuthGoogle.connector'

function* getOAuthGoogle(args: ActionReduxType | any): Iterable<any> {
  const {
    data: { clientId, credential, select_by },
  } = args

  const { axiosClient, method, params } = getOAuthGoogleConnector(
    clientId,
    credential,
    select_by
  )

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    const {
      data: {
        data: { oAuthGoogle },
      },
    } = yield axiosClient[method]('', params)

    yield put(
      actionSync.SET_USER_PROFILE({
        ...oAuthGoogle,
        userId: oAuthGoogle.uid,
        userIdExternal: '',
        userWebTokenAuth: oAuthGoogle.webToken,
        userStatus: oAuthGoogle.status,
        userLoginSource: 'google.com',
      })
    )

    const data = [
      {
        childName: 'AuthUser',
        isActive: false,
        childProps: { scenario: { branch: 'signInWithGoogle', step: '' } },
      },
    ]
    yield put(actionSync.SET_MODAL_FRAMES(data))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  }
}

export default function* getOAuthGoogleSaga() {
  yield takeEvery([actionAsync.GET_OAUTH_GOOGLE.REQUEST().type], getOAuthGoogle)
}
