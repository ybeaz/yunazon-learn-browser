import { takeEvery, put, select } from 'redux-saga/effects'

import { MutationCreateContentMetaDataArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'

import {
  RootStoreType,
  CreateModuleStagesEnumType,
  CreateModuleStatusEnumType,
} from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import {
  connectionsTimeouts,
  ConnectionsTimeoutNameEnumType,
} from '../../Constants/connectionsTimeouts.const'

export function* getModule10MataDataCreatedGenerator(params: ActionReduxType | any): Iterable<any> {
  try {
    /* Add originUri to moduleCreateProgress */
    const inputCourseCreate: any = yield select((state: RootStoreType) => {
      return state.forms.inputCourseCreate
    })

    yield put(actionSync.ADD_MODULE_CREATE_DATA({ originUrl: inputCourseCreate }))

    /* Add metaData to moduleCreateProgress */
    yield put(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['metaData'],
        status: CreateModuleStatusEnumType['pending'],
      })
    )

    let variables: MutationCreateContentMetaDataArgs = {
      createContentMetaDataInput: {
        originID: inputCourseCreate,
      },
    }

    if (inputCourseCreate.includes('youtube.com'))
      variables = {
        createContentMetaDataInput: {
          originUrl: inputCourseCreate,
        },
      }

    const createContentMetaData: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'createContentMetaData',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: connectionsTimeouts[ConnectionsTimeoutNameEnumType.metaData],
      }
    )

    yield put(
      actionSync.ADD_MODULE_CREATE_DATA({
        metaData: createContentMetaData,
      })
    )

    yield put(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['metaData'],
        status: CreateModuleStatusEnumType['success'],
      })
    )
  } catch (error: any) {
    yield put(
      actionSync.SET_MODULE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['metaData'],
        status: CreateModuleStatusEnumType['failure'],
      })
    )

    console.info('getModule10MataDataCreatedSaga [76] ERROR', `${error.name}: ${error.message}`)
  }
}

export const getModule10MataDataCreated = withDebounce(getModule10MataDataCreatedGenerator, 500)

export default function* getModule10MataDataCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_MODULE_META_DATA_CREATED.REQUEST().type],
    getModule10MataDataCreated
  )
}
