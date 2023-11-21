import { takeEvery, put, select } from 'redux-saga/effects'

import { RootStoreType } from '../../Interfaces/RootStoreType'
import { CreateDocumentInputType } from '../../@types/GraphqlTypes'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'

function* createDocument(dataInput: any): Iterable<any> {
  const {
    data: {
      capture,
      contentID,
      courseID,
      description,
      meta,
      moduleID,
      userEmail,
      userNameFirst,
      userNameMiddle,
      userNameLast,
    },
  } = dataInput

  // @ts-expect-error
  const { language = 'en' } = yield select((store: RootStoreType) => store)

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables: {
      createDocumentInput: CreateDocumentInputType
    } = {
      createDocumentInput: {
        courseID,
        capture,
        description,
        meta,
        moduleIDs: [moduleID],
        contentIDs: [contentID],
        userName: {
          firstName: userNameFirst,
          middleName: userNameMiddle,
          lastName: userNameLast,
        },
        lang: language,
      },
    }

    console.info('createDocument.saga [61]', { variables })

    const createDocument: any = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'createDocument',
    })

    console.info('createDocument.saga [84]', { createDocument })

    yield put(actionSync.ADD_DOCUMENT(createDocument))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('createDocument [40]', error.name + ': ' + error.message)
  }
}

export default function* addDocumentSaga() {
  yield takeEvery([actionAsync.CREATE_DOCUMENT.REQUEST().type], createDocument)
}
