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

export function* getCourse55ObjectionsCreatedGenerator(
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
        stage: CreateModuleStagesEnumType['objections'],
        timeCalculated: Array.isArray(summary)
          ? summaryChunks.length * connectionsTimeouts.summaryChunkToObjections
          : null,
      })
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['objections'],
        status: CreateCourseStatusEnumType['pending'],
      })
    )

    let objections: any[] = []
    let objectionsChunks: any[][] = []

    for (const summaryChunk of summaryChunks) {
      const getCourseBotResponseParams: GetCourseBotResponseParamsType = {
        botID: 'g3lccRJtksaE',
        profileID: 'y9WjMwhdhr31',
        profileName: '@objector_persona',
        stage: CreateModuleStagesEnumType['objections'],
        connectionsTimeoutName:
          ConnectionsTimeoutNameEnumType['summaryChunkToObjections'],
        userText: JSON.stringify(summaryChunk, null, 2),
      }
      const objectionsChunk: any = yield getCourseBotResponse(
        getCourseBotResponseParams
      )

      let objectionsChunkNext = objectionsChunk
      if (objectionsChunk.length === 1 && Array.isArray(objectionsChunk[0]))
        objectionsChunkNext = objectionsChunk[0]

      objections = [...objections, ...objectionsChunkNext]
      objectionsChunks = [...objectionsChunks, objectionsChunkNext]
    }

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        objections,
      })
    )

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        objectionsChunks,
      })
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['objections'],
        status: CreateCourseStatusEnumType['success'],
      })
    )
  } catch (error: any) {
    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['objections'],
        status: CreateCourseStatusEnumType['failure'],
      })
    )

    console.info(
      'getCourse55ObjectionsCreated.saga  [110] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourse55ObjectionsCreated = withDebounce(
  getCourse55ObjectionsCreatedGenerator,
  500
)

export default function* getCourse55ObjectionsCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_OBJECTIONS_CREATED.REQUEST().type],
    getCourse55ObjectionsCreated
  )
}
