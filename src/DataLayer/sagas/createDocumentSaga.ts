import { takeEvery, put, select } from 'redux-saga/effects'

import { MutationCreateDocumentsArgs } from '../../@types/GraphqlTypes'
import { ActionReduxType } from '../../Interfaces'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../../../yourails_communication_layer'
import { getHeadersAuthDict } from '../../Shared/getHeadersAuthDict'
import { getLocalStorageDeletedCourse } from '../../Shared/getLocalStorageDeletedCourse'
import { selectGraphqlHttpClientFlag } from '../../FeatureFlags/'

function* createDocument(params: ActionReduxType | any): Iterable<any> {
  const {
    data: {
      capture,
      contentID,
      courseID,
      description,
      meta,
      moduleID,
      userEmail,
      nameFirst,
      nameMiddle,
      nameLast,
      navigate,
    },
  } = params

  const stateSelected: RootStoreType | any = yield select(
    (state: RootStoreType) => state
  )
  const {
    authAwsCognitoUserData: { sub },
  } = stateSelected as RootStoreType

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables: MutationCreateDocumentsArgs = {
      createDocumentsInput: [
        {
          courseID: courseID || '000000000000',
          profileID: sub || '000000000000',
          moduleIDs: [moduleID],
          contentIDs: [contentID],
          isActive: true,
          capture,
          description,
          meta,
          profileProps: {
            nameFirst: nameFirst,
            nameMiddle: nameMiddle,
            nameLast: nameLast,
          },
          language: 'en',
        },
      ],
    }

    const createDocuments: any = yield getResponseGraphqlAsync(
      {
        variables,
        resolveGraphqlName: 'createDocuments',
      },
      {
        ...getHeadersAuthDict(),
        clientHttpType: selectGraphqlHttpClientFlag(),
        timeout: 5000,
      }
    )

    yield put(actionSync.ADD_DOCUMENT(createDocuments[0]))

    getLocalStorageDeletedCourse(courseID)

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))

    navigate(createDocuments[0]?.pathName)
  } catch (error: any) {
    console.info('createDocument [82] ERROR', `${error.name}: ${error.message}`)
  }
}

export default function* addDocumentSaga() {
  yield takeEvery([actionAsync.CREATE_DOCUMENT.REQUEST().type], createDocument)
}
