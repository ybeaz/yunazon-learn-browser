import { all, fork } from 'redux-saga/effects'

import getProductCardWatcher from './sagas/getProductCard.saga'

export default function* indexSaga() {
  yield all([fork(getProductCardWatcher)])
}
