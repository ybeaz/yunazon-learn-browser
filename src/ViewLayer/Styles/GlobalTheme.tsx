import React from 'react'
import { ThemeProvider } from 'styled-components'

import { getCreatedGlobalStyle } from './getCreatedGlobalStyle'

/**
 * @description Component to provide Global theme
 * @link to convert RGB to HSV https://www.rapidtables.com/convert/color/rgb-to-hsl.html
 */

interface GlobalThemeArgs {
  children: any
}

export const GlobalTheme: React.FunctionComponent<GlobalThemeArgs> = (
  props: GlobalThemeArgs
): JSX.Element => {
  const getThemeRemotely: Function = () => {
    try {
      document.getElementsByTagName('body')[0].style.display = 'none'
      require(`./index.style.less`)
      document.getElementsByTagName('body')[0].style.display = 'flex'
    } catch (error) {
      console.info('RouterScreensConfig [115]', { msg: error.message })
    }
  }

  getThemeRemotely()

  const globalTheme = {
    colors: {
      colorFirst: {
        Light: [0, 0, 12.5], // RBG [32, 32, 32]
        Dark: [0, 0, 87.5], // RGB [255, 255, 255]
      },

      colorSecond: {
        Light: [0, 0, 99],
        Dark: [0, 0, 12.5],
      },

      colorActive: {
        Light: [222, 52.9, 46.7], // RBG [56, 94, 182]
        Dark: [222, 52.9, 46.7],
      },
      colorBoxes: {
        Light: [208, 100, 62.2], // RBG [62, 166, 255]
        Dark: [208, 100, 62.2],
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
