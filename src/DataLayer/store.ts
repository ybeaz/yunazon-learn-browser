import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './index.reducer'
import indexSaga from './index.saga'

const configureStore: Function = (rootReducer2): Store => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares: any[] = [thunk, sagaMiddleware]
  const store2 = createStore(
    rootReducer2,
    composeWithDevTools(applyMiddleware(...middlewares))
  )
  sagaMiddleware.run(indexSaga)
  return store2
}

export const store = configureStore(rootReducer)
