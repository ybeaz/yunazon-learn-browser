import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { withDebounce } from 'yourails_common'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'
import { getHeadersAuthDict } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

export function* createSiteMapGenerator(params: ActionReduxType | any): Iterable<any> {
  const createSiteMap: any = yield getResponseGraphqlAsync(
    {
      variables: {},
      resolveGraphqlName: ResolveGraphqlEnumType['createSiteMap'],
    },
    {
      ...getHeadersAuthDict(),
      clientHttpType: selectGraphqlHttpClientFlag(),
      timeout: 5000,
    }
  )
}

export const createSiteMap = withDebounce(
  withTryCatchFinallySaga(createSiteMapGenerator, {
    optionsDefault: { funcParent: 'createSiteMapSaga' },
    resDefault: [],
  }),
  500
)

export default function* createSiteMapSaga() {
  yield takeEvery([actionAsync.CREATE_SITE_MAP.REQUEST().type], createSiteMap)
}
