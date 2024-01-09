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
  timeEstimationBots,
  TimeEstimationBotNameEnumType,
} from '../../Constants/timeEstimationBots.const'
import {
  getPreparedResponseFromBot,
  GetPreparedResponseFromBotParamsType,
} from '../../Shared/getPreparedResponseFromBot'

export type GetCourseBotResponseParamsType = {
  botID: string
  profileID: string
  profileName: string
  stage: CreateModuleStagesEnumType
  timeEstimationBotName: TimeEstimationBotNameEnumType
  userText: string
}

export function* getCourseBotResponseGenerator(
  params: GetCourseBotResponseParamsType
): Iterable<any> {
  const {
    botID,
    profileID,
    profileName,
    userText,
    stage,
    timeEstimationBotName,
  } = params

  try {
    const variables = {
      createBotResponseInput: {
        botID,
        profileID,
        profileName,
        userText,
      },
    }

    const createBotResponse: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'createBotResponse',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: timeEstimationBots[timeEstimationBotName],
      }
    )

    const output: any[] = createBotResponse.textObj.contentArray.map(
      (contentPiece: GetPreparedResponseFromBotParamsType) =>
        getPreparedResponseFromBot(contentPiece)
    )

    return output
  } catch (error: any) {
    yield put(
      actionSync.SET_COURSE_CREATE_STATUS({
        stage,
        status: CreateCourseStatusEnumType['failure'],
      })
    )

    console.info(
      'getCourseBotResponse.saga  [110] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getCourseBotResponse = withDebounce(
  getCourseBotResponseGenerator,
  500
)

export default function* getCourseBotResponseSaga() {
  yield takeEvery(
    [actionAsync.GET_COURSE_BOT_RESPONSE.REQUEST().type],
    getCourseBotResponse
  )
}
