import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { LanguageSelect } from './LanguageSelect'
import { IRootStore } from '../../Interfaces/IRootStore'
import { LogoGroup } from './LogoGroup'
import { Button } from './Button'

export const SideNavigation: React.FunctionComponent<any> = (): JSX.Element => {
  const store = useSelector((store: IRootStore) => store)
  const {
    componentsState: { isSideNavVisible },
  } = store
  let history = useHistory()

  const buttonMdMenuProps = {
    icon: 'MdMenu',
    classAdded: 'Button_MdMenu',
    action: {
      typeEvent: 'TOGGLE_SIDE_NAVIGATION',
    },
  }

  const buttonPropsArr = [
    {
      icon: 'MdHome',
      captureRight: 'Home',
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'GO_HOME', data: { history } },
    },
    {
      icon: 'MdPerson',
      captureRight: 'Personal cabinet',
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'DEV_STAGE' },
    },
    {
      icon: 'MdFlag',
      captureRight: 'About',
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'DEV_STAGE' },
    },
    {
      icon: 'MdAddShoppingCart',
      captureRight: 'Services',
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'DEV_STAGE' },
    },
    {
      icon: 'MdContactMail',
      captureRight: 'Contacts',
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
    <div className={`SideNavigation ${classNameAdd}`}>
      <div className='__buttonLogoGroup'>
        <Button {...buttonMdMenuProps} />
        <LogoGroup />
      </div>
      <div className='__menuGroup'>
        <div className='_groupItem _languageSelect'>
          <LanguageSelect />
        </div>
        {getButtons(buttonPropsArr)}
      </div>
    </div>
  )
}
