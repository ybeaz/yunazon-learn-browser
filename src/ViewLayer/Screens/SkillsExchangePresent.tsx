import React from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

import { CatalogSEP } from '../Components/CatalogSEP'
import { IRootStore } from '../../Interfaces/IRootStore'
import { MainFrame } from '../Frames/MainFrame'
import { getEffectedRequests } from '../Hooks/getEffectedRequests'
import { ThemeDark } from '../Frames/ThemeDark'
import { ThemeLight } from '../Frames/ThemeLight'

const THEMES = {
  ThemeDark,
  ThemeLight,
}

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

    const ThemeDecorator = THEMES[`Theme${themeStore}`]

    console.info('SkillsExchangePresent [34]', {
      themeStore,
      [`Theme${themeStore}`]: `Theme${themeStore}`,
      ThemeDecorator,
    })

    return (
      <ThemeDecorator>
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
      </ThemeDecorator>
    )
  }
