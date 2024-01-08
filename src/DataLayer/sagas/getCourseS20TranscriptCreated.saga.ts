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
import { timeEstimationBots } from '../../Constants/timeEstimationBots.const'
import { getChunkedString } from '../../Shared/getChunkedString'

export function* getCourseS20TranscriptCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    /* Add transcript to courseCreateProgress */
    const originUrl: any = yield select((state: RootStoreType) => {
      return state.courseCreateProgress.originUrl
    })

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['transcript'],
        status: CreateCourseStatusEnumType['pending'],
      })
    )

    const variables = {
      createYoutubeTranscriptInput: {
        originUrl,
      },
    }

    const createYoutubeTranscript: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'createYoutubeTranscript',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        transcript: createYoutubeTranscript.transcript,
      })
    )

    const params = {
      input: createYoutubeTranscript.transcript,
    }

    const transcriptChunks = getChunkedString(params, {
      printRes: false,
      chunkCharacters: ['.\n\n', '.\n', '. ', '\n', ', ', ' '],
      chunkSize: 5500,
      maxSearch: 128,
    })

    yield put(
      actionSync.ADD_COURSE_CREATE_DATA({
        transcriptChunks,
      })
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['transcript'],
        status: CreateCourseStatusEnumType['success'],
      })
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['summary'],
        timeCalculated: Array.isArray(transcriptChunks)
          ? transcriptChunks.length *
            timeEstimationBots.transcriptChunkToSummary
          : null,
      })
    )
  } catch (error: any) {
    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['transcript'],
        status: CreateCourseStatusEnumType['failure'],
      })
    )

    console.info(
      'getCourseS20TranscriptCreated.saga [69] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourseS20TranscriptCreated = withDebounce(
  getCourseS20TranscriptCreatedGenerator,
  500
)

export default function* getCourseS20TranscriptCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_TRANSCRIPT_CREATED.REQUEST().type],
    getCourseS20TranscriptCreated
  )
}
