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
import { IUser, IRootStore } from '../../Interfaces/IRootStore'
import { SelectLanguage } from '../Components/SelectLanguage'
import { ModalFrames } from '../Frames/ModalFrames'
interface HeaderFrameArgs {
  brandName?: string
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

  const { user, language } = useSelector((store2: IRootStore) => store2)

  const getButtonAuthUser = (user2: IUser): any => {
    const status = user2?.status
    const userName = user2?.userName

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

  const [buttonAuthUser, setButtonAuthUser] = useState(getButtonAuthUser(user))

  useEffect(() => {
    setButtonAuthUser(getButtonAuthUser(user))
  }, [user])

  const createCourseQuiz = DICTIONARY.createCourseQuiz[language]
  const buttonAddCourseProps = {
    icon: 'MdQueue',
    classAdded: 'Button_AddCourse',
    tooltipText: createCourseQuiz,
    tooltipPosition: 'bottom',
    action: { typeEvent: 'CREATE_COURSE', data: { contentComponentName } },
  }

  const toggleTheme = DICTIONARY['Toggle site theme'][language]
  const buttonThemeToggle = {
    icon: 'CgDarkMode',
    classAdded: 'Button_ThemeToggle',
    tooltipText: toggleTheme,
    tooltipPosition: 'bottom',
    action: { typeEvent: 'TOGGLE_THEME' },
  }

  const classAddHeaderFrame =
    contentComponentName === 'ReaderIframe' ||
    contentComponentName === 'PlayerIframe'
      ? 'HeaderFrame_AcademyPresent'
      : ''

  const selectLanguageProps = {
    LANGUAGES: LANGUAGES_APP,
    language,
    mode: null,
    typeEvent: 'APP_SELECT_LANGUAGE',
    classAdded: 'SelectLanguage__AppLanguage',
    languagesSelected: [{ value: language }],
  }

  const buttonMdMenuProps = {
    icon: 'MdMenu',
    classAdded: 'Button_MdMenu',
    action: {
      typeEvent: 'TOGGLE_SIDE_NAVIGATION',
    },
  }

  const buttonBackProps = {
    icon: 'MdForward',
    classAdded: 'Button_MdBackward3',
    action: {
      typeEvent: 'GO_BACK_FROM_CERTIFICATE',
      data: { history, courseCapture },
    },
    tooltipText: DICTIONARY['backToCourse'][language],
    tooltipPosition: 'bottom',
  }

  const pageActionsProps = {
    courseCapture,
    documentID,
    courseID,
    contentID,
  }

  return (
    <div className={`HeaderFrame ${classAddHeaderFrame}`}>
      <div className='_content'>
        <div className='__left'>
          {isButtonBack && (
            <Link to={{ pathname: '/academy' }}>
              <Button {...buttonBackProps} />
            </Link>
          )}
          {isButtonSideMenu && <Button {...buttonMdMenuProps} />}
          {isLogoGroup && <LogoGroup brandName={brandName} />}
          {isPageActionsGroup && <PageActionsGroup {...pageActionsProps} />}
          {isButtonsShare && <ShareButtons />}
        </div>
        <div className='__main'>{isSeachGroup && <SearchGroup />}</div>
        <div className='__right'>
          {isInstallMobileAppGroup && <InstallMobileAppGroup />}
          {isButtonAddCourse && (
            <div className='_itemButtonAddCourse'>
              <Button {...buttonAddCourseProps} />
            </div>
          )}
          {isButtonAuthUser && (
            <div className='_itemButtonAuthUser'>
              <Button {...buttonAuthUser} />
            </div>
          )}
          {isSelectLanguage && (
            <div className='_itemLanguageSelect'>
              <SelectLanguage {...selectLanguageProps} />
            </div>
          )}
          {isButtonThemeToggle && (
            <div className='_itemButtonThemeToggle'>
              <Button {...buttonThemeToggle} />
            </div>
          )}
        </div>
      </div>
      <ModalFrames />
    </div>
  )
}
