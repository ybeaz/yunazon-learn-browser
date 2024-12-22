import { takeEvery, put, call } from 'redux-saga/effects'

import { MutationDeactivateModulesArgs } from 'yourails_common'
import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'
import { getHeadersAuthDict } from 'yourails_common'
import { readModulesConnection } from './readModulesConnectionSaga'
import { withDebounce } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { withLoaderWrapperSaga } from './withLoaderWrapperSaga'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

function* deactivateModulesGenerator(params: ActionReduxType | any): Iterable<any> {
  const {
    data: { modulesIDs },
  } = params

  try {
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

    yield call(readModulesConnection)

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

export const deactivateModules = withDebounce(
  withTryCatchFinallySaga(withLoaderWrapperSaga(deactivateModulesGenerator), {
    optionsDefault: { funcParent: 'deactivateModulesSaga' },
    resDefault: [],
  }),
  500
)

export default function* deactivateModulesSaga() {
  yield takeEvery([actionAsync.DEACTIVATE_MODULES.REQUEST().type], deactivateModules)
}
