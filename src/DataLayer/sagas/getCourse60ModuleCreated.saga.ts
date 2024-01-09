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
import {
  connectionsTimeouts,
  ConnectionsTimeoutNameEnumType,
} from '../../Constants/connectionsTimeouts.const'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

export function* getCourse60ModuleCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    const inputCourseCreate: any = yield select((state: RootStoreType) => {
      return state.forms.inputCourseCreate
    })

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['courseModule'],
        status: CreateCourseStatusEnumType['pending'],
      })
    )

    const variables = {
      createCoursesInput: [{}],
    }

    const createCourses: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'createCourses',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        // @ts-expect-error
        timeout: ConnectionsTimeoutNameEnumType.standard,
      }
    )

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        course: createCourses[0],
      })
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['courseModule'],
        status: CreateCourseStatusEnumType['success'],
      })
    )
  } catch (error: any) {
    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['courseModule'],
        status: CreateCourseStatusEnumType['failure'],
      })
    )

    console.info(
      'getCourse60ModuleCreated.saga [76] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourse60ModuleCreated = withDebounce(
  getCourse60ModuleCreatedGenerator,
  500
)

export default function* getCourse60ModuleCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_META_DATA_CREATED.REQUEST().type],
    getCourse60ModuleCreated
  )
}
