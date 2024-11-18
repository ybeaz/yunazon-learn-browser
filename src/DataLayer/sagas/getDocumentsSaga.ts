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

export function* getDocumentsGenerator(params: ActionReduxType | any): Iterable<any> {
  yield delay(1000)

  const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)
  const {
    authAwsCognitoUserData: { sub },
    componentsState: {
      screenActive,
      pagination: {
        pageDocuments: { first, offset },
      },
    },
    forms: { documentsSearch, tagsPick, tagsOmit },
    profiles,
  } = stateSelected as RootStoreType

  if ((screenActive === 'MyModules' || screenActive === 'MyDocuments') && !sub) return

  const { profileIDs } = getUserProfileData({ sub, screenActive, profiles })

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const readDocumentsConnectionInput: ReadDocumentsConnectionInputType = {
      first,
      offset,
      learnerIDs: profileIDs,
      searchPhrase: documentsSearch,
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
      getMappedConnectionToItems,
      { printRes: false }
    ).result

    yield put(actionSync.SET_DOCUMENTS(documentsNext))

    const pageInfo = readDocumentsConnection?.pageInfo
    yield put(
      actionSync.SET_PAGE_INFO({
        paginationName: PaginationNameEnumType['pageDocuments'],
        ...pageInfo,
      })
    )

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('getDocumentsSaga [44] ERROR', `${error.name}: ${error.message}`)
  }
}

export const getDocuments = withDebounce(getDocumentsGenerator, 500)

export default function* getDocumentsSaga() {
  yield takeEvery([actionAsync.GET_DOCUMENTS.REQUEST().type], getDocuments)
}
