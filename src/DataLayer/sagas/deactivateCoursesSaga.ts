import { takeEvery, put, call } from 'redux-saga/effects'

import { MutationDeactivateCoursesArgs } from 'yourails_common'
import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'
import { getHeadersAuthDict } from 'yourails_common'
import { getCourses } from './getCoursesSaga'
import { withDebounce } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { withLoaderWrapperSaga } from './withLoaderWrapperSaga'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

function* deactivateCoursesGenerator(params: ActionReduxType | any): Iterable<any> {
  const {
    data: { coursesIDs },
  } = params

  const variables: MutationDeactivateCoursesArgs = {
    deactivateCoursesIdsInput: coursesIDs,
  }

  const deactivateCourses: any = yield getResponseGraphqlAsync(
    {
      variables,
      resolveGraphqlName: ResolveGraphqlEnumType['deactivateCourses'],
    },
    {
      ...getHeadersAuthDict(),
      clientHttpType: selectGraphqlHttpClientFlag(),
      timeout: 5000,
    }
  )

  yield call(getCourses)

  yield put(
    actionSync.SET_MODAL_FRAMES({
      childName: 'ConfirmationYesNoBodyYrl',
      isActive: false,
    })
  )
}

export const deactivateCourses = withDebounce(
  withTryCatchFinallySaga(withLoaderWrapperSaga(deactivateCoursesGenerator), {
    optionsDefault: { funcParent: 'deactivateCoursesSaga' },
    resDefault: [],
  }),
  500
)

export default function* deactivateCoursesSaga() {
  yield takeEvery([actionAsync.DEACTIVATE_COURSES.REQUEST().type], deactivateCourses)
}
