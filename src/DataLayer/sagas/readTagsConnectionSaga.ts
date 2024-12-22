import { takeEvery, put, select } from 'redux-saga/effects'

import { QueryReadTagsConnectionArgs } from 'yourails_common'
import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'
import { getHeadersAuthDict } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { PaginationNameEnumType } from 'yourails_common'
import { getLocalStorageReadKeyObj } from 'yourails_common'
import { withDebounce } from 'yourails_common'
import { getChainedResponsibility } from 'yourails_common'
import { getMappedConnectionToItems } from 'yourails_common'
import { PAGINATION_OFFSET } from 'yourails_common'
import { withLoaderWrapperSaga } from './withLoaderWrapperSaga'

function* readTagsConnectionGenerator(params: ActionReduxType | any): Iterable<any> {
  const isLoaderOverlay = params?.data?.isLoaderOverlay
  const minCount = params?.data?.minCount
  const minCompleted = params?.data?.minCompleted
  const offsetIn = params?.data?.offset

  const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)

  const {
    componentsState: {
      screenActive,
      pagination: {
        pageTags: { first, offset: offsetStore },
      },
    },
    forms: { documentsSearch, tagsSearch, tagsPick, tagsOmit },
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  const offset = offsetIn || offsetStore

  let learnerUserID: string = ''
  let sub_localStorage = getLocalStorageReadKeyObj('sub')
  sub_localStorage = sub_localStorage && sub_localStorage !== '""' ? sub_localStorage : ''
  learnerUserID = sub || sub_localStorage

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

    variables.readTagsConnectionInput.minCount = minCount || 3
    if (minCompleted) variables.readTagsConnectionInput.minCompleted = minCompleted

    const readTagsConnection: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: ResolveGraphqlEnumType['readTagsConnection'],
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 10000,
      }
    )

    let tags: any = getChainedResponsibility(readTagsConnection)
      .exec(getMappedConnectionToItems, {
        printRes: false,
      })
      .exec((tags: any) =>
        tags.filter((_: any, index: number) => index < PAGINATION_OFFSET['pageTags'])
      ).result

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
