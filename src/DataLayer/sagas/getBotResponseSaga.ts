import { takeEvery, put, select } from 'redux-saga/effects'

import { MutationCreateBotResponseArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from 'yourails_common'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'
import {
  RootStoreType,
  CreateModuleStagesEnumType,
  CreateModuleStatusEnumType,
} from '../../Interfaces/RootStoreType'
import { withDebounce } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import {
  connectionsTimeouts,
  ConnectionsTimeoutNameEnumType,
} from '../../Constants/connectionsTimeouts.const'
import { getPreparedResponseFromBot, GetPreparedResponseFromBotParamsType } from 'yourails_common'

export type GetBotResponseParamsType = {
  botID: string
  profileID: string
  profileName: string
  stage: CreateModuleStagesEnumType
  connectionsTimeoutName: ConnectionsTimeoutNameEnumType
  userText: string
}

export function* getBotResponseGenerator(params: GetBotResponseParamsType): Iterable<any> {
  const { botID, profileID, profileName, userText, stage, connectionsTimeoutName } = params

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
        resolveGraphqlName: ResolveGraphqlEnumType['createBotResponse'],
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
      actionSync.SET_MODULE_CREATE_STATUS({
        stage,
        status: CreateModuleStatusEnumType['failure'],
      })
    )

    console.info('getBotResponseSaga  [110] ERROR', `${error.name}: ${error.message}`)
  }
}

export const getBotResponse = withDebounce(getBotResponseGenerator, 500)

export default function* getBotResponseSaga() {
  yield takeEvery([actionAsync.GET_BOT_RESPONSE.REQUEST().type], getBotResponse)
}
