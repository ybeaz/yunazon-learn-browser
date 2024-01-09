import { takeEvery, put, select } from 'redux-saga/effects'

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

export function* getCourse45QuestionsCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    const { summary, summaryChunks }: any = yield select(
      (state: RootStoreType) => {
        return {
          summary: state.courseCreateProgress.summary,
          summaryChunks: state.courseCreateProgress.summaryChunks,
        }
      }
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['questions'],
        timeCalculated: Array.isArray(summary)
          ? summary.length * timeEstimationBots.summaryChunkToQuestions
          : null,
      })
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['questions'],
        status: CreateCourseStatusEnumType['pending'],
      })
    )

    let questions: any[] = []
    let questionsChunks: any[][] = []

    for (const summaryChunk of summaryChunks) {
      const getCourseBotResponseParams: GetCourseBotResponseParamsType = {
        botID: 'l3Yg9sxlhbyKEJ5uzT1Sx',
        profileID: 'iGlg3wRNvsQEIYF5L5svE',
        profileName: '@t_q_ao_extractor_persona',
        stage: CreateModuleStagesEnumType['questions'],
        timeEstimationBotName:
          TimeEstimationBotNameEnumType['summaryChunkToQuestions'],
        userText: JSON.stringify(summaryChunk, null, 2),
      }
      const questionsChunk: any = yield getCourseBotResponse(
        getCourseBotResponseParams
      )

      let questionsChunkNext = questionsChunk
      if (questionsChunk.length === 1 && Array.isArray(questionsChunk[0]))
        questionsChunkNext = questionsChunk[0]

      questions = [...questionsChunks, ...questionsChunkNext]
      questionsChunks = [...questionsChunks, questionsChunkNext]
    }

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        questions,
      })
    )

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        questionsChunks,
      })
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['questions'],
        status: CreateCourseStatusEnumType['success'],
      })
    )
  } catch (error: any) {
    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['questions'],
        status: CreateCourseStatusEnumType['failure'],
      })
    )

    console.info(
      'getCourse45QuestionsCreated.saga  [110] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourse45QuestionsCreated = withDebounce(
  getCourse45QuestionsCreatedGenerator,
  500
)

export default function* getCourse45QuestionsCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_QUESTIONS_CREATED.REQUEST().type],
    getCourse45QuestionsCreated
  )
}
