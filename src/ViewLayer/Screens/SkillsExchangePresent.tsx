import React from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'

import { CatalogSEP } from '../Components/CatalogSEP'
import { IRootStore } from '../../Interfaces/IRootStore'
import { MainFrame } from '../Frames/MainFrame'
import { getEffectedRequests } from '../Hooks/getEffectedRequests'
// import { ThemeDarkGlob, ThemeDark } from '../Frames/ThemeDark'
// import { ThemeLightGlob, ThemeLight } from '../Frames/ThemeLight'

// const THEMES = {
//   ThemeLightGlob,
//   ThemeDarkGlob,
//   ThemeLight,
//   ThemeDark,
// }

// const func = (props: any) => (props.themeStore === 'Light' ? 'green' : 'blue')

// const GlobalStyle = createGlobalStyle`
//   @colorVar: ${(props: any) => props.themeStore};
//   body {
//     color: ${(props: any) => (props.themeStore === 'Light' ? 'green' : 'blue')};
//   }
// `
interface SkillsExchangePresentProps {
  routeProps: {
    location: {
      pathname: string
    }
  }
}

export const SkillsExchangePresent: React.FunctionComponent<SkillsExchangePresentProps> =
  (props): JSX.Element => {
    getEffectedRequests(['GET_GLOBAL_VARS'])

    const store = useSelector((store2: IRootStore) => store2)
    const {
      language: languageStore,
      globalVars: { theme: themeStore },
    } = store

    const moduleCapture = 'Exchange your skills, save your time'
    const moduleDescription = 'Exchange your skills, save your time'
    const canonicalUrl = `https://yourails.com${props?.routeProps.location.pathname}`
    const mainFrameProps = {
      screenType: 'SkillsExchangePresent',
      contentComponentName: 'CatalogSEP',
    }

    // const ThemeDecorator = THEMES[`Theme${themeStore}`]
    // const ThemeDecoratorGlob = THEMES[`Theme${themeStore}Blob`]

    // console.info('SkillsExchangePresent [34]', {
    //   themeStore,
    //   [`Theme${themeStore}`]: `Theme${themeStore}`,
    // })

    // const globalStyleProps = { theme: themeStore }

    return (
      // <ThemeDecorator>
      //   {/* <ThemeDecoratorGlob /> */}
      //   <GlobalStyle themeStore={themeStore} />
      <div className='SkillsExchangePresent'>
        <Helmet>
          <html lang={languageStore} />
          <meta charSet='utf-8' />
          <title>{moduleCapture}</title>
          <link rel='canonical' href={canonicalUrl} />
          <meta name='description' content={moduleDescription} />
        </Helmet>
        <MainFrame {...mainFrameProps}>
          {null}
          {null}
          <CatalogSEP />
          {null}
        </MainFrame>
      </div>
      // </ThemeDecorator>
    )
  }
