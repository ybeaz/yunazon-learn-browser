import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import { store } from './DataLayer/store'
import { GlobalTheme } from './ViewLayer/Styles/GlobalTheme'
import { RouterScreensConfig } from './RouterScreensConfig'

export const initializeBrowserApp = () => {
  const rootElement = document.getElementById('root')

  ReactDOM.hydrate(
    <StrictMode>
      <Provider store={store}>
        <GlobalTheme>
          <RouterScreensConfig />
        </GlobalTheme>
      </Provider>
    </StrictMode>,
    rootElement
  )
}
