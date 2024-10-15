import { takeEvery, put, select } from 'redux-saga/effects'

import { MutationCreateContentMetaDataArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from 'yourails_common'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'

import { RootStoreType } from '../../Interfaces/RootStoreType'
import { CreateModuleStatusEnumType, CreateModuleStagesEnumType } from 'yourails_common'
import { withDebounce } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import {
  connectionsTimeouts,
  ConnectionsTimeoutNameEnumType,
} from '../../Constants/connectionsTimeouts.const'

export function* getModule10MetaDataCreatedGenerator(params: ActionReduxType | any): Iterable<any> {
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
        resolveGraphqlName: ResolveGraphqlEnumType['createContentMetaData'],
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

    console.info('getModule10MetaDataCreatedSaga [76] ERROR', `${error.name}: ${error.message}`)
  }
}

export const getModule10MetaDataCreated = withDebounce(getModule10MetaDataCreatedGenerator, 500)

export default function* getModule10MetaDataCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_MODULE_META_DATA_CREATED.REQUEST().type],
    getModule10MetaDataCreated
  )
}
