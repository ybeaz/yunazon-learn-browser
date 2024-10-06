import { takeLatest, takeEvery, put, call } from 'redux-saga/effects'

import { QueryReadModulesArgs, ModuleType, AcademyPresentCaseEnumType } from '../../@types/'
import { ActionReduxType } from '../../Interfaces'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType, FragmentEnumType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getPreparedModules } from '../../Shared/getPreparedModules'
import { getLocalStorageReadKeyObj } from '../../Shared/getLocalStorageReadKeyObj'
import { getCheckedModulesAnswered } from '../../Shared/getCheckedModulesAnswered'
import { withDebounce } from '../../Shared/withDebounce'
import { getSizeWindow } from '../../Shared/getSizeWindow'
import { getModuleByModuleID } from '../../Shared/getModuleByModuleID'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

function* getModuleGenerator(params: ActionReduxType | any): Iterable<any> {
  const moduleID = params?.data?.moduleID

  let modulesNext: ModuleType[] = []
  let caseScenario = AcademyPresentCaseEnumType['moduleFirstLoading']

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

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

    yield put(actionSync.SET_MODULE_ID_ACTIVE({ moduleID }))

    yield put(actionSync.SET_MODULES(modulesNext))

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

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('getModule [95] ERROR', `${error.name}: ${error.message}`)
  }
}

export const getModule = withDebounce(getModuleGenerator, 500)

export default function* getModuleSaga() {
  yield takeEvery([actionAsync.GET_MODULE.REQUEST().type], getModule)
}
