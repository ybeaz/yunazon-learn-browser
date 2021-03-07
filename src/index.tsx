import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { store } from './DataLayer/store'
import { PlayAndSubscribeScreen } from './ViewLayer/Screens/PlayAndSubscribe.screen'
import { Error404Screen } from './ViewLayer/Screens/Error404.screen'

const PAGES = {
  PlayAndSubscribeScreen,
  Error404Screen,
}

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <PlayAndSubscribeScreen />
  </Provider>,
  rootElement
)
