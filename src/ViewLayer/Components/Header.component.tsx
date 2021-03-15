import React from 'react'

import { IconContext } from 'react-icons'
import { MdMenu, MdSearch } from 'react-icons/md'
import { IoLogoYoutube } from 'react-icons/io5'

export const Header = () => {
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

  return (
    <div className='Header'>
      <div className='Header__left'>
        <div className='Header__left_menu'>
          <IconContext.Provider value={{ className: 'Header__left_menu_icon' }}>
            <MdMenu />
          </IconContext.Provider>
        </div>
        <div className='Header__left_logo'>
          <div className='Header__left_logo_div'>
            <img
              className='Header__left_logo_div_img'
              src='https://ynm.userto.com/filestorage/logoYunazonV13.png'
            />
          </div>
          <div className='Header__left_logo_brand'>YunAzon</div>
        </div>
      </div>
      <div className='Header__center'>
        <div className='Header__center_search'>
          <input
            className='Header__center_search_input'
            type='text'
            placeholder='Search...'
          />
          <button className='Header__center_search_button' type='button'>
            <IconContext.Provider
              value={{ className: 'Header__center_search_icon' }}
            >
              <MdSearch />
            </IconContext.Provider>
          </button>
        </div>
      </div>
      <div className='Header__right'></div>
    </div>
  )
}
