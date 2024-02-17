import { takeEvery, put, select } from 'redux-saga/effects'

import { QueryReadProfilesArgs } from '../../@types/GraphqlTypes'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import {
  getResponseGraphqlAsync,
  FragmentEnumType,
} from '../../../../yourails_communication_layer'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { connectionsTimeouts } from '../../Constants/connectionsTimeouts.const'

export type GetBotResponseParamsType = never

export function* getProfileGenerator(
  params: GetBotResponseParamsType
): Iterable<any> {
  const {
    data: { userID, profileID },
  } = params

  try {
    const variables: QueryReadProfilesArgs = {
      readProfilesInput: [
        {
          profileID,
          userID,
        },
      ],
    }

    const readProfiles: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'readProfiles',
        fragmentName: FragmentEnumType['ProfileTypeFull'],
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: connectionsTimeouts['standard'],
      }
    )

    yield put(actionSync.SET_PROFILES(readProfiles))

    return readProfiles
  } catch (error: any) {
    console.info(
      'getProfileSaga  [110] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getProfile = withDebounce(getProfileGenerator, 500)

export default function* getProfileSaga() {
  yield takeEvery([actionAsync.GET_PROFILE.REQUEST().type], getProfile)
}
