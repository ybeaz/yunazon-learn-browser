import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

function* getTemplate(dataInput: any) {
  const { data } = dataInput

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables = {
      actionGetTemplateInput: {
        offset: 0,
        first: 8,
      },
    }

    const readgetTemplate: any[] = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'actionGetTemplate',
    })

    yield put(actionAsync.ACT_getTemplate.SUCCESS(readgetTemplate))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('getTemplate Error', error.name + ': ' + error.message)
  }
}

export default function* getTemplateSaga() {
  yield takeEvery([actionAsync.ACTION_GetTemplate.REQUEST().type], getTemplate)
}
