import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { handleEvents } from '../../DataLayer/index.handleEvents'
import { LANGUAGES_APP } from '../../Constants/languagesApp.const'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { SelectLanguage } from './SelectLanguage'
import { IRootStore } from '../../Interfaces/IRootStore'
import { Button } from './Button'

export const SideNavigation: React.FunctionComponent = (): ReactElement => {
  const store = useSelector((store2: IRootStore) => store2)
  const {
    forms: { user },
    language,
    componentsState: { isSideNavVisible },
  } = store

  const userStatus = user?.userStatus

  let history = useHistory()

  const buttonPropsArr = [
    {
      icon: 'MdHome',
      captureRight: DICTIONARY.Home[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'GO_HOME', data: { history, path: '/sep' } },
    },
    {
      icon: 'HiOutlineAcademicCap',
      captureRight: DICTIONARY.Academy[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'GO_ACADEMY_SCREEN', data: { history } },
    },
    {
      icon: 'MdQueue',
      captureRight: DICTIONARY.createCourseQuiz[language],
      classAdded: 'Button_sideMenuItems',
      action: {
        typeEvent: 'CREATE_COURSE',
        data: { contentComponentName: 'SideNavigation' },
      },
    },
    {
      icon: 'MdPerson',
      captureRight: DICTIONARY.PersonalСabinet[language],
      classAdded:
        userStatus === 'success'
          ? 'Button_sideMenuItems Button_personalCabinet_authorized'
          : 'Button_sideMenuItems',
      action: { typeEvent: 'DEV_STAGE' },
    },
    {
      icon: 'MdFlag',
      captureRight: DICTIONARY.About[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'DEV_STAGE' },
    },
    {
      icon: 'MdAddShoppingCart',
      captureRight: DICTIONARY.Services[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'DEV_STAGE' },
    },
    {
      icon: 'MdContactMail',
      captureRight: DICTIONARY.Contacts[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'DEV_STAGE' },
    },
  ]

  const getButtons: Function = (buttonPropsArr2: any[]): ReactElement[] => {
    return buttonPropsArr2.map(buttonProps => {
      return (
        <div className='_item'>
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
