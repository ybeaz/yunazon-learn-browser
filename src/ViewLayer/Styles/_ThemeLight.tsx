import React from 'react'
import less from 'less'

const lessCode = require('./themeLight.less')
less.refresh(true)
less.refreshStyles()
less.render(lessCode, {}, function (error, output) {
  if (!error) {
    document.getElementById('root').innerHTML = output.css
  } else document.getElementById('lesscode').innerHTML = '<span style="color:red">' + error + '</span>'
})

export const themeLight = {
  colorFirstDarker2: 'rgb(16, 16, 16)',
  colorFirstDarker: 'rgb(24, 24, 24)',
  colorFirst: 'rgb(32, 32, 32)',

  colorSecondDacker: 'rgba(255, 255, 255, 0.9)',
  colorSecond: 'rgb(255, 255, 255)',
  colorSecondLighter2: 'rgb(255, 255, 255)',
  colorSecondLighter3: 'rgb(55, 55, 55)',
  colorSecondLighter4: 'rgb(111, 111, 111)',

  colorActive: 'rgb(56, 94, 182)',
  colorActiveDacker: 'rgb(22, 37, 61)',
  colorBoxes: 'rgb(62, 166, 255)',
}

// body {
//   display: flex,
//   color: @colorFirstDarker,
//   // background-color: @colorSecond,

//   background: green,
// }

interface IThemeLight {
  (children: any): JSX.Element
}

export const ThemeLight: IThemeLight = props => {
  less.refresh(true)
  less.refreshStyles()
  return <div className='ThemeLight'>{props.children}</div>
}
