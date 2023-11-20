import { takeEvery, put, select } from 'redux-saga/effects'

import { RootStoreType } from '../../Interfaces/RootStoreType'
import { CreateDocumentInputType } from '../../@types/GraphqlTypes'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { addDocumentConnector } from '../../CommunicationLayer/addDocument.connector'
import { getDetectedEnv } from '../../Shared/getDetectedEnv'
import { getResponseGraphqlAsync } from '../../CommunicationLayer/getResponseGraphqlAsync'

function* addDocument(dataInput: any): Iterable<any> {
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

  console.info('addDocument.saga [22]', dataInput)

  // @ts-expect-error
  const { language = 'en' } = yield select((store: RootStoreType) => store)

  let payload = {
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
  }

  const fragmentName = 'DocumentModelGraphqlAll'
  const { axiosClient, method, params } = addDocumentConnector(
    payload,
    fragmentName
  )

  try {
    yield put(actionSync.TOGGLE_LOADER_OVERLAY(true))
    // const {
    //   data: {
    //     data: { addDocument },
    //   },
    // } = yield axiosClient[method]('', params)

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

    console.info('addDocument.saga [61]', { variables })

    const createDocument: any = yield getResponseGraphqlAsync({
      variables,
      resolveGraphqlName: 'createDocument',
    })

    console.info('addDocument.saga [84]', { createDocument })

    yield put(actionAsync.ADD_DOCUMENT.SUCCESS(createDocument))

    yield put(actionSync.TOGGLE_LOADER_OVERLAY(false))
  } catch (error: any) {
    console.info('addDocument [40]', error.name + ': ' + error.message)
  }
}

export default function* addDocumentSaga() {
  yield takeEvery([actionAsync.ADD_DOCUMENT.REQUEST().type], addDocument)
}
