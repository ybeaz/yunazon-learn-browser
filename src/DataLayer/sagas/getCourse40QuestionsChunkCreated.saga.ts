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

export function* getCourse40QuestionsChunkCreatedGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  try {
    /* Add questions to courseCreateProgress 
        botID: 'l3Yg9sxlhbyKEJ5uzT1Sx',
        profileID: 'iGlg3wRNvsQEIYF5L5svE',
        profileName: '@t_q_ao_extractor_persona',
    */

    const { summaryChunk } = params

    const variables = {
      createBotResponseInput: {
        botID: 'l3Yg9sxlhbyKEJ5uzT1Sx',
        profileID: 'iGlg3wRNvsQEIYF5L5svE',
        profileName: '@t_q_ao_extractor_persona',
        userText: summaryChunk,
      },
    }

    const createBotResponseQuestions: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'createBotResponse',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: timeEstimationBots.summaryChunkToQuestions,
      }
    )

    console.info('getCourse40QuestionsChunkCreated.saga [53]', {
      createBotResponseQuestions,
    })

    const questions: any[] =
      createBotResponseQuestions.textObj.contentArray.map(
        (contentPiece: GetPreparedResponseFromBotParamsType) =>
          getPreparedResponseFromBot(contentPiece)
      )

    console.info('getCourse40QuestionsChunkCreated.saga [59]', { questions })
    return questions
  } catch (error: any) {
    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage: CreateModuleStagesEnumType['questions'],
        status: CreateCourseStatusEnumType['failure'],
      })
    )

    console.info(
      'getCourse40QuestionsChunkCreated.saga [44] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourse40QuestionsChunkCreated = withDebounce(
  getCourse40QuestionsChunkCreatedGenerator,
  500
)

export default function* getCourse40QuestionsChunkCreatedSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_QUESTION_CHUNK_CREATED.REQUEST().type],
    getCourse40QuestionsChunkCreated
  )
}
