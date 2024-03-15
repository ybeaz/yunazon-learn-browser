import { takeEvery, put, select } from 'redux-saga/effects'

import { MutationUpdateProfilesArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { withDebounce } from '../../Shared/withDebounce'

function* updateProfileGenerator(params: ActionReduxType | any): Iterable<any> {
  const {
    data: { profile },
  } = params

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables: MutationUpdateProfilesArgs = {
      updateProfilesInput: [profile],
    }

    const updateProfiles: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'updateProfiles',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    yield put(actionSync.SET_PROFILES(updateProfiles))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('updateProfile [82] ERROR', `${error.name}: ${error.message}`)
  }
}

export const updateProfile = withDebounce(updateProfileGenerator, 500)

export default function* updateProfileSaga() {
  yield takeEvery([actionAsync.UPDATE_PROFILE.REQUEST().type], updateProfile)
}
