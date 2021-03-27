import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../@types/RootState'

import { LogoGroup } from './LogoGroup'
import { Button } from './Button'
import { handleEvents } from '../Hooks/handleEvents'

export const SideNavigation: Function = (): JSX.Element => {
  const store = useSelector((store: RootState) => store)
  const { sideNavigationState } = store
  // console.info('SideNavigation [6]', { sideNavigationState })

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
    capture: 'About',
    classAdded: 'Button_sideMenuItems',
    // handleEvents,
    // action: {
    //   typeEvent: '',
    // },
  }

  const buttonServicesProps = {
    icon: '',
    capture: 'Services',
    classAdded: 'Button_sideMenuItems',
    // handleEvents,
    // action: {
    //   typeEvent: '',
    // },
  }

  const buttonContactsProps = {
    icon: '',
    capture: 'Contacts',
    classAdded: 'Button_sideMenuItems',
    // handleEvents,
    // action: {
    //   typeEvent: '',
    // },
  }

  const classNameAdd = sideNavigationState ? 'SideNavigation_show' : ''

  return (
    <div className={`SideNavigation ${classNameAdd}`}>
      <div className='SideNavigation__buttonLogoGroup'>
        <Button {...buttonMdMenuProps} />
        <LogoGroup />
      </div>
      <div className='SideNavigation__menuGroup'>
        <Button {...buttonAboutProps} />
        <Button {...buttonServicesProps} />
        <Button {...buttonContactsProps} />
      </div>
    </div>
  )
}
