import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { LanguageSelect } from './LanguageSelect'
import { IRootStore } from '../../Interfaces/IRootStore'
import { LogoGroup } from './LogoGroup'
import { Button } from './Button'

export const SideNavigation: React.FunctionComponent<any> = (): JSX.Element => {
  const store = useSelector((store: IRootStore) => store)
  const {
    componentsState: { isSideNavVisible },
  } = store
  // console.info('SideNavigation [6]', { isSideNavVisible })

  const buttonMdMenuProps = {
    icon: 'MdMenu',
    classAdded: 'Button_MdMenu',
    action: {
      typeEvent: 'TOGGLE_SIDE_NAVIGATION',
    },
  }

  const buttonMdPersonProps = {
    icon: 'MdPerson',
    captureRight: 'Personal cabinet',
    classAdded: 'Button_sideMenuItems',
    // action: { typeEvent: ''}
  }

  const buttonAboutProps = {
    icon: 'MdFlag',
    captureRight: 'About',
    classAdded: 'Button_sideMenuItems',
    // action: {
    //   typeEvent: '',
    // },
  }

  const buttonServicesProps = {
    icon: 'MdAddShoppingCart',
    captureRight: 'Services',
    classAdded: 'Button_sideMenuItems',
    // action: {
    //   typeEvent: '',
    // },
  }

  const buttonContactsProps = {
    icon: 'MdContactMail',
    captureRight: 'Contacts',
    classAdded: 'Button_sideMenuItems',
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
        <div className='_groupItem _languageSelect'>
          <LanguageSelect />
        </div>
        <div className='_item'>
          <Button {...buttonMdPersonProps} />
        </div>

        <div className='_item'>
          <Button {...buttonAboutProps} />
        </div>
        <div className='_item'>
          <Button {...buttonServicesProps} />
        </div>
        <div className='_item'>
          <Button {...buttonContactsProps} />
        </div>
      </div>
    </div>
  )
}
