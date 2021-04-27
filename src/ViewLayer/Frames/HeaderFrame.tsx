import React from 'react'

import { LanguageSelect } from '../Components/LanguageSelect'
import { LogoGroup } from '../Components/LogoGroup'
import { Button } from '../Components/Button'

export const HeaderFrame: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const buttonMdPersonProps = {
    icon: 'MdPerson',
    classAdded: 'Button_MdPerson',
    // handleEvents,
    // action: { typeEvent: ''}
  }

  return (
    <div className='HeaderFrame'>
      <div className='__left'>
        {props.children[0]}
        <LogoGroup />
      </div>
      <div className='__main'>{props.children[1]}</div>
      <div className='__right'>
        <div className='_item'>
          <Button {...buttonMdPersonProps} />
        </div>
        <div className='_item'>
          <LanguageSelect />
        </div>
      </div>
    </div>
  )
}
