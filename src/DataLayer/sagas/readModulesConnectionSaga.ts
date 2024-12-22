import { takeEvery, put, select, delay } from 'redux-saga/effects'

import { ReadModulesConnectionInputType, QueryReadModulesConnectionArgs } from 'yourails_common'
import { ActionReduxType } from 'yourails_common'
import { ModuleType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from 'yourails_common'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType, FragmentEnumType } from 'yourails_common'

import { getChainedResponsibility } from 'yourails_common'
import { getMappedConnectionToItems } from 'yourails_common'
import { PaginationNameEnumType } from 'yourails_common'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { withDebounce } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { getUserProfileData } from 'yourails_common'
import { withLoaderWrapperSaga } from './withLoaderWrapperSaga'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

export function* readModulesConnectionGenerator(params: ActionReduxType | any): Iterable<any> {
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
    queryUrl,
    modules,
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  const tagsPickUrl = queryUrl?.tagsPick || null

  const tagsPick = tagsSearchForModules
    ? [tagsSearchForModules]
    : tagsPickUrl
      ? [tagsPickUrl]
      : tagsPickIn

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
    const variables: QueryReadModulesConnectionArgs = {
      readModulesConnectionInput,
    }

    const readModulesConnection: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: ResolveGraphqlEnumType['readModulesConnection'],
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

    if (tagsPick.length && tagsPick[0])
      yield put(
        actionSync.SET_COMPONENTS_STATE({
          componentsStateProp: 'tagsSearchForModules',
          value: tagsPick[0],
        })
      )

    const pageInfo = readModulesConnection?.pageInfo
    yield put(
      actionSync.SET_PAGE_INFO({
        paginationName: PaginationNameEnumType['pageModules'],
        ...pageInfo,
      })
    )
  } catch (error: any) {
    console.info('readModulesConnectionSaga [77] ERROR', `${error.name}: ${error.message}`)
  }
}

export const readModulesConnection = withDebounce(
  withTryCatchFinallySaga(withLoaderWrapperSaga(readModulesConnectionGenerator), {
    optionsDefault: { funcParent: 'readTagsConnectionSaga' },
    resDefault: [],
  }),
  500
)

export default function* readModulesConnectionSaga() {
  yield takeEvery([actionAsync.READ_MODULES_CONNECTION.REQUEST().type], readModulesConnection)
}
