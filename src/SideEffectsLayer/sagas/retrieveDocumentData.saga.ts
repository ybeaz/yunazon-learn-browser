import axios from 'axios'
import { takeLatest, takeEvery, put, select } from 'redux-saga/effects'

import * as action from '../../DataLayer/index.action'
import { retrieveDocumentDataConnector } from '../../ComminicationLayer/retrieveDocumentData.connector'

function* retrieveDocumentData(dataInput) {
  const { data: dataIn } = dataInput

  let payload = {
    courseID: 'yn1gT-sexs0',
    capture: 'Как ведется летоисчисление истории. Жизнь древних людей',
    description: 'test',
    meta: {
      institution: 'Лаборатория YouRails',
      specTitle: 'Преподаватель',
      specName: 'Ческидова Анна',
    },
    moduleIDs: ['yn1gT-sexs0'],
    contentIDs: ['yn1gT-sexs0'],
    userName: 'Ческидов Роман 9',
    userEmail: 't3531350@yahoo.com',
    lang: 'ru',
    env: 'development',
  }

  try {
    const {
      method,
      url,
      data: payloadNext,
      options,
    } = retrieveDocumentDataConnector(payload)
    console.info('retrieveDocumentData.saga [9]', {
      method,
      url,
      options,
      dataIn,
    })
    const {
      data: {
        data: { addDocument },
      },
    } = yield axios[method](url, payloadNext, options)
    console.info('retrieveDocumentData.saga [36]', { addDocument })
    // yield put(action.RETRIEVE_DOCUMENT_DATA.SUCCESS('addDocument'))
  } catch (error) {
    console.info('retrieveDocumentData [40]', error.name + ': ' + error.message)
  }
}

export default function* retrieveDocumentDataWatcher() {
  yield takeEvery(
    [action.RETRIEVE_DOCUMENT_DATA.REQUEST().type],
    retrieveDocumentData
  )
}
