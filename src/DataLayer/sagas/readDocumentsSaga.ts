import { takeEvery, put, select, delay } from 'redux-saga/effects'

import { ReadDocumentsConnectionInputType, QueryReadDocumentsConnectionArgs } from 'yourails_common'
import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from 'yourails_common'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common' // import { getResponseGraphqlAsync } from 'yourails_common'
// import { getResponseGraphqlAsync } from 'yourails_common'

import { getChainedResponsibility } from 'yourails_common'
import { getMappedConnectionToItems } from 'yourails_common'
import { PaginationNameEnumType } from 'yourails_common'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { withDebounce } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { getUserProfileData } from 'yourails_common'
import { withLoaderWrapperSaga } from './withLoaderWrapperSaga'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

export function* readDocumentsGenerator(params: ActionReduxType | any): Iterable<any> {
  yield delay(1000)

  const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)
  const {
    authAwsCognitoUserData: { sub },
    componentsState: {
      screenActive,
      pagination: {
        pageDocuments: { first, offset },
      },
      documentsSearchApplied,
      tagsPick,
      tagsOmit,
    },
    profiles,
  } = stateSelected as RootStoreType

  console.info('readDocumentsSaga [38]', { documentsSearchApplied })

  if ((screenActive === 'MyModules' || screenActive === 'MyDocuments') && !sub) return

  const { profileIDs } = getUserProfileData({ sub, screenActive, profiles })

  const readDocumentsConnectionInput: ReadDocumentsConnectionInputType = {
    first,
    offset,
    learnerIDs: profileIDs,
    searchPhrase: documentsSearchApplied,
    searchIn: ['module.capture', 'module.description', 'module.tags'],
    operators: {
      searchPhrase: 'or',
      learnerProfileID: 'and',
    },
    tagsPick,
    tagsOmit,
    sort: { prop: 'dateCreated', direction: -1 },
    isActive: true,
  }

  const variables: QueryReadDocumentsConnectionArgs = {
    readDocumentsConnectionInput,
  }
  const readDocumentsConnection: any = yield getResponseGraphqlAsync(
    {
      variables,
      resolveGraphqlName: ResolveGraphqlEnumType['readDocumentsConnection'],
    },
    {
      ...getHeadersAuthDict(),
      clientHttpType: selectGraphqlHttpClientFlag(),
      timeout: 10000,
    }
  )

  let documentsNext: any = getChainedResponsibility(readDocumentsConnection).exec(
    getMappedConnectionToItems
  ).result

  yield put(actionSync.SET_DOCUMENTS(documentsNext))

  const pageInfo = readDocumentsConnection?.pageInfo
  yield put(
    actionSync.SET_PAGE_INFO({
      paginationName: PaginationNameEnumType['pageDocuments'],
      ...pageInfo,
    })
  )
}

export const readDocuments = withDebounce(
  withTryCatchFinallySaga(withLoaderWrapperSaga(readDocumentsGenerator), {
    optionsDefault: { funcParent: 'readDocumentsSaga' },
    resDefault: [],
  }),
  500
)

export default function* readDocumentsSaga() {
  yield takeEvery([actionAsync.READ_DOCUMENTS.REQUEST().type], readDocuments)
}
