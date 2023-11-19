import React, { useEffect, ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

import { handleEvents } from '../../DataLayer/index.handleEvents'
import { SearchFormSepChRP } from '../Components/SearchFormSepChRP'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { MainFrame } from '../Frames/MainFrame/MainFrame'
import { getEffectedRequests } from '../Hooks/getEffectedRequests'
import { SERVERS_MAIN } from '../../Constants/servers.const'

interface SkillsExchangeMatrixChRPProps {
  routeProps: {
    location: {
      pathname: string
    }
  }
  themeDafault: string
}

export const SkillsExchangeMatrixChRP: React.FunctionComponent<
  SkillsExchangeMatrixChRPProps
> = (props): ReactElement => {
  getEffectedRequests(['INIT_LOADING'])

  const store = useSelector((store2: RootStoreType) => store2)
  const { language: languageStore } = store

  const { themeDafault } = props
  useEffect(() => {
    handleEvents({}, { typeEvent: 'SET_THEME', data: themeDafault })
  }, [])

  const moduleCapture = 'Exchange your skills, save your time'
  const moduleDescription = 'Exchange your skills, save your time'
  const canonicalUrl = `${SERVERS_MAIN.remote}${props?.routeProps.location.pathname}`
  const mainFrameProps = {
    screenType: 'SkillsExchangeMatrixChRP',
    contentComponentName: 'SearchFormSepChRP',
    brandName: 'YouRails',
  }

  return (
    <div className='SkillsExchangeMatrixChRP'>
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
        <SearchFormSepChRP />
        {null}
        {null}
      </MainFrame>
    </div>
  )
}
