import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'

import { getButtonAuthUserProps } from '../Hooks/getButtonAuthUserProps'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { LANGUAGES_APP } from '../../Constants/languagesApp.const'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { SelectLanguage, SelectLanguagePropsType } from './SelectLanguage'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { ButtonYrl, ButtonYrlPropsType } from '../ComponentsLibrary'
import { isAwsCognitoAuth } from '../../FeatureFlags'

/**
 * @description Component for the left side menu
 * @link React Icons https://react-icons.github.io/react-icons/icons/md/
 */
export const SideNavigation: React.FunctionComponent = (): ReactElement => {
  const store = useSelector((store2: RootStoreType) => store2)
  const {
    authAwsCognitoUserData: { preferred_username },
    forms: { user },
    language,
    componentsState: { isSideNavLeftVisible },
  } = store

  const navigate = useNavigate()

  const buttonAuthUserProps = getButtonAuthUserProps(user, language, 'sideMenu')

  const buttonPropsArr: ButtonYrlPropsType[] = [
    {
      icon: 'MdLogin',
      captureRight: DICTIONARY.Login[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'CLICK_ON_SIGN_IN' },
      isDisplaying: isAwsCognitoAuth() && !preferred_username,
    },
    {
      icon: 'MdPerson',
      captureRight: DICTIONARY.My_profile[language],
      classAdded: 'Button_sideMenuItems',
      action: {
        typeEvent: 'GO_SCREEN',
        data: { history: navigate, path: '/profile' },
      },
      isDisplaying: user.userStatus === 'success',
    },
    {
      icon: 'MdQueue',
      captureRight: DICTIONARY.createCourseQuiz[language],
      classAdded: 'Button_sideMenuItems',
      action: {
        typeEvent: 'CREATE_COURSE',
        data: { contentComponentName: 'SideNavigation' },
      },
      isDisplaying: true,
    },
    {
      icon: 'MdFlag',
      captureRight: DICTIONARY.About[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'DEV_STAGE' },
      isDisplaying: true,
    },
    {
      icon: 'MdAddShoppingCart',
      captureRight: DICTIONARY.Services[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'DEV_STAGE' },
      isDisplaying: true,
    },
    {
      icon: 'MdContactMail',
      captureRight: DICTIONARY.Contacts[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'DEV_STAGE' },
      isDisplaying: true,
    },
    {
      icon: 'MdLogout',
      captureRight: DICTIONARY.Logout[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'CLICK_ON_SIGN_OUT' },
      isDisplaying: isAwsCognitoAuth() && !!preferred_username,
    },
    {
      icon: 'HiOutlineAcademicCap',
      captureRight: DICTIONARY.Academy[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'GO_ACADEMY_SCREEN', data: { history: navigate } },
      isDisplaying: false,
    },
    {
      icon: 'MdHome',
      captureRight: DICTIONARY.Home[language],
      classAdded: 'Button_sideMenuItems',
      action: {
        typeEvent: 'GO_SCREEN',
        data: { history: navigate, path: '/sep' },
      },
      isDisplaying: false,
    },
  ]

  const getButtons: Function = (buttonPropsArr2: any[]): ReactElement[] => {
    return buttonPropsArr2.map(buttonProps => {
      const key = nanoid()
      return (
        <div key={key} className='_item'>
          <ButtonYrl {...buttonProps} />
        </div>
      )
    })
  }

  const classNameAdd = isSideNavLeftVisible ? 'SideNavigation_show' : ''

  const languageSelectProps: SelectLanguagePropsType = {
    LANGUAGES: LANGUAGES_APP,
    language,
    mode: null,
    typeEvent: 'SELECT_LANGUAGE_APP',
    classAdded: 'SelectLanguage__AppLanguage',
    languagesSelected: [{ value: language }],
  }

  return (
    <div
      className={`SideNavigation ${classNameAdd}`}
      onClick={event =>
        handleEvents(event, { typeEvent: 'SET_SIDE_NAVIGATION_LEFT' })
      }
    >
      <div
        className='__content'
        onClick={event =>
          handleEvents(event, { typeEvent: 'STOP_PROPAGATION' })
        }
      >
        <div className='__menuGroup'>
          <div className='_groupItem _languageSelect'>
            <SelectLanguage {...languageSelectProps} />
          </div>
          {getButtons(buttonPropsArr)}
        </div>
      </div>
    </div>
  )
}
