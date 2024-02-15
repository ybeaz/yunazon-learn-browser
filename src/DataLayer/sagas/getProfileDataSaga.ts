import { takeEvery, put, select } from 'redux-saga/effects'

import { QueryReadProfilesArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import {
  getResponseGraphqlAsync,
  FragmentEnumType,
} from '../../../../yourails_communication_layer'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import {
  connectionsTimeouts,
  ConnectionsTimeoutNameEnumType,
} from '../../Constants/connectionsTimeouts.const'

export type GetBotResponseParamsType = never

export function* getProfileDataGenerator(
  params: GetBotResponseParamsType
): Iterable<any> {
  const stateSelected: RootStoreType | any = yield select(
    (state: RootStoreType) => state
  )

  const {
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  try {
    const variables: QueryReadProfilesArgs = {
      readProfilesInput: [
        {
          profileID: '',
          userID: sub,
        },
      ],
    }

    const readProfiles: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'readProfiles',
        fragmentName: FragmentEnumType['ProfileTypeShort'],
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: connectionsTimeouts['standard'],
      }
    )

    const output = readProfiles[0]
    console.info('getProfileDataSaga [44]', { output })

    return output
  } catch (error: any) {
    console.info(
      'getProfileDataSaga  [110] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getProfileData = withDebounce(getProfileDataGenerator, 500)

export default function* getProfileDataSaga() {
  yield takeEvery([actionAsync.GET_PROFILE_DATA.REQUEST().type], getProfileData)
}
