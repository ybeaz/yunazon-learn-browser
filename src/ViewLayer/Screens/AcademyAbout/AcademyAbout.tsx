import React, { useEffect } from 'react'

import { ScreensEnumType } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import { withStoreStateSelectedYrl } from 'yourails_common'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { SERVERS_MAIN } from 'yourails_common'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'
import { AcademyAboutBody } from '../../Components/AcademyAboutBody/AcademyAboutBody'

import { getClasses } from 'yourails_common'
import {
  AcademyAboutComponentPropsType,
  AcademyAboutPropsType,
  AcademyAboutPropsOutType,
  AcademyAboutComponentType,
  AcademyAboutType,
} from './AcademyAboutTypes'

/**
 * @description Component to render AcademyAbout
 * @import import { AcademyAbout, AcademyAboutPropsType, AcademyAboutPropsOutType, AcademyAboutType } 
             from '../Components/AcademyAbout/AcademyAbout'
 */
const AcademyAboutComponent: AcademyAboutComponentType = (
  props: AcademyAboutComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { language },
  } = props

  const screenType = ScreensEnumType['Profiles']

  useEffectedInitialRequests([{ type: 'SET_SCREEN_ACTIVE', data: { screenActive: screenType } }])

  const propsOut: AcademyAboutPropsOutType = {
    headerFrameProps: {
      brandName: 'YouRails Academy',
      moto: DICTIONARY['Watch_Videos_With_a_Purpose'][language],
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
      screenType: 'AcademyAbout',
    },
  }

  return (
    <div className={getClasses('AcademyAbout', classAdded)}>
      <MainFrame {...propsOut.mainFrameProps}>
        {/* header */}
        <HeaderFrame {...propsOut.headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        <div>
          <AcademyAboutBody />
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

const storeStateSliceProps: string[] = ['language']
export const AcademyAbout = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(AcademyAboutComponent)
)

export type {
  AcademyAboutPropsType,
  AcademyAboutPropsOutType,
  AcademyAboutComponentType,
  AcademyAboutType,
}
