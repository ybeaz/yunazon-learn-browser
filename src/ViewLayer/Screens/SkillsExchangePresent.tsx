import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

import { handleEvents } from '../../DataLayer/index.handleEvents'
import { CatalogSEP } from '../Components/CatalogSEP'
import { IRootStore } from '../../Interfaces/IRootStore'
import { MainFrame } from '../Frames/MainFrame'
import { getEffectedRequests } from '../Hooks/getEffectedRequests'

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
    const { language: languageStore } = store

    const moduleCapture = 'Exchange your skills, save your time'
    const moduleDescription = 'Exchange your skills, save your time'
    const canonicalUrl = `https://yourails.com${props?.routeProps.location.pathname}`
    const mainFrameProps = {
      screenType: 'SkillsExchangePresent',
      contentComponentName: 'CatalogSEP',
    }

    return (
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
    )
  }
