import { takeEvery, put, select } from 'redux-saga/effects'

import { MutationCreateBotResponseArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import {
  RootStoreType,
  CreateModuleStagesEnumType,
  CreateModuleStatusEnumType,
} from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import {
  connectionsTimeouts,
  ConnectionsTimeoutNameEnumType,
} from '../../Constants/connectionsTimeouts.const'
import {
  getPreparedResponseFromBot,
  GetPreparedResponseFromBotParamsType,
} from '../../Shared/getPreparedResponseFromBot/getPreparedResponseFromBot'

export type GetCourseBotResponseParamsType = {
  botID: string
  profileID: string
  profileName: string
  stage: CreateModuleStagesEnumType
  connectionsTimeoutName: ConnectionsTimeoutNameEnumType
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
    connectionsTimeoutName,
  } = params

  try {
    const variables: MutationCreateBotResponseArgs = {
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
        timeout: connectionsTimeouts[connectionsTimeoutName],
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
        status: CreateModuleStatusEnumType['failure'],
      })
    )

    console.info(
      'getCourseBotResponseSaga  [110] ERROR',
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
