import React from 'react'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { ImageYrl } from '../../ComponentsLibrary/ImageYrl/ImageYrl'
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
  CoursesComponentPropsType,
  CoursesPropsType,
  CoursesPropsOutType,
  CoursesComponentType,
  CoursesType,
} from './CoursesTypes'

/**
 * @description Component to render Courses
 * @import import { Courses, CoursesPropsType, CoursesPropsOutType, CoursesType } 
             from '../Components/Courses/Courses'
 */
const CoursesComponent: CoursesComponentType = (
  props: CoursesComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { language },
  } = props

  const propsOut: CoursesPropsOutType = {
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
    <div className={getClasses('Courses', classAdded)}>
      <MainFrame {...propsOut.mainFrameProps}>
        {/* header */}
        <HeaderFrame {...propsOut.headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        <div>Courses - This page is under development</div>
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
export const Courses = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(CoursesComponent)
)

export type {
  CoursesPropsType,
  CoursesPropsOutType,
  CoursesComponentType,
  CoursesType,
}
