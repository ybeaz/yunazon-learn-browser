import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GLOBAL_THEME, BRIGHTNESS } from '../../Constants/globalTheme.const'
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

  const GlobalStyle = getCreatedGlobalStyle(BRIGHTNESS)

  return (
    <ThemeProvider theme={GLOBAL_THEME}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  )
}
