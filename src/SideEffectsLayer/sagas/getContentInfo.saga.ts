import axios from 'axios'
import { takeEvery, put, select } from 'redux-saga/effects'

import { getProcessedArgsInChain } from '../../Shared/getProcessedArgsInChain'

import { getProvidedSearchString } from '../../Shared/getProvidedSearchString'
import { getValidatedCourses } from '../../Shared/getValidatedCourses'
import { getOptionsShuffled } from '../../Shared/getOptionsShuffled'
import { getProdidevAnswerDefault } from '../../Shared/getProdidevAnswerDefault'
import { getProvidedActiveDefault } from '../../Shared/getProvidedActiveDefault'
import { getProvidedID } from '../../Shared/getProvidedID'
import * as action from '../../DataLayer/index.action'
import { getContentInfoConnector } from '../../CommunicationLayer/getContentInfo.connector'

function* getContentInfo() {
  try {
    const { method, url, options } = getContentInfoConnector()
    const {
      data: { courses },
    } = yield axios[method](url, {}, options)

    let coursesNext = getProcessedArgsInChain(courses)
      .exec(getValidatedCourses)
      .exec(getProvidedID)
      .exec(getOptionsShuffled)
      .exec(getProvidedActiveDefault)
      .exec(getProdidevAnswerDefault)
      .exec(getProvidedSearchString)
      .done()

    yield put(action.GET_CONTENT_DATA.SUCCESS(coursesNext))
  } catch (error) {
    console.info('getContentInfo  [20]', error.name + ': ' + error.message)
  }
}

export default function* getContentInfoWatcher() {
  yield takeEvery([action.GET_CONTENT_DATA.REQUEST().type], getContentInfo)
}
