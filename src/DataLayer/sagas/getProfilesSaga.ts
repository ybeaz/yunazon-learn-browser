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

export function* getProfilesGenerator(
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

    yield put(actionSync.SET_PROFILES(readProfiles))
    console.info('getProfilesSaga [44]', { readProfiles })

    return readProfiles
  } catch (error: any) {
    console.info(
      'getProfilesSaga  [110] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getProfiles = withDebounce(getProfilesGenerator, 500)

export default function* getProfilesSaga() {
  yield takeEvery([actionAsync.GET_PROFILES.REQUEST().type], getProfiles)
}
