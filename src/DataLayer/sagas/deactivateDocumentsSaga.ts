import { takeEvery, put, call } from 'redux-saga/effects'

import { MutationDeactivateDocumentsArgs } from 'yourails_common'
import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync, ResolveGraphqlEnumType } from 'yourails_common'
import { getHeadersAuthDict } from 'yourails_common'
import { readDocuments } from './readDocumentsSaga'
import { withDebounce } from 'yourails_common'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'
import { withLoaderWrapperSaga } from './withLoaderWrapperSaga'
import { withTryCatchFinallySaga } from './withTryCatchFinallySaga'

function* deactivateDocumentsGenerator(params: ActionReduxType | any): Iterable<any> {
  const {
    data: { documentsIDs },
  } = params

  const variables: MutationDeactivateDocumentsArgs = {
    deactivateDocumentsIdsInput: documentsIDs,
  }

  const deactivateDocuments: any = yield getResponseGraphqlAsync(
    {
      variables,
      resolveGraphqlName: ResolveGraphqlEnumType['deactivateDocuments'],
    },
    {
      ...getHeadersAuthDict(),
      clientHttpType: selectGraphqlHttpClientFlag(),
      timeout: 5000,
    }
  )

  yield call(readDocuments)

  yield put(
    actionSync.SET_MODAL_FRAMES({
      childName: 'ConfirmationYesNoBodyYrl',
      isActive: false,
    })
  )
}

export const deactivateDocuments = withDebounce(
  withTryCatchFinallySaga(withLoaderWrapperSaga(deactivateDocumentsGenerator), {
    optionsDefault: { funcParent: 'deactivateDocumentsSaga' },
    resDefault: [],
  }),
  500
)

export default function* deactivateDocumentsSaga() {
  yield takeEvery([actionAsync.DEACTIVATE_DOCUMENTS.REQUEST().type], deactivateDocuments)
}
