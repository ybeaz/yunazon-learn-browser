import { takeEvery, put, call } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getDocuments } from './getDocuments.saga'
import { withDebounce } from '../../Shared/withDebounce'

function* deactivateDocumentsGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  const {
    data: { documentsIDs },
  } = params

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables = {
      deactivateDocumentsIdsInput: documentsIDs,
    }

    const deactivateDocuments: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'deactivateDocuments',
      },
      getHeadersAuthDict()
    )

    yield call(getDocuments)

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('deactivateDocuments [40]', error.name + ': ' + error.message)
  }
}

export const deactivateDocuments = withDebounce(
  deactivateDocumentsGenerator,
  500
)

export default function* deactivateDocumentsSaga() {
  yield takeEvery(
    [actionAsync.DEACTIVATE_DOCUMENTS.REQUEST().type],
    deactivateDocuments
  )
}
