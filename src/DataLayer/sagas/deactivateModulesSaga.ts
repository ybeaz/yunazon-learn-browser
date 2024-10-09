import { takeEvery, put, call } from 'redux-saga/effects'

import { MutationDeactivateModulesArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_communication_layer'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getModules } from './getModulesSaga'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

function* deactivateModulesGenerator(params: ActionReduxType | any): Iterable<any> {
  const {
    data: { modulesIDs },
  } = params

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables: MutationDeactivateModulesArgs = {
      deactivateModulesIdsInput: modulesIDs,
    }

    const deactivateModules: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: ResolveGraphqlEnumType['deactivateModules'],
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    yield call(getModules)

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
    yield put(
      actionSync.SET_MODAL_FRAMES({
        childName: 'ConfirmationYesNoBodyYrl',
        isActive: false,
      })
    )
  } catch (error: any) {
    console.info('deactivateModules [41] ERROR', `${error.name}: ${error.message}`)
  }
}

export const deactivateModules = withDebounce(deactivateModulesGenerator, 500)

export default function* deactivateModulesSaga() {
  yield takeEvery([actionAsync.DEACTIVATE_MODULES.REQUEST().type], deactivateModules)
}
