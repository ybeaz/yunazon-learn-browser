import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { FooterFrame } from '../../Frames/FooterFrame/FooterFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { MyCoursesBody } from '../../Components/MyCoursesBody/MyCoursesBody'
import { actionAsync } from '../../../DataLayer/index.action'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'

import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import {
  CourseCreateComponentPropsType,
  CourseCreatePropsType,
  CourseCreatePropsOutType,
  CourseCreateComponentType,
  CourseCreateType,
} from './CourseCreateTypes'

/**
 * @description Component to render CourseCreate
 * @import import { CourseCreate, CourseCreatePropsType, CourseCreatePropsOutType, CourseCreateType } 
             from '../Components/CourseCreate/CourseCreate'
 */
const CourseCreateComponent: CourseCreateComponentType = (
  props: CourseCreateComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { language, sub },
    handleEvents,
  } = props

  const dispatch = useDispatch()

  useEffect(() => {
    handleEvents(
      {},
      { type: 'SET_SCREEN_ACTIVE', data: { screenActive: 'CourseCreate' } }
    )
    if (sub) {
      dispatch(actionAsync.GET_MATRIX_DATA.REQUEST())
    }
  }, [sub])

  const propsOut: CourseCreatePropsOutType = {
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
      isSeachGroup: true,
      isButtonBack: false,
      isPageActionsGroup: false,
      isButtonsShare: false,
    },
    mainFrameProps: {
      screenType: 'CourseCreate',
    },
    courseCreateBodyProps: {},
  }

  return (
    <div className={getClasses('CourseCreate', classAdded)}>
      <MainFrame {...propsOut.mainFrameProps}>
        {/* header */}
        <HeaderFrame {...propsOut.headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        <MyCoursesBody {...propsOut.courseCreateBodyProps} />
        {/* <ProfileBody {...propsOut.profileBodyProps} /> */}
        {/* middle-right */}
        {null}
        {/* footer */}
        {null}
      </MainFrame>
    </div>
  )
}

const storeStateSliceProps: string[] = ['language', 'sub']
export const CourseCreate = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(
    storeStateSliceProps,
    React.memo(CourseCreateComponent)
  )
)

export type {
  CourseCreatePropsType,
  CourseCreatePropsOutType,
  CourseCreateComponentType,
  CourseCreateType,
}
