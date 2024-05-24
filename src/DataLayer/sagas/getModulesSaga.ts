import { takeEvery, put, select, delay } from 'redux-saga/effects'

import {
  ReadModulesConnectionInputType,
  QueryReadModulesConnectionArgs,
} from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { ModuleType } from '../../@types/GraphqlTypes'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync, FragmentEnumType } from '../../../../yourails_communication_layer'

import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'
import { getMappedConnectionToItems } from '../../Shared/getMappedConnectionToItems'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { getUserProfileData } from '../../Shared/getUserProfileData'

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

  if ((screenActive === 'MyModules' || screenActive === 'MyDocuments') && !sub) return

  const { profileIDs, learnerUserID } = getUserProfileData({ sub, screenActive, profiles })

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
  if (!!profileIDs?.length) {
    readModulesConnectionInput.creatorIDs = profileIDs
    readModulesConnectionInput.operators = { creatorID: 'and' }
  }
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

  try {
    if (isLoaderOverlay) yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables: QueryReadModulesConnectionArgs = {
      readModulesConnectionInput,
    }

    const readModulesConnection: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'readModulesConnection',
        fragmentName: FragmentEnumType['ModuleTypeForMartix'],
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 10000,
      }
    )

    let modulesNext: any = getChainedResponsibility(readModulesConnection).exec(
      getMappedConnectionToItems,
      { printRes: false }
    ).result

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
