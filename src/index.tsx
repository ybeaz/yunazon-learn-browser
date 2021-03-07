import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import { store } from './DataLayer/store'
import { PlayAndSubscribeScreen } from './ViewLayer/Screens/PlayAndSubscribe.screen'
// const PlayAndSubscribeScreen = () => {
//   return <div>ScreenPlayAndSubscribe :-)</div>
// }

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <PlayAndSubscribeScreen />
  </Provider>,
  rootElement
)
