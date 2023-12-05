import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'
import { ConnectionType } from '../../@types/ConnectionType'
import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'
import { getMappedConnectionToCourses } from '../../Shared/getMappedConnectionToCourses'
import { getPreparedCourses } from '../../Shared/getPreparedCourses'

export function* getCourses(params: ActionReduxType | any): Iterable<any> {
  const first = params.data?.first || 0
  const offset = params.data?.offset || 10

  try {
    const variables = {
      readCoursesConnectionInput: {
        first,
        offset,
      },
    }

    const readCoursesConnection: any = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'readCoursesConnection',
    })

    let coursesNext = getChainedResponsibility(readCoursesConnection)
      .exec(getMappedConnectionToCourses, { printRes: false })
      .exec(getPreparedCourses).result

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
