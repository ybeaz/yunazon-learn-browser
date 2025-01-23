import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'

import { store } from './DataLayer/store'
import { GlobalTheme } from './ViewLayer/Styles/GlobalTheme'
import { RouterScreensConfig } from './Navigation/NavigationWeb'

export const initializeBrowserApp = () => {
  const rootElement = document.getElementById('root')

  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <HelmetProvider>
        <Provider store={store}>
          <GlobalTheme>
            <RouterScreensConfig />
          </GlobalTheme>
        </Provider>
      </HelmetProvider>
    </StrictMode>
  )
}
