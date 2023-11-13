import { takeEvery, put, select } from 'redux-saga/effects'

import { getFilteredActiveCoursesModules } from '../../Shared/getFilteredActiveCoursesModules'
import { getFilteredActiveQuestions } from '../../Shared/getFilteredActiveQuestions'
import { getProvidedSearchString } from '../../Shared/getProvidedSearchString'
import { getValidatedCourses } from '../../Shared/getValidatedCourses'
import { getOptionsShuffled } from '../../Shared/getOptionsShuffled'
import { getProdidevAnswerDefault } from '../../Shared/getProdidevAnswerDefault'
import { getProvidedSelectedDefault } from '../../Shared/getProvidedSelectedDefault'
import { getProvidedID } from '../../Shared/getProvidedID'
import { actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'
import { ConnectionType } from '../../@types/ConnectionType'
import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'

import { getMappedConnectionToRes } from '../../Shared/getMappedConnectionToRes'

function* getContentInfo() {
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
      .exec(getValidatedCourses)
      .exec(getFilteredActiveCoursesModules)
      .exec(getFilteredActiveQuestions)
      .exec(getProvidedID)
      .exec(getProvidedSelectedDefault)
      .exec(getProdidevAnswerDefault)
      .exec(getOptionsShuffled)
      .exec(getProvidedSearchString).result

    yield put(actionAsync.GET_COURSES.SUCCESS(coursesNext))
  } catch (error: any) {
    console.info('getContentInfo.saga  [44]', error.name + ': ' + error.message)
  }
}

export default function* getContentInfoSaga() {
  yield takeEvery([actionAsync.GET_COURSES.REQUEST().type], getContentInfo)
}
