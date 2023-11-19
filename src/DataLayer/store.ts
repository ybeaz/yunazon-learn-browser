import { Store } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import { refreshAuthMiddleware } from './middlewares/refreshAuthMiddleware'
import { indexReducer, IndexReducerType } from './index.reducer'
import indexSaga from './index.saga'

interface CreateStoreType {
  (indexReducer: IndexReducerType): Store
}

const createStore: CreateStoreType = indexReducer2 => {
  const sagaMiddleware = createSagaMiddleware()
  const store2 = configureStore({
    reducer: indexReducer2,
    middleware: [thunk, sagaMiddleware, refreshAuthMiddleware],
  })
  sagaMiddleware.run(indexSaga)
  return store2
}

export const store = createStore(indexReducer)
