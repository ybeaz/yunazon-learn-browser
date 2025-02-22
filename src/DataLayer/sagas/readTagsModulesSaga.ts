import { takeEvery, put, select } from 'redux-saga/effects'

import { QueryReadTagsModulesAllArgs } from 'yourails_common'
import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'
import { getHeadersAuthDict } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { getLocalStorageReadKeyObj } from 'yourails_common'
import { withDebounce } from 'yourails_common'
import { withLoaderWrapperSaga } from './withLoaderWrapperSaga'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

/**
 * @status DEPRECIATED in favor of readTagsModulesGenerator
 * @param params @
 */
function* readTagsModulesGenerator(params: ActionReduxType | any): Iterable<any> {
  const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)

  const {
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  let learnerUserID: string = ''
  let sub_localStorage = getLocalStorageReadKeyObj('sub')
  sub_localStorage = sub_localStorage && sub_localStorage !== '""' ? sub_localStorage : ''
  learnerUserID = sub || sub_localStorage

  const variables: QueryReadTagsModulesAllArgs = {
    readTagsModulesAllInput: {
      learnerUserID,
      minCount: 2,
      limit: 256,
    },
  }

  const readTagsModules: any = yield getResponseGraphqlAsync(
    {
      variables,
      resolveGraphqlName: ResolveGraphqlEnumType['readTagsModules'],
    },
    {
      ...getHeadersAuthDict(),
      clientHttpType: selectGraphqlHttpClientFlag(),
      timeout: 10000,
    }
  )

  yield put(actionSync.SET_TAGS_CLOUD({ tagsCloud: readTagsModules }))
}

export const readTagsModules = withDebounce(
  withTryCatchFinallySaga(withLoaderWrapperSaga(readTagsModulesGenerator), {
    optionsDefault: { funcParent: 'readTagsModulesSaga' },
    resDefault: [],
  }),
  500
)

export default function* readTagsModulesSaga() {
  yield takeEvery([actionAsync.READ_TAGS_CLOUD_MODULES.REQUEST().type], readTagsModules)
}
