import React from 'react'

import { LanguageSelect } from '../Components/LanguageSelect'
import { LogoGroup } from '../Components/LogoGroup'
interface IHeaderFrameInput {
  contentComponentName: string
  children: React.ReactChildren
}

export const HeaderFrame: React.FunctionComponent<any> = (
  props: IHeaderFrameInput
): JSX.Element => {
  const { contentComponentName } = props

  const buttonMdPersonProps = {
    icon: 'MdPerson',
    classAdded: 'Button_MdPerson',
    // action: { typeEvent: ''}
  }

  const classAddHeaderFrame =
    contentComponentName === 'ReaderIframe' ||
    contentComponentName === 'PlayerIframe'
      ? 'HeaderFrame_PresentAndSubscribe'
      : ''

  return (
    <div className={`HeaderFrame ${classAddHeaderFrame}`}>
      <div className='__left'>
        {props.children[0]}
        <LogoGroup />
      </div>
      <div className='__main'>{props.children[1]}</div>
      <div className='__right'>
        <div className='_item'>
          <LanguageSelect />
        </div>
      </div>
    </div>
  )
}
