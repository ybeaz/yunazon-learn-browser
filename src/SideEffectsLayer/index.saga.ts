import { all, fork } from 'redux-saga/effects'

import getContentInfoWatcher from './sagas/getContentInfo.saga'
import getGlobalVarsWatcher from './sagas/getGlobalVars.saga'
import getProductCardWatcher from './sagas/getProductCard.saga'

export default function* indexSaga() {
  yield all([
    fork(getContentInfoWatcher),
    fork(getGlobalVarsWatcher),
    fork(getProductCardWatcher),
  ])
}
