import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer' // import { getResponseGraphqlAsync } from 'yourails_communication_layer'
// import { getResponseGraphqlAsync } from 'yourails_communication_layer'

import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'
import { getMappedConnectionToCourses } from '../../Shared/getMappedConnectionToCourses'
import { getPreparedCourses } from '../../Shared/getPreparedCourses'
import { selectCoursesStageFlag } from '../../FeatureFlags'
import { getDeletedObjFromLocalStorage } from '../../Shared/getDeletedObjFromLocalStorage'

export function* getCourses(params: ActionReduxType | any): Iterable<any> {
  const first = params.data?.first || 0
  const offset = params.data?.offset || 10

  console.info('getCourses.saga [18]', { flag: selectCoursesStageFlag() })

  /*
    let startIndex = first >= 0 ? first : 0

    if (startIndex > countDocuments) startIndex = countDocuments - offset

    const finishIndex = startIndex + offset
  */

  try {
    const variables = {
      readCoursesConnectionInput: {
        first,
        offset,
        stagesPick: selectCoursesStageFlag(),
      },
    }
    const readCoursesConnection: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'readCoursesConnection',
      },
      getHeadersAuthDict()
    )

    let coursesNext: any = getChainedResponsibility(readCoursesConnection)
      .exec(getMappedConnectionToCourses, { printRes: false })
      .exec(getPreparedCourses).result

    if (!coursesNext.length)
      getDeletedObjFromLocalStorage({ storeStateJson: {} })

    yield put(actionSync.SET_COURSES(coursesNext))

    const pageInfo = readCoursesConnection?.pageInfo
    yield put(
      actionSync.SET_PAGE_INFO({ paginationName: 'pagesCourses', ...pageInfo })
    )
  } catch (error: any) {
    console.info('getCourses.saga  [44]', error.name + ': ' + error.message)
  }
}

export default function* getCoursesSaga() {
  yield takeEvery([actionAsync.GET_COURSES.REQUEST().type], getCourses)
}
