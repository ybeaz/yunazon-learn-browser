import { takeEvery, put, select } from 'redux-saga/effects'

import { getProcessedArgsInChain } from '../../Shared/getProcessedArgsInChain'

import { getCutCoursesList } from '../../Shared/getCutCoursesList'
import { getFilteredActiveCoursesModules } from '../../Shared/getFilteredActiveCoursesModules'
import { getFilteredActiveQuestions } from '../../Shared/getFilteredActiveQuestions'
import { getProvidedSearchString } from '../../Shared/getProvidedSearchString'
import { getValidatedCourses } from '../../Shared/getValidatedCourses'
import { getOptionsShuffled } from '../../Shared/getOptionsShuffled'
import { getProdidevAnswerDefault } from '../../Shared/getProdidevAnswerDefault'
import { getProvidedSelectedDefault } from '../../Shared/getProvidedSelectedDefault'
import { getProvidedID } from '../../Shared/getProvidedID'
import { actionAsync } from '../../DataLayer/index.action'
import { getContentInfoConnector } from '../../CommunicationLayer/getContentInfo.connector'

function* getContentInfo() {
  try {
    const { courses: coursesPrev } = yield select(store => store)
    if (coursesPrev.length) return

    const { axiosClient, method, params } = getContentInfoConnector()
    const {
      data: { courses },
    } = yield axiosClient[method]('')

    let coursesNext = getProcessedArgsInChain(courses)
      .exec(getCutCoursesList)
      .exec(getValidatedCourses)
      .exec(getFilteredActiveCoursesModules)
      .exec(getFilteredActiveQuestions)
      .exec(getProvidedID)
      .exec(getProvidedSelectedDefault)
      .exec(getProdidevAnswerDefault)
      .exec(getOptionsShuffled)
      .exec(getProvidedSearchString)
      .done()

    yield put(actionAsync.GET_CONTENT_DATA.SUCCESS(coursesNext))
  } catch (error) {
    console.info('getContentInfo  [20]', error.name + ': ' + error.message)
  }
}

export default function* getContentInfoSaga() {
  yield takeEvery([actionAsync.GET_CONTENT_DATA.REQUEST().type], getContentInfo)
}
