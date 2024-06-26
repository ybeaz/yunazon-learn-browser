import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { ScreensEnumType } from '../../../Interfaces/ScreensEnumType'
import { getDateString } from '../../../Shared/getDateString'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { DocumentType } from '../../../@types/index'
import { getSlug } from '../../../Shared/getSlug'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { LoaderOverlayYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'

import { withPropsYrl } from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import {
  Certificate2Body,
  Certificate2BodyPropsType,
  Certificate2BodyPropsOutType,
  Certificate2BodyType,
} from '../../Components/Certificate2Body/Certificate2Body'
import {
  Certificate2ComponentPropsType,
  Certificate2PropsType,
  Certificate2PropsOutType,
  Certificate2ComponentType,
  Certificate2Type,
} from './Certificate2Types'

const documentFoundDefault = {
  dateCreated: 0,
  module: { moduleID: '', capture: '', language: '' },
  creator: {
    affiliation: '',
    jobTitle: '',
    nameFirst: '',
    nameLast: '',
    nameMiddle: '',
  },
  learner: {
    nameFirst: '',
    nameLast: '',
    nameMiddle: '',
  },
}

/**
 * @description Component to render Certificate2
 * @link Inspired by: https://codepen.io/darthsteevo/pen/xxRgEbq
 * @import import { Certificate2, Certificate2PropsType, Certificate2PropsOutType, Certificate2Type } 
             from '../ViewLayer/Screens/Certificate2/Certificate2'
 */
const Certificate2Component: Certificate2ComponentType = (
  props: Certificate2ComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { documents, language },
  } = props

  const params = useParams()
  const documentID = params?.documentID

  const documentFound = documents.find(
    (document: DocumentType) => document.documentID === documentID
  )

  const {
    dateCreated,
    module: { moduleID, capture: moduleCapture, language: languageDoc },
    creator: {
      affiliation,
      jobTitle,
      nameFirst: nameFirstCreator,
      nameLast: nameLastCreator,
      nameMiddle: nameMiddleCreator,
    },
    learner: {
      nameFirst: nameFirstLearner,
      nameLast: nameLastLearner,
      nameMiddle: nameMiddleLearner,
    },
  } = documentFound || documentFoundDefault

  const screenType = ScreensEnumType['Certificate2']
  const documentSlug = getSlug(moduleCapture)
  const documentPathName = `/d/${documentID}/${documentSlug}`

  useEffect(() => {
    handleEvents({}, { type: 'SET_SCREEN_ACTIVE', data: { screenActive: 'Certificate' } })
    handleEvents({}, { typeEvent: 'CLOSE_MODAL_GET_SCORES' })
    if (Array.isArray(documents) && !documentFound) {
      handleEvents({}, { typeEvent: 'FIND_DOCUMENT', data: documentID })
    }
  }, [])

  const dateMilitaty = getDateString({
    timestamp: dateCreated,
    style: 'military',
    hours: false,
    minutes: false,
    seconds: false,
  })

  const moduleSlug = getSlug(moduleCapture)
  const modulePathName = `/m/${moduleID}/${moduleSlug}`
  const titlePage = `${dateMilitaty}-certificate-${moduleID}-${moduleSlug}`

  const propsOut: Certificate2PropsOutType = {
    headerFrameProps: {
      brandName: 'YouRails',
      moto: DICTIONARY['Watch_Videos_With_a_Purpose'][language],
      logoPath: `${SERVERS_MAIN.remote}/images/logoYouRails.png`,
      contentComponentName: 'SearchFormSep',
      moduleCapture: moduleCapture,
      documentID,
      moduleID,
      isButtonSideMenuLeft: true,
      isLogoGroup: true,
      isButtonAddCourse: false,
      isButtonAuthUser: true,
      isSelectLanguage: true,
      isButtonThemeToggle: true,
      isSeachGroup: false,
      isButtonBack: true,
      isPageActionsGroup: true,
      isButtonsShare: true,
    },
  }

  return (
    <div className={getClasses('Certificate2', classAdded)}>
      <Helmet>
        <html lang={languageDoc} />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta name='google' content='notranslate' />
        <title>{titlePage}</title>
        <link rel='canonical' href={location.href} />
        <meta name='description' content={moduleCapture} />
      </Helmet>
      <div className='_headerFrameWrapper Certificate2_noPrint'>
        <HeaderFrame {...propsOut.headerFrameProps} />
      </div>
      <Certificate2Body />
    </div>
  )
}

const storeStateSliceProps: string[] = ['language', 'documents']
export const Certificate2: Certificate2Type = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(Certificate2Component)
)

export type {
  Certificate2PropsType,
  Certificate2PropsOutType,
  Certificate2ComponentType,
  Certificate2Type,
}
