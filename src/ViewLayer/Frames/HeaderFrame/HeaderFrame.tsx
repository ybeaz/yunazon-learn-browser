import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import * as flags from '../../../FeatureFlags/index'
import { AuthAwsCognitoLink } from '../../Components/AuthAwsCognitoLink'
import { getButtonAuthUserProps } from '../../Hooks/getButtonAuthUserProps'
import { InstallMobileAppGroup } from '../../Components/InstallMobileAppGroup'
import { PageActionsGroup } from '../../Components/PageActionsGroup'
import { ShareButtons } from '../../Components/ShareButtons'
import { SearchGroup } from '../../Components/SearchGroup'
import { LogoGroup } from '../../Components/LogoGroup'
import { Button } from '../../ComponentsLibrary/Button'
import { LANGUAGES_APP } from '../../../Constants/languagesApp.const'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { SelectLanguage } from '../../Components/SelectLanguage'
import { ModalFrames } from '../../Frames/ModalFrames'

import {
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
  props: HeaderFramePropsType
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
    isButtonSideMenu,
    isButtonsShare,
    isButtonThemeToggle,
    isInstallMobileAppGroup,
    isLogoGroup,
    isPageActionsGroup,
    isSeachGroup,
    isSelectLanguage,
  } = props

  const {
    forms: { user },
    language,
  } = useSelector((store2: RootStoreType) => store2)

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
        typeEvent: 'TOGGLE_SIDE_NAVIGATION',
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
  }

  return (
    <div
      id={`id_header_${contentComponentName}`}
      className={`HeaderFrame ${classAddHeaderFrame}`}
    >
      <div className='_content'>
        <div className='__left'>
          {isButtonBack && (
            <Link to={{ pathname: '/academy' }}>
              <Button {...propsOut.buttonBackProps} />
            </Link>
          )}
          {isButtonSideMenu && (
            <Button {...propsOut.buttonLeftSideNavigationMenuProps} />
          )}
          {isLogoGroup && <LogoGroup {...propsOut.logoGroupProps} />}
          {isPageActionsGroup && (
            <PageActionsGroup {...propsOut.pageActionsProps} />
          )}
          {isButtonsShare && <ShareButtons />}
        </div>
        <div className='__main'>
          {isSeachGroup && (
            <div className='_itemSearchGroup'>
              <SearchGroup />
            </div>
          )}
        </div>
        <div className='__right'>
          {isInstallMobileAppGroup && (
            <div className='_itemInstallMobileAppGroup'>
              <InstallMobileAppGroup />
            </div>
          )}
          {isButtonAddCourse && (
            <div className='_itemButtonAddCourse'>
              <Button {...propsOut.buttonAddCourseProps} />
            </div>
          )}
          {flags.isAwsCognitoAuth() && <AuthAwsCognitoLink />}
          {isButtonAuthUser && (
            <div className='_itemButtonAuthUser'>
              <Button {...propsOut.buttonAuthUserProps} />
            </div>
          )}
          {isSelectLanguage && (
            <div className='_itemLanguageSelect'>
              <SelectLanguage {...propsOut.selectLanguageProps} />
            </div>
          )}
          {isButtonThemeToggle && (
            <div className='_itemButtonThemeToggle'>
              <Button {...propsOut.buttonThemeToggleProps} />
            </div>
          )}
        </div>
      </div>
      <ModalFrames />
    </div>
  )
}

export const HeaderFrame: HeaderFrameType = React.memo(HeaderFrameComponent)

export type {
  HeaderFramePropsType,
  HeaderFramePropsOutType,
  HeaderFrameComponentType,
  HeaderFrameType,
}
