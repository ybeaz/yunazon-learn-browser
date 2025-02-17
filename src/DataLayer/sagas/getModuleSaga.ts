import { takeEvery, delay, select, put, call } from 'redux-saga/effects'

import { RootStoreType } from '../../Interfaces'
import { QueryReadModulesArgs, ModuleType, AcademyPresentCaseEnumType } from 'yourails_common'
import { ActionReduxType } from 'yourails_common'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType, FragmentEnumType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getPreparedModules } from 'yourails_common'
import { getLocalStorageReadKeyObj } from 'yourails_common'
import { getCheckedModulesAnswered } from 'yourails_common'
import { withDebounce } from 'yourails_common'
import { getSizeWindow } from 'yourails_common'
import { getModuleByModuleID } from 'yourails_common'
import { getParsedUrlQueryBrowserApi } from 'yourails_common'
import { waitForStoreDataSaga } from './waitForStoreDataSaga'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'
import {
  getReplacedArrObjsByPropNameVal,
  GetReplacedArrObjsByPropNameValParamsType,
} from 'yourails_common'
import { readModulesConnection } from './readModulesConnectionSaga'

function* getModuleGenerator(params: ActionReduxType | any): Iterable<any> {
  const moduleID = params?.data?.moduleID

  const stateSelected: RootStoreType | any = yield select((state: RootStoreType) => state)
  const { modules } = stateSelected

  let modulesNext: ModuleType[] = []
  let caseScenario = AcademyPresentCaseEnumType['moduleFirstLoading']

  const jsonModule = (window as any)?.__DATA_YOURAILS__?.jsonModule

  const modulesInProgress = getLocalStorageReadKeyObj('modulesInProgress') || []

  let moduleInProgres = null
  if (modulesInProgress && modulesInProgress.length)
    moduleInProgres = getModuleByModuleID(
      {
        moduleID,
        modules: modulesInProgress,
      },
      { parentFunction: 'getModuleGenerator' }
    )

  const moduleIDInProgres = moduleInProgres && moduleInProgres.moduleID

  /* Case: use moduleInProgress from the localStorage */
  if (modulesInProgress && modulesInProgress.length && moduleIDInProgres) {
    modulesNext = modulesInProgress

    caseScenario = AcademyPresentCaseEnumType['moduleInProgress']
    const isAnswered = getCheckedModulesAnswered(modulesNext)
    if (isAnswered) caseScenario = AcademyPresentCaseEnumType['moduleCompleted']
  } else if (jsonModule && jsonModule?.moduleID === moduleID) {
    modulesNext = getPreparedModules([jsonModule])
  } else {
    /* Case: initial loading */
    const variables: QueryReadModulesArgs = {
      readModulesInput: [{ moduleID }],
    }

    const readModules: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: ResolveGraphqlEnumType['readModules'],
        fragmentName: FragmentEnumType['ModuleTypeStandard'],
      },
      {
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    modulesNext = getPreparedModules(readModules)
  }

  const getReplacedArrObjsByPropNameValParams: GetReplacedArrObjsByPropNameValParamsType<any> = {
    arrObjs: modules,
    objIn: modulesNext[0],
    propName: 'moduleID',
  }
  const modulesNext2 = getReplacedArrObjsByPropNameVal(getReplacedArrObjsByPropNameValParams)

  yield put(actionSync.SET_MODULE_ID_ACTIVE({ moduleID }))

  yield put(actionSync.SET_MODULES(modulesNext2))
  if (
    caseScenario === AcademyPresentCaseEnumType['moduleInProgress'] ||
    caseScenario === AcademyPresentCaseEnumType['moduleCompleted']
  ) {
    yield put(actionSync.TOGGLE_START_MODULE(true))

    if (caseScenario === AcademyPresentCaseEnumType['moduleCompleted']) {
      const data = [{ childName: 'QuestionScores', isActive: true, childProps: {} }]
      yield put(actionSync.SET_MODAL_FRAMES(data))
    }
  }

  const { width } = getSizeWindow()
  if (width <= 480) {
    yield put(actionSync.CHANGE_NUM_QUESTIONS_IN_SLIDE(1))
  }

  const queryUrl = getParsedUrlQueryBrowserApi()

  if (JSON.stringify(queryUrl) !== '{}' && !modules.length) {
    yield call(waitForStoreDataSaga, { path: 'authAwsCognitoUserData.sub', interval: 50 })
    yield call(readModulesConnection, {
      data: { isAddingModules: true, moduleID },
    })
  }
}

export const getModule = withDebounce(
  withTryCatchFinallySaga(getModuleGenerator, {
    optionsDefault: { funcParent: 'getModuleSaga' },
    resDefault: [],
  }),
  500
)

export default function* getModuleSaga() {
  yield takeEvery([actionAsync.GET_MODULE.REQUEST().type], getModule)
}
