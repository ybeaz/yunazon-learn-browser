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
import {
  getPreparedResponseFromBot,
  GetPreparedResponseFromBotParamsType,
} from '../../Shared/getPreparedResponseFromBot'

export function* getCourse30SummaryChunkCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    /* Add summary to courseCreateProgress 
        botID: 'gkHgpq771VuJ',
        profileID: 'lojNPRoL4bSQ',
        profileName: '@split_text_persona_summary',
    */

    const { textChunk } = params

    const variables = {
      createBotResponseInput: {
        botID: 'gkHgpq771VuJ',
        profileID: 'lojNPRoL4bSQ',
        profileName: '@split_text_persona_summary',
        userText: textChunk,
      },
    }

    const createBotResponseSummary: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'createBotResponse',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: timeEstimationBots.transcriptChunkToSummary,
      }
    )

    const summary: any[] = createBotResponseSummary.textObj.contentArray.map(
      (contentPiece: GetPreparedResponseFromBotParamsType) =>
        getPreparedResponseFromBot(contentPiece)
    )

    return summary
  } catch (error: any) {
    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['summary'],
        status: CreateCourseStatusEnumType['failure'],
      })
    )

    console.info(
      'getCourse30SummaryChunkCreated.saga  [110] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourse30SummaryChunkCreated = withDebounce(
  getCourse30SummaryChunkCreatedGenerator,
  500
)

export default function* getCourse30SummaryChunkCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_SUMMARY_CHUNK_CREATED.REQUEST().type],
    getCourse30SummaryChunkCreated
  )
}
