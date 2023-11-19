import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import { store } from './DataLayer/store'
import { GlobalTheme } from './ViewLayer/Styles/GlobalTheme'
import { RouterScreensConfig } from './Navigation/NavigationWeb'

export const initializeBrowserApp = () => {
  const rootElement = document.getElementById('root')

  // @ts-expect-error
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <Provider store={store}>
        <GlobalTheme>
          <RouterScreensConfig />
        </GlobalTheme>
      </Provider>
    </StrictMode>
  )
}
