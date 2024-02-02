import { takeEvery, put, call } from 'redux-saga/effects'

import { MutationDeactivateCoursesArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getCourses } from './getCoursesSaga'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

function* deactivateCoursesGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  const {
    data: { coursesIDs },
  } = params

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables: MutationDeactivateCoursesArgs = {
      deactivateCoursesIdsInput: coursesIDs,
    }

    const deactivateCourses: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'deactivateCourses',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    yield call(getCourses)

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
    yield put(
      actionSync.SET_MODAL_FRAMES({
        childName: 'ConfirmationYesNoBodyYrl',
        isActive: false,
      })
    )
  } catch (error: any) {
    console.info(
      'deactivateCourses [41] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const deactivateCourses = withDebounce(deactivateCoursesGenerator, 500)

export default function* deactivateCoursesSaga() {
  yield takeEvery(
    [actionAsync.DEACTIVATE_COURSES.REQUEST().type],
    deactivateCourses
  )
}
