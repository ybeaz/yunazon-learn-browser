import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { SideNavigation } from './SideNavigation'
import { Header } from './Header'

export const MainFrame: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  return (
    <div className='MainFrame'>
      <Header />
      <SideNavigation />

      {/* <!-- Navigation Bar --> */}
      {/* <div className='navbar'>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
      </div> */}

      {/* <!-- The flexible grid (content) --> */}
      <div className='MainFrame__middle'>
        <div className='MainFrame__middle_left'></div>
        <div className='MainFrame__middle_main'>
          <div className='MainFrame__middle_main_wrapper'>
            {props.children[0]}
          </div>
        </div>
        <div className='MainFrame__middle_right'>{props.children[1]}</div>
      </div>

      {/* <!-- Footer --> */}
      <div className='MainFrame__comments'>
        <div className='MainFrame__comments_in'></div>
      </div>
    </div>
  )
}
