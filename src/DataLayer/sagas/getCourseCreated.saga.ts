import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer' // import { getResponseGraphqlAsync } from 'yourails_communication_layer'
// import { getResponseGraphqlAsync } from 'yourails_communication_layer'

import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'
import { getMappedConnectionToItems } from '../../Shared/getMappedConnectionToItems'
import { selectCoursesStageFlag } from '../../FeatureFlags'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'

import { articles } from '../../ContentMock/articlesMock'

export function* getCourseCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  const inputCourseCreate: any = yield select((state: RootStoreType) => {
    return state.forms.inputCourseCreate
  })

  try {
    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({ originUrl: inputCourseCreate })
    )
    console.info('getCourseCreated.saga [27]', { inputCourseCreate })

    // yield put(actionSync.ADD_ARTICLE(articleNext))
  } catch (error: any) {
    console.info(
      'getCourseCreated.saga  [44]',
      error.name + ': ' + error.message
    )
  }
}

export const getCourseCreated = withDebounce(getCourseCreatedGenerator, 500)

export default function* getCourseCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_CREATED.REQUEST().type],
    getCourseCreated
  )
}
