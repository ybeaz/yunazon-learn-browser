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
  const isLoaderOverlay = params?.data?.isLoaderOverlay
  const operators = params?.data?.operators
  const moduleIDs = params?.data?.moduleIDs

  yield delay(1000)

  const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)

  const {
    componentsState: {
      screenActive,
      pagination: {
        pageModules: { first, offset },
      },
    },
    forms: { modulesSearch, tagsPick, tagsOmit },
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

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
    operators: { searchPhrase: 'or', tagPick: 'and' },
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
  if (modulesSearch) readModulesConnectionInput.searchPhrase = modulesSearch
  if (operators) readModulesConnectionInput.operators = operators
  if (!!creatorIDs?.length) readModulesConnectionInput.creatorIDs = creatorIDs
  if (!!moduleIDs?.length) readModulesConnectionInput.moduleIDs = moduleIDs
  if (!!tagsPick?.length) readModulesConnectionInput.tagsPick = tagsPick
  if (!!tagsOmit?.length) readModulesConnectionInput.tagsOmit = tagsOmit

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
