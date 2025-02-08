import { takeEvery, put, select, delay } from 'redux-saga/effects'

import { ReadModulesConnectionInputType, QueryReadModulesConnectionArgs } from 'yourails_common'
import { ActionReduxType } from 'yourails_common'
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
import { getSortedArrayEntityTags } from 'yourails_common'
import {
  getReplacedArrObjsByPropNameVal,
  GetReplacedArrObjsByPropNameValParamsType,
} from 'yourails_common'

export function* readModulesConnectionGenerator(params: ActionReduxType | any): Iterable<any> {
  const isAddingModules = params?.data?.isAddingModules || false
  const moduleID = params?.data?.moduleID
  const operators = params?.data?.operators
  const moduleIDs = params?.data?.moduleIDs

  yield delay(500)

  const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)

  const {
    componentsState: {
      screenActive,
      modulesSearchApplied,
      pagination: {
        pageModules: { first, offset },
      },
      tagsPick: tagsPickState,
      tagsOmit: tagsOmitState,
    },
    modules,
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  let profiles = stateSelected.profiles

  if ((screenActive === 'MyModules' || screenActive === 'MyDocuments') && !sub) return

  const { profileIDs, learnerUserID } = getUserProfileData({ sub, screenActive, profiles })

  const readModulesConnectionInput: ReadModulesConnectionInputType = {
    first,
    offset,
    searchIn: [
      'contentID',
      'creatorID',
      'profileID',
      'capture',
      'description',
      'summary.capture',
      'article.capture',
      'tags',
      // 'summary.text',
      // 'questions.capture',
      // 'objections.capture',
    ],
    sort: { prop: 'dateCreated', direction: -1 },
    isActive: true,
  }

  if (learnerUserID) readModulesConnectionInput.learnerUserID = learnerUserID
  if (modulesSearchApplied) {
    readModulesConnectionInput.searchPhrase = modulesSearchApplied
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
  if (tagsPickState.length) {
    readModulesConnectionInput.tagsPick = tagsPickState
    readModulesConnectionInput.operators = { searchPhrase: 'or', tagPick: 'and' }
  }
  if (tagsOmitState.length) {
    readModulesConnectionInput.tagsOmit = tagsOmitState
    readModulesConnectionInput.operators = { searchPhrase: 'or', tagPick: 'and' }
  }

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

  let modulesNext: any = getChainedResponsibility(readModulesConnection)
    .exec(getMappedConnectionToItems, { printRes: false })
    .exec(getSortedArrayEntityTags).result

  let modulesNext2 = modulesNext
  if (isAddingModules && moduleID) {
    const getReplacedArrObjsByPropNameValParams: GetReplacedArrObjsByPropNameValParamsType<any> = {
      arrObjs: modulesNext,
      objIn: modules[0],
      propName: 'moduleID',
      propValue: moduleID,
    }
    modulesNext2 = getReplacedArrObjsByPropNameVal(getReplacedArrObjsByPropNameValParams)
  }

  yield put(actionSync.SET_MODULES(modulesNext2))

  const pageInfo = readModulesConnection?.pageInfo
  yield put(
    actionSync.SET_PAGE_INFO({
      paginationName: PaginationNameEnumType['pageModules'],
      ...pageInfo,
    })
  )
}

export const readModulesConnection = withDebounce(
  withTryCatchFinallySaga(withLoaderWrapperSaga(readModulesConnectionGenerator), {
    optionsDefault: { funcParent: 'readModulesConnectionSaga' },
    resDefault: [],
  }),
  500
)

export default function* readModulesConnectionSaga() {
  yield takeEvery([actionAsync.READ_MODULES_CONNECTION.REQUEST().type], readModulesConnection)
}
