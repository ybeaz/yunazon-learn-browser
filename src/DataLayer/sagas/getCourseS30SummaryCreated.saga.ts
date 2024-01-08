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

export function* getCourseS30SummaryCreatedGenerator(
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

    console.info('getCourseS30SummaryCreated.saga [50]', { params })

    const output = getChunkedString(params, {
      printRes: false,
      chunkCharacters: ['.\n\n', '.\n', '. ', '\n', ', ', ' '],
      chunkSize: 5500,
      maxSearch: 128,
    })

    const variables = {
      createBotResponseInput: {
        botID: 'gkHgpq771VuJ',
        profileID: 'lojNPRoL4bSQ',
        profileName: '@split_text_persona_summary',
        userText: output[0],
      },
    }

    console.info('getCourseS30SummaryCreated.saga [56]', { variables })
    return
    const createBotResponseSummary: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'createBotResponse',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 30 * 1000,
      }
    )

    console.info('getCourseS30SummaryCreated.saga [79]', {
      createBotResponseSummary,
    })

    const summary = createBotResponseSummary.textObj.contentArray.map(
      (contentPiece: string) => getPreparedResponseFromBot(contentPiece)
    )

    console.info('getCourseS30SummaryCreated.saga [85]', {
      createBotResponseSummary,
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
      'getCourseS30SummaryCreated.saga  [110] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourseS30SummaryCreated = withDebounce(
  getCourseS30SummaryCreatedGenerator,
  500
)

export default function* getCourseS30SummaryCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_SUMMARY_CREATED.REQUEST().type],
    getCourseS30SummaryCreated
  )
}
