import { takeLatest, takeEvery, put, call } from 'redux-saga/effects'

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
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { withLoaderWrapperSaga } from './withLoaderWrapperSaga'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

function* getModuleGenerator(params: ActionReduxType | any): Iterable<any> {
  const moduleID = params?.data?.moduleID

  let modulesNext: ModuleType[] = []
  let caseScenario = AcademyPresentCaseEnumType['moduleFirstLoading']

  try {
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
  } catch (error: any) {
    console.info('getModule [95] ERROR', `${error.name}: ${error.message}`)
  }
}

export const getModule = withDebounce(
  withTryCatchFinallySaga(withLoaderWrapperSaga(getModuleGenerator), {
    optionsDefault: { funcParent: 'readTagsConnectionSaga' },
    resDefault: [],
  }),
  500
)

export default function* getModuleSaga() {
  yield takeEvery([actionAsync.GET_MODULE.REQUEST().type], getModule)
}
