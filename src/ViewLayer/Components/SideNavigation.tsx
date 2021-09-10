import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { handleEvents } from '../Hooks/handleEvents'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { LanguageSelect } from './LanguageSelect'
import { IRootStore } from '../../Interfaces/IRootStore'
import { Button } from './Button'

export const SideNavigation: React.FunctionComponent = (): JSX.Element => {
  const store = useSelector((store2: IRootStore) => store2)
  const {
    user,
    language,
    componentsState: { isSideNavVisible },
  } = store

  const status = user?.status

  let history = useHistory()

  const buttonPropsArr = [
    {
      icon: 'MdHome',
      captureRight: DICTIONARY.Home[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'GO_HOME', data: { history } },
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
        status === 'success'
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

  const getButtons: Function = (buttonPropsArr: any[]): JSX.Element[] => {
    return buttonPropsArr.map(buttonProps => {
      return (
        <div className='_item'>
          <Button {...buttonProps} />
        </div>
      )
    })
  }

  const classNameAdd = isSideNavVisible ? 'SideNavigation_show' : ''

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
            <LanguageSelect />
          </div>
          {getButtons(buttonPropsArr)}
        </div>
      </div>
    </div>
  )
}
