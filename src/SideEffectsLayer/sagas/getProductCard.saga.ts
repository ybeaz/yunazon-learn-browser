import axios from 'axios'
import { takeEvery, put, select } from 'redux-saga/effects'

import * as action from '../../DataLayer/index.action'
import { getProductCardConnector } from '../../ComminicationLayer/getProductCard.connector'

function* getProductCard(payload) {
  const {
    data: { variables },
  } = payload
  // const { user } = yield select(store => store)
  // console.info('getProductCard [9]', { variables })

  try {
    const server = 'remote'
    const user = { webToken: '' }
    const { method, url, payloadGql, options } = getProductCardConnector({
      server,
      variables,
      user,
    })

    const {
      data: {
        data: { getEcomAssets: ecomAssets },
      },
    } = yield axios[method](url, payloadGql, options)

    yield put({ type: action.GET_PRODUCT_CARD.SUCCESS, data: ecomAssets })
  } catch (error) {
    console.info('getProductCard [31]', error.name + ': ' + error.message)
  }
}

export default function* getProductCardWatcher() {
  yield takeEvery([action.GET_PRODUCT_CARD.REQUEST], getProductCard)
}
