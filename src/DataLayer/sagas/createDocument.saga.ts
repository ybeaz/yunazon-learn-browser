import { takeEvery, put, select } from 'redux-saga/effects'

import { ActionReduxType } from '../../Interfaces'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { CreateDocumentInputType } from '../../@types/GraphqlTypes'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'

/*
{
        userID: sub || '000000',
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
        language,
      }
*/

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
      userNameFirst,
      userNameMiddle,
      userNameLast,
    },
  } = params

  console.info('createDocument.saga [43]', {
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
  })

  const {
    // @ts-expect-error
    authAwsCognitoUserData: { sub },
  } = yield select((store: RootStoreType) => store)

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))

    const variables: {
      createDocumentsInput: CreateDocumentInputType[]
    } = {
      createDocumentsInput: [
        {
          courseID,
          profileID: sub || '000000',
          moduleIDs: [moduleID],
          contentIDs: [contentID],
          isActive: true,
          capture,
          description,
          meta,
          profileProps: {
            nameFirst: userNameFirst,
            nameMiddle: userNameMiddle,
            nameLast: userNameLast,
          },
          language: 'en',
        },
      ],
    }

    const createDocuments: any = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'createDocuments',
    })

    yield put(actionSync.ADD_DOCUMENT(createDocuments[0]))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('createDocument [40]', error.name + ': ' + error.message)
  }
}

export default function* addDocumentSaga() {
  yield takeEvery([actionAsync.CREATE_DOCUMENT.REQUEST().type], createDocument)
}
