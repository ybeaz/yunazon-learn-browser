import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { LogoGroup } from './LogoGroup'
import { SearchGroup } from './SearchGroup'
import { Input } from './Input'
import { Button } from './Button'

export const Header: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const buttonMdPersonProps = {
    icon: 'MdPerson',
    classAdded: 'Button_MdPerson',
    // handleEvents,
    // action: { typeEvent: ''}
  }

  return (
    <div className='Header'>
      <div className='Header__left'>
        {props.children[0]}
        <LogoGroup />
      </div>
      <div className='Header__main'>{props.children[1]}</div>
      <div className='Header__right'>
        <Button {...buttonMdPersonProps} />
      </div>
    </div>
  )
}
