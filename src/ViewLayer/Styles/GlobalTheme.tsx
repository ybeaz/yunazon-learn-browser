import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { IRootStore } from '../../Interfaces/IRootStore'

interface GlobalThemeArgs {
  children: any
}

export const GlobalTheme: React.FunctionComponent<GlobalThemeArgs> = (
  props: GlobalThemeArgs
): JSX.Element => {
  const getThemeRemotely: Function = () => {
    try {
      document.getElementsByTagName('body')[0].style.display = 'none'
      require(`./themeDark.less`)
      document.getElementsByTagName('body')[0].style.display = 'flex'
    } catch (error) {
      console.info('RouterScreensConfig [115]', { msg: error.message })
    }
  }

  getThemeRemotely()

  const {
    globalVars: { theme },
  } = useSelector((store2: IRootStore) => store2)

  const globalTheme = {
    background: theme === 'Light' ? 'lightgreen' : 'lightblue',
    color: theme === 'Light' ? 'black' : 'grey',
    colorActive: 'red', // theme === 'Light' ? 'blue' : 'red',
  }

  const GlobalStyleTheme = createGlobalStyle`
    body {
      color: ${props2 => props2.theme.color};
      background: ${props2 => props2.theme.background};
    }
`

  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyleTheme />
      {props.children}
    </ThemeProvider>
  )
}
