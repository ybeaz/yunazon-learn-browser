import React, { useEffect } from 'react'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { FooterFrame } from '../../Frames/FooterFrame/FooterFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { MyDocumentsBody } from '../../Components/'

import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import {
  MyDocumentsComponentPropsType,
  MyDocumentsPropsType,
  MyDocumentsPropsOutType,
  MyDocumentsComponentType,
  MyDocumentsType,
} from './MyDocumentsTypes'

/**
 * @description Component to render MyDocuments
 * @import import { MyDocuments, MyDocumentsPropsType, MyDocumentsPropsOutType, MyDocumentsType } 
             from '../Components/MyDocuments/MyDocuments'
 */
const MyDocumentsComponent: MyDocumentsComponentType = (
  props: MyDocumentsComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { language, sub, documents },
    handleEvents,
  } = props

  useEffect(() => {
    if (sub) handleEvents({}, { typeEvent: 'GET_DOCUMENTS' })
  }, [sub])

  const propsOut: MyDocumentsPropsOutType = {
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
      screenType: 'MyDocuments',
    },
    myMyDocumentsBodyProps: {
      documents,
      language,
    },
  }

  return (
    <div className={getClasses('MyDocuments', classAdded)}>
      <MainFrame {...propsOut.mainFrameProps}>
        {/* header */}
        <HeaderFrame {...propsOut.headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        <div>
          {documents.length ? (
            <MyDocumentsBody {...propsOut.myMyDocumentsBodyProps} />
          ) : null}
        </div>
        {/* <ProfileBody {...propsOut.profileBodyProps} /> */}
        {/* middle-right */}
        {null}
        {/* footer */}
        {null}
      </MainFrame>
    </div>
  )
}

const storeStateSliceProps: string[] = ['language', 'sub', 'documents']
export const MyDocuments = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(
    storeStateSliceProps,
    React.memo(MyDocumentsComponent)
  )
)

export type {
  MyDocumentsPropsType,
  MyDocumentsPropsOutType,
  MyDocumentsComponentType,
  MyDocumentsType,
}
