import { takeEvery, put, select, delay } from 'redux-saga/effects'

import {
  ReadModulesConnectionInputType,
  QueryReadModulesConnectionArgs,
} from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { ModuleType } from '../../@types/GraphqlTypes'
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
  const isLoaderOverlay = params?.data?.isLoaderOverlay || false
  const operators = params?.data?.operators
  const moduleIDs = params?.data?.moduleIDs
  const isWithinModuleIDs = params?.data?.isWithinModuleIDs || false

  yield delay(1000)

  const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)

  const {
    componentsState: {
      screenActive,
      modulesSearchApplied,
      tagsSearchForModules,
      pagination: {
        pageModules: { first, offset },
      },
    },
    forms: { modulesSearch, tagsPick: tagsPickIn, tagsOmit },
    modules,
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  const tagsPick = tagsSearchForModules ? [tagsSearchForModules] : tagsPickIn

  let profiles = stateSelected.profiles

  let creatorIDs: string[] = []
  let learnerUserID: string = ''

  if (screenActive === 'AcademyMatrix' || screenActive === 'ModulesPresent') {
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

  const readModulesConnectionInput: ReadModulesConnectionInputType = {
    first,
    offset,
    searchIn: [
      'capture',
      'contentID',
      'creatorID',
      'description',
      'objections.capture',
      'profileID',
      'questions.capture',
      'summary.capture',
      'summary.text',
    ],
    sort: { prop: 'dateCreated', direction: -1 },
    isActive: true,
  }

  if (learnerUserID) readModulesConnectionInput.learnerUserID = learnerUserID
  if (modulesSearch) {
    readModulesConnectionInput.searchPhrase = modulesSearch
    readModulesConnectionInput.operators = { searchPhrase: 'or' }
  }
  if (operators) readModulesConnectionInput.operators = operators
  if (!!creatorIDs?.length) readModulesConnectionInput.creatorIDs = creatorIDs
  if (!!moduleIDs?.length) {
    readModulesConnectionInput.moduleIDs = moduleIDs
    readModulesConnectionInput.first = 0
    readModulesConnectionInput.offset = moduleIDs.length + 1
    readModulesConnectionInput.operators = {
      ...readModulesConnectionInput.operators,
      moduleID: 'and',
    }
  }
  if (isWithinModuleIDs) {
    const modulesIDsFromModules = modules.map((module: ModuleType) => module.moduleID)
    readModulesConnectionInput.moduleIDs = modulesIDsFromModules
    readModulesConnectionInput.first = 0
    readModulesConnectionInput.offset = modulesIDsFromModules.length + 1
    readModulesConnectionInput.operators = {
      ...readModulesConnectionInput.operators,
      moduleID: 'and',
    }
  }
  if (!!tagsPick?.length) {
    readModulesConnectionInput.tagsPick = tagsPick
    readModulesConnectionInput.operators = { searchPhrase: 'or', tagPick: 'and' }
  }
  if (!!tagsOmit?.length) {
    readModulesConnectionInput.tagsOmit = tagsOmit
    readModulesConnectionInput.operators = { searchPhrase: 'or', tagPick: 'and' }
  }

  console.info('getModulesSaga [109]', {
    readModulesConnectionInput,
    modulesSearchApplied,
    tagsSearchForModules,
  })

  try {
    if (isLoaderOverlay) yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

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

    if (isLoaderOverlay) yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('getModulesSaga [77] ERROR', `${error.name}: ${error.message}`)
  }
}

export const getModules = withDebounce(getModulesGenerator, 500)

export default function* getModulesSaga() {
  yield takeEvery([actionAsync.GET_MODULES.REQUEST().type], getModules)
}
