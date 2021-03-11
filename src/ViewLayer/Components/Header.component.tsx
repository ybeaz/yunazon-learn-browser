import React from 'react'

import { FaBeer } from 'react-icons/fa'
import './Header.style.less'

export const Header = () => {
  return (
    <div className='Header'>
      <div className='Header__logo_wrapper'>
        <img
          className='Header__logo_img'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKc_gf3X6_vpkYExiU-FCQKGRbyyWHRGwBg&usqp=CAU'
        />
      </div>
      <div className='Header__input_wrapper'>
        <h3>
          {' '}
          Lets go for a <FaBeer />?{' '}
        </h3>
        <input type='text' placeholder='Search..' />
        <button className='Header__button_search' type='button'>
          <i className='Header__search_icon fa fa-search'></i>
        </button>
      </div>
    </div>
  )
}
