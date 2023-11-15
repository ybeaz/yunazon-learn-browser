import { takeEvery, put, select } from 'redux-saga/effects'

import { getFilteredActiveCoursesModules } from '../../Shared/getFilteredActiveCoursesModules'
import { getFilteredActiveQuestions } from '../../Shared/getFilteredActiveQuestions'
import { getProvidedSearchString } from '../../Shared/getProvidedSearchString'
import { getValidatedCourses } from '../../Shared/getValidatedCourses'
import { getOptionsShuffled } from '../../Shared/getOptionsShuffled'
import { getProdidevAnswerDefault } from '../../Shared/getProdidevAnswerDefault'
import { getProvidedSelectedDefault } from '../../Shared/getProvidedSelectedDefault'
import { getProvidedID } from '../../Shared/getProvidedID'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'
import { ConnectionType } from '../../@types/ConnectionType'
import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'
import { getMappedConnectionToRes } from '../../Shared/getMappedConnectionToRes'
import { getPreparedCourses } from '../../Shared/getPreparedCourses'

function* getCourses() {
  try {
    const { courses: coursesPrev } = yield select(store => store)
    if (coursesPrev.length) return

    const variables = {
      readCoursesConnectionInput: {
        offset: 0,
        first: 8,
      },
    }

    const readCoursesConnection: ConnectionType = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'readCoursesConnection',
      }
    )

    let coursesNext = getChainedResponsibility(readCoursesConnection)
      .exec(getMappedConnectionToRes, { printRes: false })
      .exec(getPreparedCourses).result

    yield put(actionSync.SET_COURSES(coursesNext))
  } catch (error: any) {
    console.info('getCourses.saga  [44]', error.name + ': ' + error.message)
  }
}

export default function* getCoursesSaga() {
  yield takeEvery([actionAsync.GET_COURSES.REQUEST().type], getCourses)
}
