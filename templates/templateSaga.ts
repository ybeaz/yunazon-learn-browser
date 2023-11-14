// @ts-nocheck

import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { templateConnector } from '../../CommunicationLayer/templateConnector'
// @ts-expect-error
import { GetRecipeDocument } from '../../types/graphql'
// @ts-expect-error
import { apolloClient } from '../../CommunicationLayer/clients/apolloClient'

function* template(params: any): Iterable<any> {
  const { data: variables } = params

  try {
    return
    /* Uncomment and edit

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const { client, params } = templateConnector(variables)

    const res: any = yield client.post('', params)
    const data = res?.data?.data

    const { data } = yield apolloClient.query({
      query: GetRecipeDocument,
      variables,
    })

    yield put(actionAsync.TEMPLATE_ASYNC.SUCCESS(data))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))

    */
  } catch (error: any) {
    console.log('ERROR templateSaga', { error: error.message })
  }
}

/**
 * @description Function to templateSaga
 * @import import templateSaga from './sagas/templateSaga'
 */
export default function* templateSaga() {
  yield takeEvery([actionAsync.TEMPLATE_ASYNC.REQUEST().type], template)
}
