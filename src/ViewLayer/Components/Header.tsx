import React from 'react'

import { Button } from './Button'
import { IconContext } from 'react-icons'
import { MdPerson, MdMenu, MdSearch } from 'react-icons/md'

export const Header: Function = (): JSX.Element => {
  const handleEvent = (e, eventAction) => {
    const { type } = eventAction
    switch (type) {
      case 'TEST_ACTION':
        {
          // Do something
        }
        break
      default: {
        console.info('Header.component [29]', 'unknown event type', type)
      }
    }
  }

  const buttonMdMenuProps = { icon: 'MdMenu', classAdded: 'Button_MdMenu' }
  const buttonMdSearchProps = {
    icon: 'MdSearch',
    classAdded: 'Button_MdSearch',
  }
  const buttonMdPersonProps = {
    icon: 'MdPerson',
    classAdded: 'Button_MdPerson',
  }

  return (
    <div className='Header'>
      <div className='Header__left'>
        <Button {...buttonMdMenuProps} />
        <div className='Header__left_logo'>
          <div className='Header__left_logo_div'>
            <img
              className='Header__left_logo_div_img'
              src='https://ynm.userto.com/filestorage/logoYunazonV13.png'
            />
          </div>
          <div className='Header__left_logo_brand'>YouRails</div>
        </div>
      </div>
      <div className='Header__main'>
        <div className='Header__main_search'>
          <div className='Header__main_search_div1'>
            <input
              className='Header__main_search_div1_input'
              type='text'
              placeholder='Search...'
            />
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
