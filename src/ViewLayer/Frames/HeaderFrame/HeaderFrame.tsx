import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { SideNavigation } from '../../Components/SideNavigation/SideNavigation'
import { getButtonAuthUserProps } from '../../Hooks/getButtonAuthUserProps'
// import { InstallMobileAppGroup } from '../../Components/InstallMobileAppGroup'
import { PageActionsGroup } from '../../Components/PageActionsGroup/PageActionsGroup'
import { ShareButtons } from '../../Components/ShareButtons'

import { LANGUAGES_APP } from '../../../Constants/languagesApp.const'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { SelectLanguage } from '../../Components/SelectLanguage'
import { ModalFrames } from '../../Frames/ModalFrames/ModalFrames'
import { AvatarPlusInfo } from '../../Components/AvatarPlusInfo/AvatarPlusInfo'
import { AbInCircle } from '../../Components/AbInCircle/AbInCircle'
import {
  InputGroupYrl,
  ButtonYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'

import {
  HeaderFrameComponentPropsType,
  HeaderFramePropsType,
  HeaderFramePropsOutType,
  HeaderFrameComponentType,
  HeaderFrameType,
} from './HeaderFrameTypes'

/**
 * @description Component to render HeaderFrame
 * @import import { HeaderFrame, HeaderFramePropsType, HeaderFramePropsOutType, HeaderFrameType } 
             from '../Components/HeaderFrame/HeaderFrame'
 */
const HeaderFrameComponent: HeaderFrameComponentType = (
  props: HeaderFrameComponentPropsType
) => {
  const {
    brandName,
    moto,
    logoPath,
    contentComponentName,
    courseCapture = '',
    documentID = '',
    courseID = '',
    contentID = '',
    isButtonAddCourse,
    isButtonAuthUser,
    isButtonBack,
    isButtonSideMenuLeft,
    isButtonsShare,
    isButtonThemeToggle,
    isLogoGroup,
    isPageActionsGroup,
    isSeachGroup,
    isSelectLanguage,
    storeStateSlice: {
      preferred_username,
      isSideNavLeftVisible,
      user,
      language,
    },
  } = props

  const navigate = useNavigate()

  const createCourseQuiz = DICTIONARY.createCourseQuiz[language]

  const toggleTheme = DICTIONARY['Toggle site theme'][language]

  const classAddHeaderFrame =
    contentComponentName === 'ReaderIframe' ||
    contentComponentName === 'PlayerIframe'
      ? 'HeaderFrame_AcademyPresent'
      : `HeaderFrame_${contentComponentName}`

  const propsOut: HeaderFramePropsOutType = {
    selectLanguageProps: {
      LANGUAGES: LANGUAGES_APP,
      language,
      mode: null,
      typeEvent: 'SELECT_LANGUAGE_APP',
      classAdded: 'SelectLanguage__AppLanguage',
      languagesSelected: [{ value: language }],
    },
    buttonLeftSideNavigationMenuProps: {
      icon: 'MdMenu',
      classAdded: 'Button_MdMenu',
      action: {
        typeEvent: 'SET_SIDE_NAVIGATION_LEFT',
      },
    },
    buttonLeftSideNavigationAvatarProps: {
      classAdded: 'Button_buttonLeftSideNavigationAvatar',
      action: {
        typeEvent: 'SET_SIDE_NAVIGATION_LEFT',
      },
    },
    buttonLeftSideNavigationUnAuthorizedProps: {
      icon: 'FaUserCircle',
      classAdded: 'Button_buttonLeftSideNavigationAvatar',
      action: {
        typeEvent: 'SET_SIDE_NAVIGATION_LEFT',
      },
    },
    buttonBackProps: {
      icon: 'MdForward',
      classAdded: 'Button_MdBackward3',
      action: {
        typeEvent: 'GO_BACK_FROM_CERTIFICATE',
        data: { history: navigate, courseCapture },
      },
      tooltipText: DICTIONARY['backToCourse'][language],
      tooltipPosition: 'bottom',
    },
    buttonAddCourseProps: {
      icon: 'MdQueue',
      classAdded: 'Button_AddCourse',
      tooltipText: createCourseQuiz,
      tooltipPosition: 'bottom',
      action: { typeEvent: 'CREATE_COURSE', data: { contentComponentName } },
    },
    buttonAuthUserProps: getButtonAuthUserProps(
      user,
      language,
      'header',
      navigate
    ),
    buttonThemeToggleProps: {
      icon: 'CgDarkMode',
      classAdded: 'Button_ThemeToggle',
      tooltipText: toggleTheme,
      tooltipPosition: 'bottom',
      action: { typeEvent: 'TOGGLE_THEME' },
    },
    pageActionsProps: {
      courseCapture,
      documentID,
      courseID,
      contentID,
    },
    logoGroupProps: {
      brandName,
      moto,
      logoPath,
      contentComponentName,
    },
    avatarPlusInfoProps: {
      classProps: { _link: '_logoGroup' },
      typeEvent: 'CLICK_LOGO_GROUP',
      capture: brandName,
      text: moto,
      imgSrc: logoPath,
      pathname: '/',
    },
    abInCircleProps: {
      classAdded: '',
      text: preferred_username,
    },
    inputGroupProps: {
      inputProps: {
        classAdded: 'Input_search',
        type: 'text',
        placeholder: 'Search...',
        typeEvent: 'ONCHANGE_SEARCH_INPUT',
        typeEventOnEnter: 'CLICK_ON_SEARCH_BUTTON',
        storeFormProp: 'inputSearch',
      },
      buttonSubmitProps: {
        icon: 'MdSearch',
        classAdded: 'Button_MdSearch',
        action: { typeEvent: 'CLICK_ON_SEARCH_BUTTON' },
      },
    },
  }

  let SideMenuLeft = null

  if (isSideNavLeftVisible) {
    SideMenuLeft = <ButtonYrl {...propsOut.buttonLeftSideNavigationMenuProps} />
  } else if (isButtonAuthUser && preferred_username) {
    SideMenuLeft = (
      <ButtonYrl {...propsOut.buttonLeftSideNavigationAvatarProps}>
        <AbInCircle {...propsOut.abInCircleProps} />
      </ButtonYrl>
    )
  } else if (isButtonAuthUser && !preferred_username)
    SideMenuLeft = (
      <ButtonYrl {...propsOut.buttonLeftSideNavigationUnAuthorizedProps} />
    )

  return (
    <div
      id={`id_header_${contentComponentName}`}
      className={`HeaderFrame ${classAddHeaderFrame}`}
    >
      <div className='_content'>
        <div className='__left'>
          {/* {isButtonBack && (
            <Link to={{ pathname: '/academy' }}>
              <ButtonYrl {...propsOut.buttonBackProps} />
            </Link>
          )} */}
          {isButtonSideMenuLeft && SideMenuLeft}
          {isLogoGroup && <AvatarPlusInfo {...propsOut.avatarPlusInfoProps} />}
          {isPageActionsGroup && (
            <PageActionsGroup {...propsOut.pageActionsProps} />
          )}
          {isButtonsShare && <ShareButtons />}
        </div>
        <div className='__main'>
          {isSeachGroup && (
            <div className='_itemInputGroupYrl'>
              <InputGroupYrl {...propsOut.inputGroupProps} />
            </div>
          )}
        </div>
        <div className='__right'>
          {isButtonAddCourse && (
            <div className='_itemButtonAddCourse'>
              <ButtonYrl {...propsOut.buttonAddCourseProps} />
            </div>
          )}
          {isSelectLanguage && (
            <div className='_itemLanguageSelect'>
              <SelectLanguage {...propsOut.selectLanguageProps} />
            </div>
          )}
          {isButtonThemeToggle && (
            <div className='_itemButtonThemeToggle'>
              <ButtonYrl {...propsOut.buttonThemeToggleProps} />
            </div>
          )}
        </div>
      </div>
      <SideNavigation />
      <ModalFrames />
    </div>
  )
}

const storeStateSliceProps: string[] = [
  'preferred_username',
  'isSideNavLeftVisible',
  'user',
  'language',
]
export const HeaderFrame: HeaderFrameType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(HeaderFrameComponent)
)

export type {
  HeaderFramePropsType,
  HeaderFramePropsOutType,
  HeaderFrameComponentType,
  HeaderFrameType,
}
