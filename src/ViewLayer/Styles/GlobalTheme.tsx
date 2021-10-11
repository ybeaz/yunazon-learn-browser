import React from 'react'
import { ThemeProvider } from 'styled-components'

import { getCreatedGlobalStyle } from './getCreatedGlobalStyle'

interface GlobalThemeArgs {
  children: any
}

export const GlobalTheme: React.FunctionComponent<GlobalThemeArgs> = (
  props: GlobalThemeArgs
): JSX.Element => {
  const getThemeRemotely: Function = () => {
    try {
      document.getElementsByTagName('body')[0].style.display = 'none'
      // require(`./themeDark.less`)
      require(`./index.style.less`)
      document.getElementsByTagName('body')[0].style.display = 'flex'
    } catch (error) {
      console.info('RouterScreensConfig [115]', { msg: error.message })
    }
  }

  getThemeRemotely()

  const globalTheme = {
    colors: {
      colorFirstDarker2: {
        Light: 'rgb(16, 16, 16)',
        Dark: 'rgba(255, 255, 255, 0.8)',
      },
      colorFirstDarker: {
        Light: 'rgb(24, 24, 24)',
        Dark: 'rgba(255, 255, 255, 0.9)',
      },
      colorFirst: {
        Light: 'rgb(32, 32, 32)',
        Dark: 'rgb(255, 255, 255)',
      },

      colorSecondDacker: {
        Light: 'rgba(255, 255, 255, 0.9)',
        Dark: 'rgb(24, 24, 24)',
      },
      colorSecond: {
        Light: 'rgb(255, 255, 255)',
        Dark: 'rgb(32, 32, 32)',
      },
      colorSecondLighter2: {
        Light: 'rgb(255, 255, 255)',
        Dark: 'rgb(50, 50, 50)',
      },
      colorSecondLighter3: {
        Light: 'rgb(55, 55, 55)',
        Dark: 'rgb(55, 55, 55)',
      },
      colorSecondLighter4: {
        Light: 'rgb(111, 111, 111)',
        Dark: 'rgb(111, 111, 111)',
      },

      colorActive: {
        Light: 'rgb(56, 94, 182)',
        Dark: 'rgb(56, 94, 182)',
      },
      colorActiveDacker: {
        Light: 'rgb(22, 37, 61)',
        Dark: 'rgb(22, 37, 61)',
      },
      colorBoxes: {
        Light: '',
        Dark: 'rgb(62, 166, 255)',
      },
      colorTest: {
        Light: 'black',
        Dark: 'grey',
      },
      backgroundTest: {
        Light: 'lightgreen',
        Dark: 'lightblue',
      },
    },
  }

  const GlobalStyle = getCreatedGlobalStyle()

  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  )
}
