import { takeEvery, put, select, delay } from 'redux-saga/effects'

import {
  ReadModulesConnectionInputType,
  QueryReadModulesConnectionArgs,
} from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'

import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'
import { getMappedConnectionToItems } from '../../Shared/getMappedConnectionToItems'
import { getPreparedModules } from '../../Shared/getPreparedModules'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { getArrayItemByProp } from '../../Shared/getArrayItemByProp'
import { getLocalStorageReadKeyObj } from '../../Shared/getLocalStorageReadKeyObj'

export function* getModulesGenerator(params: ActionReduxType | any): Iterable<any> {
  yield delay(1000)

  const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)

  const {
    componentsState: {
      screenActive,
      pagination: {
        pageModules: { first, offset },
      },
    },
    forms: { inputSearch, tagsPick, tagsOmit },
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  let profiles = stateSelected.profiles

  let creatorIDs: string[] = []
  let learnerUserID: string = ''

  if (screenActive === 'AcademyMatrix') {
    let sub_localStorage = getLocalStorageReadKeyObj('sub')
    sub_localStorage = sub_localStorage && sub_localStorage !== '""' ? sub_localStorage : ''
    learnerUserID = sub || sub_localStorage
  } else if (screenActive === 'MyModules' && sub) {
    const profile = getArrayItemByProp({
      arr: profiles,
      propName: 'userID',
      propValue: sub,
    })

    creatorIDs = [profile?.profileID]
  } else if (screenActive === 'MyModules' && !sub) {
    return
  }

  let readModulesConnectionInput: ReadModulesConnectionInputType = {
    first,
    offset,
    learnerUserID,
    creatorIDs,
    searchPhrase: inputSearch,
    tagsPick,
    tagsOmit,
    stagesPick: [],
    sort: { prop: 'dateCreated', direction: -1 },
    isActive: true,
  }

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables: QueryReadModulesConnectionArgs = {
      readModulesConnectionInput,
    }

    const readModulesConnection: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'readModulesConnection',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 10000,
      }
    )

    let modulesNext: any = getChainedResponsibility(readModulesConnection)
      .exec(getMappedConnectionToItems, { printRes: false })
      .exec(getPreparedModules).result

    yield put(actionSync.SET_MODULES(modulesNext))

    const pageInfo = readModulesConnection?.pageInfo
    yield put(actionSync.SET_PAGE_INFO({ paginationName: 'pageModules', ...pageInfo }))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('getModulesSaga [77] ERROR', `${error.name}: ${error.message}`)
  }
}

export const getModules = withDebounce(getModulesGenerator, 500)

export default function* getModulesSaga() {
  yield takeEvery([actionAsync.GET_MODULES.REQUEST().type], getModules)
}
