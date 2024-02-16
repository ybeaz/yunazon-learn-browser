import { takeEvery, put, select } from 'redux-saga/effects'

import { MutationUpdateProfilesArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { getArrayItemByProp } from '../../Shared/getArrayItemByProp'

function* updateProfile(params: ActionReduxType | any): Iterable<any> {
  const stateSelected: RootStoreType | any = yield select(
    (state: RootStoreType) => state
  )
  const {
    forms: {
      profileActive: { nameFirst, nameMiddle, nameLast },
    },
    profiles,
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  const profile = getArrayItemByProp({
    arr: profiles,
    propName: 'userID',
    propValue: sub,
  })

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables: MutationUpdateProfilesArgs = {
      updateProfilesInput: [
        {
          ...profile,
          nameFirst,
          nameMiddle,
          nameLast,
        },
      ],
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

export default function* updateProfileSaga() {
  yield takeEvery([actionAsync.UPDATE_PROFILE.REQUEST().type], updateProfile)
}
