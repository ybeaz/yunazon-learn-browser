import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'

import { getButtonAuthUserProps } from '../Hooks/getButtonAuthUserProps'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { LANGUAGES_APP } from '../../Constants/languagesApp.const'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { SelectLanguage } from './SelectLanguage'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { Button } from '../ComponentsLibrary/Button'

export const SideNavigation: React.FunctionComponent = (): ReactElement => {
  const store = useSelector((store2: RootStoreType) => store2)
  const {
    forms: { user },
    language,
    componentsState: { isSideNavVisible },
  } = store

  const navigate = useNavigate()

  const buttonAuthUserProps = getButtonAuthUserProps(user, language, 'sideMenu')

  const buttonPropsArr = [
    {
      icon: 'MdHome',
      captureRight: DICTIONARY.Home[language],
      classAdded: 'Button_sideMenuItems',
      action: {
        typeEvent: 'GO_SCREEN',
        data: { history: navigate, path: '/sep' },
      },
      isDisplaying: true,
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
      icon: 'HiOutlineAcademicCap',
      captureRight: DICTIONARY.Academy[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'GO_ACADEMY_SCREEN', data: { history: navigate } },
      isDisplaying: true,
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
    { ...buttonAuthUserProps },
  ]

  const getButtons: Function = (buttonPropsArr2: any[]): ReactElement[] => {
    return buttonPropsArr2.map(buttonProps => {
      const key = nanoid()
      return (
        <div key={key} className='_item'>
          <Button {...buttonProps} />
        </div>
      )
    })
  }

  const classNameAdd = isSideNavVisible ? 'SideNavigation_show' : ''

  const languageSelectProps = {
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
        handleEvents(event, { typeEvent: 'TOGGLE_SIDE_NAVIGATION' })
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
