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

import { getCourseS40QuestionsCreated } from './getCourseS40QuestionsCreated.saga'

export function* getCourseS45QuestionsCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    const summaryChunks: any = yield select((state: RootStoreType) => {
      return state.courseCreateProgress.summaryChunks
    })

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['questions'],
        status: CreateCourseStatusEnumType['pending'],
      })
    )

    let questions: any[] = []
    let questionsChunks: any[][] = []

    for (const summaryChunk of summaryChunks) {
      const questionsChunk: any = yield getCourseS40QuestionsCreated({
        textChunk: summaryChunk,
      })

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
      'getCourseS45QuestionsCreated.saga  [110] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourseS45QuestionsCreated = withDebounce(
  getCourseS45QuestionsCreatedGenerator,
  500
)

export default function* getCourseS45QuestionsCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_QUESTIONS_CREATED.REQUEST().type],
    getCourseS45QuestionsCreated
  )
}
