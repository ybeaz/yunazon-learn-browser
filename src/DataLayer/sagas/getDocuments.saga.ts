import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer' // import { getResponseGraphqlAsync } from 'yourails_communication_layer'
// import { getResponseGraphqlAsync } from 'yourails_communication_layer'

import { getChainedResponsibility } from '../../Shared/getChainedResponsibility'
import { getMappedConnectionToItems } from '../../Shared/getMappedConnectionToItems'
import { selectCoursesStageFlag } from '../../FeatureFlags'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { withDebounce } from '../../Shared/withDebounce'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

export function* getDocumentsGenerator(
  params: ActionReduxType | any
): Iterable<any> {
  const stateSelected: RootStoreType | any = yield select(
    (state: RootStoreType) => state
  )
  const {
    authAwsCognitoUserData: { sub },
    componentsState: {
      pagination: {
        pageDocuments: { first, offset },
      },
    },
  } = stateSelected as RootStoreType

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const readDocumentsConnectionInput: any = {
      first,
      offset,
      profileID: sub || '000000',
      stagesPick: selectCoursesStageFlag(),
    }

    const variables = {
      readDocumentsConnectionInput,
    }
    const readDocumentsConnection: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'readDocumentsConnection',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    let documentsNext: any = getChainedResponsibility(
      readDocumentsConnection
    ).exec(getMappedConnectionToItems, { printRes: false }).result

    yield put(actionSync.SET_DOCUMENTS(documentsNext))

    const pageInfo = readDocumentsConnection?.pageInfo
    yield put(
      actionSync.SET_PAGE_INFO({
        paginationName: 'pageDocuments',
        ...pageInfo,
      })
    )

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info(
      'getDocuments.saga [44] ERROR',
      `${error.name}: ${error.message}`
    )
  }
}

export const getDocuments = withDebounce(getDocumentsGenerator, 500)

export default function* getDocumentsSaga() {
  yield takeEvery([actionAsync.GET_DOCUMENTS.REQUEST().type], getDocuments)
}
