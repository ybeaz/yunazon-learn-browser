import React, { useEffect } from 'react'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { ImageYrl } from '../../ComponentsLibrary/ImageYrl/ImageYrl'
import { SideNavigation } from '../../Components/SideNavigation'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { FooterFrame } from '../../Frames/FooterFrame/FooterFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { DocumentsBody } from '../../Components/'

import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import {
  DocumentsComponentPropsType,
  DocumentsPropsType,
  DocumentsPropsOutType,
  DocumentsComponentType,
  DocumentsType,
} from './DocumentsTypes'

/**
 * @description Component to render Documents
 * @import import { Documents, DocumentsPropsType, DocumentsPropsOutType, DocumentsType } 
             from '../Components/Documents/Documents'
 */
const DocumentsComponent: DocumentsComponentType = (
  props: DocumentsComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { language, sub, documents },
    handleEvents,
  } = props

  useEffect(() => {
    if (sub) handleEvents({}, { typeEvent: 'GET_DOCUMENTS' })
  }, [sub])

  const propsOut: DocumentsPropsOutType = {
    headerFrameProps: {
      brandName: 'YouRails Academy',
      moto: DICTIONARY['Together_know_everything'][language],
      logoPath: `${SERVERS_MAIN.remote}/images/logoYouRails.png`,
      contentComponentName: 'SearchFormSep',
      isButtonSideMenuLeft: true,
      isLogoGroup: true,
      isButtonAddCourse: true,
      isButtonAuthUser: true,
      isSelectLanguage: true,
      isButtonThemeToggle: true,
      isSeachGroup: false,
      isButtonBack: false,
      isPageActionsGroup: false,
      isButtonsShare: false,
    },
    mainFrameProps: {
      screenType: 'Documents',
    },
    documentsBodyProps: {
      documents,
    },
  }

  return (
    <div className={getClasses('Documents', classAdded)}>
      <MainFrame {...propsOut.mainFrameProps}>
        {/* header */}
        <HeaderFrame {...propsOut.headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        <div>
          {documents.length ? (
            <DocumentsBody {...propsOut.documentsBodyProps} />
          ) : null}
        </div>
        {/* <ProfileBody {...propsOut.profileBodyProps} /> */}
        {/* middle-right */}
        {null}
        {/* footer */}
        {null}
      </MainFrame>
      <SideNavigation />
    </div>
  )
}

const storeStateSliceProps: string[] = ['language', 'sub', 'documents']
export const Documents = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(
    storeStateSliceProps,
    React.memo(DocumentsComponent)
  )
)

export type {
  DocumentsPropsType,
  DocumentsPropsOutType,
  DocumentsComponentType,
  DocumentsType,
}
