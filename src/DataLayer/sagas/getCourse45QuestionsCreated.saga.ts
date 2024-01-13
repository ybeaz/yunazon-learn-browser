import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import {
  RootStoreType,
  CreateModuleStagesEnumType,
  CreateCourseStatusEnumType,
} from '../../Interfaces/RootStoreType'
import {
  connectionsTimeouts,
  ConnectionsTimeoutNameEnumType,
} from '../../Constants/connectionsTimeouts.const'
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
          ? summaryChunks.length * connectionsTimeouts.summaryChunkToQuestions
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
    let paramPrev = ''

    for (const summaryChunk of summaryChunks) {
      setTimeout(() => {
        const paramString = JSON.stringify(summaryChunk)
        if (paramPrev !== '' && paramPrev === paramString) {
          throw new Error(
            `getCourse35SummaryCreated.saga [57] connection ${CreateModuleStagesEnumType['questions']} is timed out`
          )
        }
      }, connectionsTimeouts[ConnectionsTimeoutNameEnumType['summaryChunkToQuestions']] + 1500)

      const userText =
        typeof summaryChunk === 'string'
          ? summaryChunk
          : JSON.stringify(summaryChunk, null, 2)

      const getCourseBotResponseParams: GetCourseBotResponseParamsType = {
        botID: 'kSuQwjzwTjvO',
        profileID: 'tbd3rgTVFkiU',
        profileName: '@t_q_ao_extractor_02_persona',
        stage: CreateModuleStagesEnumType['questions'],
        connectionsTimeoutName:
          ConnectionsTimeoutNameEnumType['summaryChunkToQuestions'],
        userText,
      }
      const questionsChunk: any = yield getCourseBotResponse(
        getCourseBotResponseParams
      )

      if (!Array.isArray(questionsChunk) || questionsChunk.length === 0)
        throw new Error(
          `getCourse45QuestionsCreated.saga [73] questionsChunk is not an array or array empty, ${JSON.stringify(
            questionsChunk
          )}`
        )

      questions = [...questions, ...questionsChunk.flat(12)]
      questionsChunks = [...questionsChunks, questionsChunk.flat(12)]
      paramPrev === JSON.stringify(summaryChunk)
    }

    if (questions.length === 0) {
      throw new Error(`getting questions step is failed`)
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
