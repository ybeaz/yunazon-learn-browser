import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './index.reducer'
import indexSaga from '../SideEffectsLayer/index.saga'

const configureStore: Function = (rootReducer): Store => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares: any[] = [thunk, sagaMiddleware]
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  )
  sagaMiddleware.run(indexSaga)
  return store
}

export const store = configureStore(rootReducer)
