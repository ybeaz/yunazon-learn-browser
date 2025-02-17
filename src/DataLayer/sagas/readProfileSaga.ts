import { takeEvery, put, select } from 'redux-saga/effects'

import { QueryReadProfilesArgs } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from 'yourails_common'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType, FragmentEnumType } from 'yourails_common'
import { withDebounce } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { CONNECTIONS_TIMEOUTS, ConnectionsTimeoutNameEnumType } from 'yourails_common'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

export type GetBotResponseParamsType = never

export function* readProfileGenerator(params: GetBotResponseParamsType): Iterable<any> {
  const {
    data: { userID, profileID },
  } = params

  const variables: QueryReadProfilesArgs = {
    readProfilesInput: [
      {
        profileID,
        userID,
        isActive: true,
      },
    ],
  }

  const readProfiles: any = yield getResponseGraphqlAsync(
    {
      variables,
      resolveGraphqlName: ResolveGraphqlEnumType['readProfiles'],
      fragmentName: FragmentEnumType['ProfileTypeFull'],
    },
    {
      ...getHeadersAuthDict(),
      clientHttpType: selectGraphqlHttpClientFlag(),
      timeout: CONNECTIONS_TIMEOUTS['standard'],
    }
  )

  yield put(actionSync.SET_PROFILES(readProfiles))

  return readProfiles[0] || { nameFirst: null, nameMiddle: null, nameLast: null }
}

export const readProfile = withDebounce(
  withTryCatchFinallySaga(readProfileGenerator, {
    optionsDefault: { funcParent: 'readProfileSaga' },
    resDefault: { nameFirst: null, nameMiddle: null, nameLast: null },
  }),
  500
)

export default function* readProfileSaga() {
  yield takeEvery([actionAsync.READ_PROFILE.REQUEST().type], readProfile)
}
