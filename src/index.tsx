import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import { store } from './DataLayer/store'

const ScreenPlayAndSubscribe = () => {
  return <div>ScreenPlayAndSubscribe :-)</div>
}

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <ScreenPlayAndSubscribe />
  </Provider>,
  rootElement
)
