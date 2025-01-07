import { takeEvery, put, select } from 'redux-saga/effects'

import { MutationUpdateProfilesArgs } from 'yourails_common'
import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'
import { getHeadersAuthDict } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { withDebounce } from 'yourails_common'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

function* updateProfileGenerator(params: ActionReduxType | any): Iterable<any> {
  const {
    data: { profile },
  } = params

  const variables: MutationUpdateProfilesArgs = {
    updateProfilesInput: [profile],
  }

  const updateProfiles: any = yield getResponseGraphqlAsync(
    {
      variables,
      resolveGraphqlName: ResolveGraphqlEnumType['updateProfiles'],
    },
    {
      ...getHeadersAuthDict(),
      clientHttpType: selectGraphqlHttpClientFlag(),
      timeout: 5000,
    }
  )

  yield put(actionSync.SET_PROFILES(updateProfiles))
}

export const updateProfile = withDebounce(
  withTryCatchFinallySaga(updateProfileGenerator, {
    optionsDefault: { funcParent: 'updateProfileSaga' },
    resDefault: [],
  }),
  500
)

export default function* updateProfileSaga() {
  yield takeEvery([actionAsync.UPDATE_PROFILE.REQUEST().type], updateProfile)
}
