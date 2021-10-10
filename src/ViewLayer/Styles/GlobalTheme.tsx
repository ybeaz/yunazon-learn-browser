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
    colors: {
      colorFirstDarker2: {
        Light: '',
        Dark: 'rgba(255, 255, 255, 0.8)',
      },
      colorFirstDarker: {
        Light: '',
        Dark: 'rgba(255, 255, 255, 0.9)',
      },
      colorFirst: {
        Light: '',
        Dark: 'rgb(255, 255, 255)',
      },

      colorSecondDacker: {
        Light: '',
        Dark: 'rgb(24, 24, 24)',
      },
      colorSecond: {
        Light: '',
        Dark: 'rgb(32, 32, 32)',
      },
      colorSecondLighter2: {
        Light: '',
        Dark: 'rgb(50, 50, 50)',
      },
      colorSecondLighter3: {
        Light: '',
        Dark: 'rgb(55, 55, 55)',
      },
      colorSecondLighter4: {
        Light: '',
        Dark: 'rgb(111, 111, 111)',
      },

      colorActive: {
        Light: 'yellow',
        Dark: 'rgb(56, 94, 182)',
      },
      colorActiveDacker: {
        Light: '',
        Dark: 'rgb(22, 37, 61)',
      },
      colorBoxes: {
        Light: '',
        Dark: 'rgb(62, 166, 255)',
      },
    },

    background: theme === 'Light' ? 'lightgreen' : 'lightblue',
    color: theme === 'Light' ? 'black' : 'grey',
    colorActive: 'red', // theme === 'Light' ? 'blue' : 'red',
  }

  const GlobalStyleTheme = createGlobalStyle`
    .CatalogSEP .__titleScreen {
      color: ${props2 => props2.theme.colors.colorActive[theme]};
    }
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
