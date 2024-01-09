import { takeEvery, put, select, delay } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import {
  RootStoreType,
  CreateModuleStagesEnumType,
  CreateCourseStatusEnumType,
} from '../../Interfaces/RootStoreType'
import {
  timeEstimationBots,
  TimeEstimationBotNameEnumType,
} from '../../Constants/timeEstimationBots.const'
import { withDebounce } from '../../Shared/withDebounce'
import {
  getCourseBotResponse,
  GetCourseBotResponseParamsType,
} from './getCourseBotResponse.saga'

export function* getCourse35SummaryCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    const transcriptChunks: any = yield select((state: RootStoreType) => {
      return state.courseCreateProgress.transcriptChunks
    })

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['summary'],
        timeCalculated: Array.isArray(transcriptChunks)
          ? transcriptChunks.length *
            timeEstimationBots.transcriptChunkToSummary
          : null,
      })
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['summary'],
        status: CreateCourseStatusEnumType['pending'],
      })
    )

    let summary: any[] = []
    let summaryChunks: any[][] = []

    for (const transcriptChunk of transcriptChunks) {
      const getCourseBotResponseParams: GetCourseBotResponseParamsType = {
        botID: 'gkHgpq771VuJ',
        profileID: 'lojNPRoL4bSQ',
        profileName: '@split_text_persona_summary',
        stage: CreateModuleStagesEnumType['summary'],
        timeEstimationBotName:
          TimeEstimationBotNameEnumType['summaryChunkToQuestions'],
        userText: transcriptChunk,
      }
      const summaryItem: any = yield getCourseBotResponse(
        getCourseBotResponseParams
      )

      let summaryItemNext = summaryItem
      if (summaryItem.length === 1 && Array.isArray(summaryItem[0]))
        summaryItemNext = summaryItem[0]

      summary = [...summary, ...summaryItemNext]
      summaryChunks = [...summaryChunks, summaryItemNext]
    }

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        summary,
      })
    )

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        summaryChunks,
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
      'getCourse35SummaryCreated.saga  [110] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourse35SummaryCreated = withDebounce(
  getCourse35SummaryCreatedGenerator,
  500
)

export default function* getCourse35SummaryCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_SUMMARY_CREATED.REQUEST().type],
    getCourse35SummaryCreated
  )
}
