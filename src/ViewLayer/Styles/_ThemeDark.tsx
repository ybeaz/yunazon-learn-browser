import React from 'react'
import less from 'less'

const lessCode = require('./themeDark.less')
less.refresh(true)
less.refreshStyles()

less.render(lessCode, {}, function (error, output) {
  if (!error) {
    document.getElementById('root').innerHTML = output.css
  } else document.getElementById('lesscode').innerHTML = '<span style="color:red">' + error + '</span>'
})

export const themeDark = {
  colorFirstDarker2: 'rgba(255, 255, 255, 0.8)',
  colorFirstDarker: 'rgba(255, 255, 255, 0.9)',
  colorFirst: 'rgb(255, 255, 255)',

  colorSecondDacker: 'rgb(24, 24, 24)',
  colorSecond: 'rgb(32, 32, 32)',
  colorSecondLighter2: 'rgb(50, 50, 50)',
  colorSecondLighter3: 'rgb(55, 55, 55)',
  colorSecondLighter4: 'rgb(111, 111, 111)',

  colorActive: 'rgb(56, 94, 182)',
  colorActiveDacker: 'rgb(22, 37, 61)',
  colorBoxes: 'rgb(62, 166, 255)',
}

// body {
//   display: flex;
//   color: @colorFirstDarker;
//   background-color: @colorSecond;

//   background: lightblue;
// }

interface IThemeDark {
  (children: any): JSX.Element
}

export const ThemeDark: IThemeDark = props => {
  less.refresh(true)
  less.refreshStyles()
  return <div className='ThemeDark'>{props.children}</div>
}
