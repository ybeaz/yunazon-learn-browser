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

export function* getCourseS3SummaryCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    /* Add summary to courseCreateProgress 
        botID: 'gkHgpq771VuJ',
        profileID: 'lojNPRoL4bSQ',
        userID: '6',
        profileName: '@split_text_persona_summary',
    */

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
      stage: 'metaData',
      status: CreateCourseStatusEnumType['failure'],
    })

    console.info(
      'getCourseS3SummaryCreated.saga  [44]',
      error.name + ': ' + error.message
    )
  }
}

export const getCourseS3SummaryCreated = withDebounce(
  getCourseS3SummaryCreatedGenerator,
  500
)

export default function* getCourseS3SummaryCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_SUMMARY_CREATED.REQUEST().type],
    getCourseS3SummaryCreated
  )
}
