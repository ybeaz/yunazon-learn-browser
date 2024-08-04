import { takeEvery, put, select } from 'redux-saga/effects'

import { QueryReadTagsConnectionArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { RootStoreType, PaginationNameEnumType } from '../../Interfaces/RootStoreType'
import { getLocalStorageReadKeyObj } from '../../Shared/getLocalStorageReadKeyObj'
import { withDebounce } from '../../Shared/withDebounce'
import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'
import { getMappedConnectionToItems } from '../../Shared/getMappedConnectionToItems'

function* readTagsConnectionGenerator(params: ActionReduxType | any): Iterable<any> {
  const isLoaderOverlay = params?.data?.isLoaderOverlay

  const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)

  const {
    componentsState: {
      screenActive,
      pagination: {
        pageTags: { first, offset },
      },
    },
    forms: { documentsSearch, tagsSearch, tagsPick, tagsOmit },
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  let learnerUserID: string = ''
  let sub_localStorage = getLocalStorageReadKeyObj('sub')
  sub_localStorage = sub_localStorage && sub_localStorage !== '""' ? sub_localStorage : ''
  learnerUserID = sub || sub_localStorage

  console.info('readTagsConnectionSaga [36]', { documentsSearch, tagsSearch })

  try {
    if (isLoaderOverlay) yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables: QueryReadTagsConnectionArgs = {
      readTagsConnectionInput: {
        isActive: true,
        tagIDs: [],
        contentIDs: [],
        creatorIDs: [],
        learnerUserID,
        first,
        offset,
        after: '',
        language: '',
        searchPhrase: tagsSearch || documentsSearch,
        searchIn: ['value'],
        operators: {
          searchPhrase: 'or',
        },
        minCount: 2,
        tagsPick: [],
        tagsOmit: [],
        sort: {
          prop: 'count',
          direction: -1,
        },
        sortGraphQl: {
          prop: 'completed',
          direction: -1,
        },
      },
    }

    const readTagsConnection: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'readTagsConnection',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 10000,
      }
    )

    let tags: any = getChainedResponsibility(readTagsConnection).exec(getMappedConnectionToItems, {
      printRes: false,
    }).result

    yield put(actionSync.SET_TAGS_CLOUD({ tagsCloud: tags }))

    const pageInfo = readTagsConnection?.pageInfo
    yield put(
      actionSync.SET_PAGE_INFO({ paginationName: PaginationNameEnumType['pageTags'], ...pageInfo })
    )

    if (isLoaderOverlay) yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('readTagsConnection [35] ERROR', `${error.name}: ${error.message}`)
  }
}

export const readTagsConnection = withDebounce(readTagsConnectionGenerator, 500)

export default function* readTagsConnectionSaga() {
  yield takeEvery([actionAsync.READ_TAGS_CONNECTION.REQUEST().type], readTagsConnection)
}
