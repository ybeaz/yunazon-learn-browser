import { takeEvery, put, select } from 'redux-saga/effects'

import { getProcessedArgsInChain } from '../../Shared/getProcessedArgsInChain'

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

    console.info('getContentInfo.saga [42]', readCoursesConnection)

    let coursesNext = getProcessedArgsInChain(readCoursesConnection)
      .exec(getMappedConnectionToRes)
      .exec(getValidatedCourses)
      .exec(getFilteredActiveCoursesModules)
      .exec(getFilteredActiveQuestions)
      .exec(getProvidedID)
      .exec(getProvidedSelectedDefault)
      .exec(getProdidevAnswerDefault)
      .exec(getOptionsShuffled)
      .exec(getProvidedSearchString)
      .done()

    console.info('getContentInfo.saga [57]', coursesNext)

    yield put(actionAsync.GET_CONTENT_DATA.SUCCESS(coursesNext))
  } catch (error: any) {
    console.info('getContentInfo.saga  [44]', error.name + ': ' + error.message)
  }
}

export default function* getContentInfoSaga() {
  yield takeEvery([actionAsync.GET_CONTENT_DATA.REQUEST().type], getContentInfo)
}
