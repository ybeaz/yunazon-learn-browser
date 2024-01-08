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

export function* getCourseS2TranscriptCreatedGenerator(
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
        transcript: createYoutubeTranscript,
      })
    )

    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['transcript'],
        status: CreateCourseStatusEnumType['success'],
      })
    )
  } catch (error: any) {
    actionSync.SET_COURSE_CREATE_STATUS({
      stage: CreateModuleStagesEnumType['transcript'],
      status: CreateCourseStatusEnumType['failure'],
    })

    console.info(
      'getCourseS2TranscriptCreated.saga  [44]',
      error.name + ': ' + error.message
    )
  }
}

export const getCourseS2TranscriptCreated = withDebounce(
  getCourseS2TranscriptCreatedGenerator,
  500
)

export default function* getCourseS2TranscriptCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_TRANSCRIPT_CREATED.REQUEST().type],
    getCourseS2TranscriptCreated
  )
}
