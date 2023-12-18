import React from 'react'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { ImageYrl } from '../../ComponentsLibrary/ImageYrl/ImageYrl'
import { SideNavigation } from '../../Components/SideNavigation'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { FooterFrame } from '../../Frames/FooterFrame/FooterFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'

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
    storeStateSlice: { language },
  } = props

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
      screenType: 'AcademyPresent',
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
        <div>MyDocuments</div>
        {/* <ProfileBody {...propsOut.profileBodyProps} /> */}
        {/* middle-right */}
        {null}
        {/* footer */}
        <FooterFrame>
          <ImageYrl {...propsOut.imageBottomProps} />
        </FooterFrame>
      </MainFrame>
      <SideNavigation />
    </div>
  )
}

const storeStateSliceProps: string[] = ['language']
export const MyDocuments = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(MyDocumentsComponent)
)

export type {
  MyDocumentsPropsType,
  MyDocumentsPropsOutType,
  MyDocumentsComponentType,
  MyDocumentsType,
}
