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

export function* getCourseS6ModuleCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    /* Create course and module */
    const inputCourseCreate: any = yield select((state: RootStoreType) => {
      return state.forms.inputCourseCreate
    })

    const variables = {
      createContentMetaDataInput: {
        originUrl: inputCourseCreate,
      },
    }

    console.info('getCourseS6ModuleCreated.saga [33]', {
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

    console.info('getCourseS6ModuleCreated.saga [49]', {
      createContentMetaData,
      inputCourseCreate,
    })

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        metaData: createContentMetaData,
      })
    )
  } catch (error: any) {
    actionSync.SET_COURSE_CREATE_STATUS({
      stage: 'metaData',
      status: CreateCourseStatusEnumType['failure'],
    })

    console.info(
      'getCourseS6ModuleCreated.saga  [44]',
      error.name + ': ' + error.message
    )
  }
}

export const getCourseS6ModuleCreated = withDebounce(
  getCourseS6ModuleCreatedGenerator,
  500
)

export default function* getCourseS6ModuleCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_MODULE_CREATED.REQUEST().type],
    getCourseS6ModuleCreated
  )
}
