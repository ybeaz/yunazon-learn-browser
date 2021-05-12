import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import { store } from './DataLayer/store'
import { RouterScreensConfig } from './RouterScreensConfig'

export const initializeBrowserApp = () => {
  const rootElement = document.getElementById('root')

  ReactDOM.hydrate(
    <Provider store={store}>
      <RouterScreensConfig />
    </Provider>,
    rootElement
  )
}
