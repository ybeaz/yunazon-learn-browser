import { takeEvery, put, select } from 'redux-saga/effects'

import { QueryReadTagsCloudModulesArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { getLocalStorageReadKeyObj } from '../../Shared/getLocalStorageReadKeyObj'
import { withDebounce } from '../../Shared/withDebounce'

function* readTagsCloudModulesGenerator(params: ActionReduxType | any): Iterable<any> {
  const { data: documentID } = params

  const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)

  const {
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  let learnerUserID: string = ''
  let sub_localStorage = getLocalStorageReadKeyObj('sub')
  sub_localStorage = sub_localStorage && sub_localStorage !== '""' ? sub_localStorage : ''
  learnerUserID = sub || sub_localStorage

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables: QueryReadTagsCloudModulesArgs = {
      readTagsCloudModulesInput: {
        isActive: true,
        learnerUserID,
      },
    }

    const readTagsCloudModules: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'readTagsCloudModules',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    console.info('readTagsCloudModulesSaga [49]', { readTagsCloudModules })
    // yield put(actionSync.SET_TAGS_CLOUD_MODULES(readTagsCloudModules))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('readTagsCloudModules [35] ERROR', `${error.name}: ${error.message}`)
  }
}

export const readTagsCloudModules = withDebounce(readTagsCloudModulesGenerator, 500)

export default function* readTagsCloudModulesSaga() {
  yield takeEvery([actionAsync.READ_TAGS_CLOUD_MODULES.REQUEST().type], readTagsCloudModules)
}
