import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import {
  RootStoreType,
  CreateModuleStagesEnumType,
  CreateCourseStatusEnumType,
} from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

export function* getCourseS5ObjectionsCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    /* Add objections to courseCreateProgress 
        botID: 'g3lccRJtksaE',
        profileID: 'y9WjMwhdhr31',
        profileName: '@objector_persona',
    */
    const inputCourseCreate: any = yield select((state: RootStoreType) => {
      return state.forms.inputCourseCreate
    })

    const variables = {
      createContentMetaDataInput: {
        originUrl: inputCourseCreate,
      },
    }

    console.info('getCourseS5ObjectionsCreated.saga [33]', {
      variables,
    })

    const createContentMetaData: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'createContentMetaData',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    console.info('getCourseS5ObjectionsCreated.saga [50] ', {
      createContentMetaData,
      inputCourseCreate,
    })

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        metaData: createContentMetaData,
      })
    )
  } catch (error: any) {
    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['objections'],
        status: CreateCourseStatusEnumType['failure'],
      })
    )

    console.info(
      'getCourseS5ObjectionsCreated.saga [44] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourseS5ObjectionsCreated = withDebounce(
  getCourseS5ObjectionsCreatedGenerator,
  500
)

export default function* getCourseS5ObjectionsCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_OBJECTIONS_CREATED.REQUEST().type],
    getCourseS5ObjectionsCreated
  )
}
