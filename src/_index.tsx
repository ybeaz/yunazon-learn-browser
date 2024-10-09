import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'

import { store } from './DataLayer/store'
import { GlobalTheme } from './ViewLayer/Styles/GlobalTheme'
import { RouterScreensConfig } from './Navigation/NavigationWeb'

export const initializeBrowserApp = () => {
  const rootElement = document.getElementById('root')

  // @ts-expect-error
  ReactDOM.createRoot(rootElement).render(<div>Hello World!</div>)
}

// document.getElementById('root').innerHTML = ''
// setTimeout(() => {
//   document.getElementsByTagName('body')[0].style.visibility = 'visible'
// }, 1000)
initializeBrowserApp()
// document.getElementsByTagName('body')[0].style.visibility = 'visible'
