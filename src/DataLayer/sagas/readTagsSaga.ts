import { takeEvery, put, select } from 'redux-saga/effects'

import { QueryReadTagsArgs } from 'yourails_common'
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

function* readTagsGenerator(params: ActionReduxType | any): Iterable<any> {
  const isLoaderOverlay = params?.data?.isLoaderOverlay
  const tagID = params?.data?.tagID

  const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)

  const {
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  let learnerUserID: string = ''
  let sub_localStorage = getLocalStorageReadKeyObj('sub')
  sub_localStorage = sub_localStorage && sub_localStorage !== '""' ? sub_localStorage : ''
  learnerUserID = sub || sub_localStorage

  const variables: QueryReadTagsArgs = {
    readTagsInput: [
      {
        tagID,
        learnerUserID: sub_localStorage,
      },
    ],
  }

  const readTags: any = yield getResponseGraphqlAsync(
    {
      variables,
      resolveGraphqlName: ResolveGraphqlEnumType['readTags'],
    },
    {
      ...getHeadersAuthDict(),
      clientHttpType: selectGraphqlHttpClientFlag(),
      timeout: 10000,
    }
  )

  yield put(actionSync.SET_TAGS_CLOUD({ tagsCloud: readTags }))
}

export const readTags = withDebounce(
  withTryCatchFinallySaga(withLoaderWrapperSaga(readTagsGenerator), {
    optionsDefault: { funcParent: 'readTagsSaga' },
    resDefault: [],
  }),
  500
)

export default function* readTagsSaga() {
  yield takeEvery([actionAsync.READ_TAGS.REQUEST().type], readTags)
}
