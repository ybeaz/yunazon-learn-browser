import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Input } from './Input'
import { LogoGroup } from './LogoGroup'
import { Button } from './Button'
import { handleEvents } from '../Hooks/handleEvents'

export const Header: Function = (): JSX.Element => {
  const buttonMdMenuProps = {
    icon: 'MdMenu',
    classAdded: 'Button_MdMenu',
    handleEvents,
    action: {
      typeEvent: 'TOGGLE_SIDE_NAVIGATION',
    },
  }

  const inputSearchProps = {
    classAdded: 'Input_search',
    type: 'text',
    placeholder: 'Search...',
    // handleEvents,
    // action: { typeEvent: ''}
  }

  const buttonMdSearchProps = {
    icon: 'MdSearch',
    classAdded: 'Button_MdSearch',
    // handleEvents,
    // action: { typeEvent: ''}
  }
  const buttonMdPersonProps = {
    icon: 'MdPerson',
    classAdded: 'Button_MdPerson',
    // handleEvents,
    // action: { typeEvent: ''}
  }

  return (
    <div className='Header'>
      <div className='Header__left'>
        <Button {...buttonMdMenuProps} />
        <LogoGroup />
      </div>
      <div className='Header__main'>
        <div className='Header__main_search'>
          <div className='Header__main_search_div1'>
            <Input {...inputSearchProps} />
          </div>
          <Button {...buttonMdSearchProps} />
        </div>
      </div>
      <div className='Header__right'>
        <Button {...buttonMdPersonProps} />
      </div>
    </div>
  )
}
