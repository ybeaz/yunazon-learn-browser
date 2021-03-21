import React from 'react'

import { IconContext } from 'react-icons'
import { MdPerson, MdMenu, MdSearch } from 'react-icons/md'
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
          <div className='Header__center_search_div1'>
            <input
              className='Header__center_search_div1_input'
              type='text'
              placeholder='Search...'
            />
          </div>
          <div className='Header__center_search_div2'>
            <button className='Header__center_search_div2_button' type='button'>
              <IconContext.Provider
                value={{ className: 'Header__center_search_div2_button_icon' }}
              >
                <MdSearch />
              </IconContext.Provider>
            </button>
          </div>
        </div>
      </div>
      <div className='Header__right'>
        <div className='Header__right_user'>
          <button className='Header__right_user_button' type='button'>
            <IconContext.Provider
              value={{ className: 'Header__right_user_button_icon' }}
            >
              <MdPerson />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  )
}
