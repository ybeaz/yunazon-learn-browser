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
        Light: 'rgba(32, 32, 32, 0.7)',
        Dark: 'rgba(255, 255, 255, 0.7)',
      },
      colorFirstDarker: {
        Light: 'rgba(32, 32, 32, 0.8)',
        Dark: 'rgba(255, 255, 255, 0.8)',
      },
      colorFirst: {
        Light: 'rgba(32, 32, 32, 0.9)',
        Dark: 'rgba(255, 255, 255, 0.9)',
      },
      colorFirstLighter: {
        Light: 'rgba(32, 32, 32, 0.8)',
        Dark: 'rgba(255, 255, 255, 0.8)',
      },
      colorModalBackground: {
        Light: 'rgba(32, 32, 32, 0.4)',
        Dark: 'rgba(0, 0, 0, 0.4)',
      },

      colorSecondDacker: {
        Light: 'rgba(255, 255, 255, 0.8)',
        Dark: 'rgba(32, 32, 32, 0.8)',
      },
      colorSecond: {
        Light: 'rgba(255, 255, 255, 1)',
        Dark: 'rgba(32, 32, 32, 1)',
      },
      colorSecondLighter2: {
        Light: 'rgba(255, 255, 255, 0.9)',
        Dark: 'rgba(32, 32, 32, 0.9)',
      },
      colorSecondLighter3: {
        Light: 'rgba(255, 255, 255, 0.8)',
        Dark: 'rgba(32, 32, 32, 0.8)',
      },
      colorSecondLighter4: {
        Light: 'rgba(255, 255, 255, 0.7)',
        Dark: 'rgba(32, 32, 32, 0.7)',
      },

      colorActive: {
        Light: 'rgba(56, 94, 182, 1)',
        Dark: 'rgba(56, 94, 182, 1)',
      },
      colorActiveDacker: {
        Light: 'rgba(22, 37, 61, 1)',
        Dark: 'rgba(22, 37, 61, 1)',
      },
      colorBoxes: {
        Light: '',
        Dark: 'rgba(62, 166, 255, 1)',
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
