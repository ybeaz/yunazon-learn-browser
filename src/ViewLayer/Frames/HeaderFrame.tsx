import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { InstallMobileAppGroup } from '../Components/InstallMobileAppGroup'
import { PageActionsGroup } from '../Components/PageActionsGroup'
import { ShareButtons } from '../Components/ShareButtons'
import { SearchGroup } from '../Components/SearchGroup'
import { LogoGroup } from '../Components/LogoGroup'
import { Button } from '../Components/Button'
import { LANGUAGES_APP } from '../../Constants/languagesApp.const'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { IProfile, IRootStore } from '../../Interfaces/IRootStore'
import { SelectLanguage } from '../Components/SelectLanguage'
import { ModalFrames } from '../Frames/ModalFrames'
interface HeaderFrameArgs {
  brandName?: string
  moto?: string
  logoPath?: string
  contentComponentName?: string
  courseCapture?: string
  documentID?: string
  courseID?: string
  contentID?: string
  isButtonSideMenu: boolean
  isLogoGroup: boolean
  isButtonAddCourse: boolean
  isButtonAuthUser: boolean
  isSelectLanguage: boolean
  isButtonThemeToggle: boolean
  isSeachGroup: boolean
  isButtonBack: boolean
  isPageActionsGroup: boolean
  isButtonsShare: boolean
  isInstallMobileAppGroup: boolean
}

export const HeaderFrame: React.FunctionComponent<HeaderFrameArgs> = props => {
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
    forms: { profile },
    language,
  } = useSelector((store2: IRootStore) => store2)

  const getButtonAuthUser = (user2: IProfile): any => {
    const status = user2?.status
    const userName = user2?.userNameFirst

    const classAdded =
      status === 'success'
        ? `Button_personalCabinet Button_personalCabinet_authorized`
        : 'Button_personalCabinet'

    const tooltipText =
      status === 'success' ? userName : DICTIONARY.PersonalСabinet[language]

    const childProps =
      status === 'success'
        ? { scenario: { branch: 'signOut', step: '' } }
        : { scenario: { branch: 'signInManually', step: '' } }

    return {
      icon: 'MdPerson',
      classAdded,
      tooltipText,
      tooltipPosition: 'bottom',
      action: {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [
          {
            childName: 'AuthUser',
            isActive: true,
            childProps,
          },
        ],
      },
    }
  }

  const [buttonAuthUser, setButtonAuthUser] = useState(
    getButtonAuthUser(profile)
  )

  useEffect(() => {
    setButtonAuthUser(getButtonAuthUser(profile))
  }, [profile])

  const createCourseQuiz = DICTIONARY.createCourseQuiz[language]

  const toggleTheme = DICTIONARY['Toggle site theme'][language]

  const classAddHeaderFrame =
    contentComponentName === 'ReaderIframe' ||
    contentComponentName === 'PlayerIframe'
      ? 'HeaderFrame_AcademyPresent'
      : `HeaderFrame_${contentComponentName}`

  const propsOut = {
    selectLanguageProps: {
      LANGUAGES: LANGUAGES_APP,
      language,
      mode: null,
      typeEvent: 'SELECT_LANGUAGE_APP',
      classAdded: 'SelectLanguage__AppLanguage',
      languagesSelected: [{ value: language }],
    },
    buttonMdMenuProps: {
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
        data: { history, courseCapture },
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
    buttonAuthUserProps: buttonAuthUser,
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
          {isButtonSideMenu && <Button {...propsOut.buttonMdMenuProps} />}
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
