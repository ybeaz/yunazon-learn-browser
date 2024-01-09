import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import {
  RootStoreType,
  CreateModuleStagesEnumType,
  CreateCourseStatusEnumType,
} from '../../Interfaces/RootStoreType'
import { timeEstimationBots } from '../../Constants/timeEstimationBots.const'
import { withDebounce } from '../../Shared/withDebounce'

import { getCourseS30SummaryChunkCreated } from './getCourseS30SummaryChunkCreated.saga'

export function* getCourseS35SummaryCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    const transcriptChunks: any = yield select((state: RootStoreType) => {
      return state.courseCreateProgress.transcriptChunks
    })

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['summary'],
        status: CreateCourseStatusEnumType['pending'],
      })
    )

    let summary: any[] = []
    let summaryChunks: any[][] = []

    for (const transcriptChunk of transcriptChunks) {
      const summaryItem: any = yield getCourseS30SummaryChunkCreated({
        textChunk: transcriptChunk,
      })

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
        stage: CreateModuleStagesEnumType['questions'],
        timeCalculated: Array.isArray(summary)
          ? summary.length * timeEstimationBots.transcriptChunkToSummary
          : null,
      })
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['objections'],
        timeCalculated: Array.isArray(summary)
          ? summary.length * timeEstimationBots.transcriptChunkToSummary
          : null,
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
