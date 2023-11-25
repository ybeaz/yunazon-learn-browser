import { takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getReadUserAuthConnector } from '../../CommunicationLayer/getReadUserAuth.connector'

function* getReadUserAuth(): Iterable<any> {
  const {
    forms: { user },
  } = yield select(store => store)

  const { userIdExternal, userWebTokenAuth, ...user2 } = user

  const { axiosClient, method, params } = getReadUserAuthConnector(user2)

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const {
      data: { data },
    } = yield axiosClient[method]('', params)

    const { responseMessage, ...rest } = data[params.operationName]

    yield put(actionSync.SET_USER_PROFILE({ ...rest, userIdExternal }))

    yield put(actionAsync.READ_USERS.REQUEST())

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error) {
    console.info('getReadUserAuth [45]', error.name + ': ' + error.message)
  }
}

export default function* getReadUserAuthSaga() {
  yield takeEvery([actionAsync.READ_USER_AUTH.REQUEST().type], getReadUserAuth)
}
