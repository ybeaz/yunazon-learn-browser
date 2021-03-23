import { all, fork } from 'redux-saga/effects'

import getGlobalVarsWatcher from './sagas/getGlobalVars.saga'
import getProductCardWatcher from './sagas/getProductCard.saga'

export default function* indexSaga() {
  getGlobalVarsWatcher
  yield all([fork(getGlobalVarsWatcher), fork(getProductCardWatcher)])
}
