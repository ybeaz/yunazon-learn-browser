import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

function* template(dataInput: any) {
  const { data } = dataInput

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables = {
      readTemplateInput: {
        offset: 0,
        first: 8,
      },
    }

    const readTemplate: any[] = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'readTemplate',
    })

    yield put(actionAsync.ACT_TEMPLATE.SUCCESS(readTemplate))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('template [40]', error.name + ': ' + error.message)
  }
}

export default function* templateSaga() {
  yield takeEvery([actionAsync.ACT_TEMPLATE.REQUEST().type], template)
}
