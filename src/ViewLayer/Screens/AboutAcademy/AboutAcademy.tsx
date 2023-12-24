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
import { AboutAcademyBody } from '../../Components/AboutAcademyBody/AboutAcademyBody'

import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import {
  AboutAcademyComponentPropsType,
  AboutAcademyPropsType,
  AboutAcademyPropsOutType,
  AboutAcademyComponentType,
  AboutAcademyType,
} from './AboutAcademyTypes'

/**
 * @description Component to render AboutAcademy
 * @import import { AboutAcademy, AboutAcademyPropsType, AboutAcademyPropsOutType, AboutAcademyType } 
             from '../Components/AboutAcademy/AboutAcademy'
 */
const AboutAcademyComponent: AboutAcademyComponentType = (
  props: AboutAcademyComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { language },
  } = props

  const propsOut: AboutAcademyPropsOutType = {
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
      screenType: 'AboutAcademy',
    },
  }

  return (
    <div className={getClasses('AboutAcademy', classAdded)}>
      <MainFrame {...propsOut.mainFrameProps}>
        {/* header */}
        <HeaderFrame {...propsOut.headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        <div>
          <AboutAcademyBody />
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

const storeStateSliceProps: string[] = ['language']
export const AboutAcademy = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(AboutAcademyComponent)
)

export type {
  AboutAcademyPropsType,
  AboutAcademyPropsOutType,
  AboutAcademyComponentType,
  AboutAcademyType,
}
