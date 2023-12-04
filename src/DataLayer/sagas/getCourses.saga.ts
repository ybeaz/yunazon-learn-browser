import { takeEvery, put, select } from 'redux-saga/effects'

import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'
import { ConnectionType } from '../../@types/ConnectionType'
import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'
import { getMappedConnectionToCourses } from '../../Shared/getMappedConnectionToCourses'
import { getPreparedCourses } from '../../Shared/getPreparedCourses'

let coursesPrev = []

export function* getCourses(): Iterable<any> {
  try {
    const variables = {
      readCoursesConnectionInput: {
        first: 0,
        offset: 10,
      },
    }

    const readCoursesConnection: any = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'readCoursesConnection',
    })

    let coursesNext = getChainedResponsibility(readCoursesConnection)
      .exec(getMappedConnectionToCourses, { printRes: false })
      .exec(getPreparedCourses).result

    coursesPrev = coursesNext
    yield put(actionSync.SET_COURSES(coursesNext))
  } catch (error: any) {
    console.info('getCourses.saga  [44]', error.name + ': ' + error.message)
  }
}

export default function* getCoursesSaga() {
  yield takeEvery([actionAsync.GET_COURSES.REQUEST().type], getCourses)
}
