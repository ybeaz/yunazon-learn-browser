import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import { store } from './DataLayer/store'
import { RouterProvider } from './ViewLayer/Containers/RouterProvider.container'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider />
  </Provider>,
  rootElement
)
