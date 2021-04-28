import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IRootStore } from '../../Interfaces/IRootStore'
import { LogoGroup } from './LogoGroup'
import { Button } from './Button'
import { handleEvents } from '../Hooks/handleEvents'

export const SideNavigation: React.FunctionComponent<any> = (): JSX.Element => {
  const store = useSelector((store: IRootStore) => store)
  const {
    componentsState: { isSideNavVisible },
  } = store
  // console.info('SideNavigation [6]', { isSideNavVisible })

  const buttonMdMenuProps = {
    icon: 'MdMenu',
    classAdded: 'Button_MdMenu',
    handleEvents,
    action: {
      typeEvent: 'TOGGLE_SIDE_NAVIGATION',
    },
  }

  const buttonAboutProps = {
    icon: '',
    captureRight: 'About',
    classAdded: 'Button_sideMenuItems',
    // handleEvents,
    // action: {
    //   typeEvent: '',
    // },
  }

  const buttonServicesProps = {
    icon: '',
    captureRight: 'Services',
    classAdded: 'Button_sideMenuItems',
    // handleEvents,
    // action: {
    //   typeEvent: '',
    // },
  }

  const buttonContactsProps = {
    icon: '',
    captureRight: 'Contacts',
    classAdded: 'Button_sideMenuItems',
    // handleEvents,
    // action: {
    //   typeEvent: '',
    // },
  }

  const classNameAdd = isSideNavVisible ? 'SideNavigation_show' : ''

  return (
    <div className={`SideNavigation ${classNameAdd}`}>
      <div className='__buttonLogoGroup'>
        <Button {...buttonMdMenuProps} />
        <LogoGroup />
      </div>
      <div className='__menuGroup'>
        <Button {...buttonAboutProps} />
        <Button {...buttonServicesProps} />
        <Button {...buttonContactsProps} />
      </div>
    </div>
  )
}
