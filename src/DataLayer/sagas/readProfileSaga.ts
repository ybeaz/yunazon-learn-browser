import { takeEvery, put, select } from 'redux-saga/effects'

import { QueryReadProfilesArgs } from '../../@types/GraphqlTypes'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType, FragmentEnumType } from 'yourails_common'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { connectionsTimeouts } from '../../Constants/connectionsTimeouts.const'

export type GetBotResponseParamsType = never

export function* readProfileGenerator(params: GetBotResponseParamsType): Iterable<any> {
  const {
    data: { userID, profileID },
  } = params

  try {
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
        timeout: connectionsTimeouts['standard'],
      }
    )

    yield put(actionSync.SET_PROFILES(readProfiles))

    return readProfiles[0]
  } catch (error: any) {
    console.info('readProfileSaga  [110] ERROR', `${error.name}: ${error.message}`)
    return { nameFirst: null, nameMiddle: null, nameLast: null }
  }
}

export const readProfile = withDebounce(readProfileGenerator, 500)

export default function* readProfileSaga() {
  yield takeEvery([actionAsync.GET_PROFILE.REQUEST().type], readProfile)
}
