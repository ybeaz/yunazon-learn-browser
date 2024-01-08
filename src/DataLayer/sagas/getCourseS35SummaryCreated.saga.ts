import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import {
  RootStoreType,
  CreateModuleStagesEnumType,
  CreateCourseStatusEnumType,
} from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import {
  getChunkedString,
  GetChunkedStringParamsType,
  GetChunkedStringOptionsType,
} from '../../Shared/getChunkedString'
import {
  getPreparedResponseFromBot,
  GetPreparedResponseFromBotParamsType,
} from '../../Shared/getPreparedResponseFromBot'

import { getCourseS30SummaryChunkCreated } from './getCourseS30SummaryChunkCreated.saga'

export function* getCourseS35SummaryCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    /* Add summary to courseCreateProgress 
        botID: 'gkHgpq771VuJ',
        profileID: 'lojNPRoL4bSQ',
        profileName: '@split_text_persona_summary',
    */

    const transcript: any = yield select((state: RootStoreType) => {
      return state.courseCreateProgress.transcript
    })

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['summary'],
        status: CreateCourseStatusEnumType['pending'],
      })
    )

    const params = {
      input: transcript,
    }

    const textChunks = getChunkedString(params, {
      printRes: false,
      chunkCharacters: ['.\n\n', '.\n', '. ', '\n', ', ', ' '],
      chunkSize: 5500,
      maxSearch: 128,
    })

    const summary = yield getCourseS30SummaryChunkCreated({
      textChunk: textChunks[0],
    })

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        summary,
      })
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['summary'],
        status: CreateCourseStatusEnumType['success'],
      })
    )
  } catch (error: any) {
    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['summary'],
        status: CreateCourseStatusEnumType['failure'],
      })
    )

    console.info(
      'getCourseS35SummaryCreated.saga  [110] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourseS35SummaryCreated = withDebounce(
  getCourseS35SummaryCreatedGenerator,
  500
)

export default function* getCourseS35SummaryCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_SUMMARY_CREATED.REQUEST().type],
    getCourseS35SummaryCreated
  )
}
