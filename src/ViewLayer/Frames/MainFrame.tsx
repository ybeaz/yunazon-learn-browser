import React, { useState, useEffect, useRef, ReactElement } from 'react'

import { Button } from '../Components/Button'
import { HeaderFrame } from '../Frames/HeaderFrame'
import { SideNavigation } from '../Components/SideNavigation'

interface MainFrameArgs {
  contentComponentName?: string
  children: any[]
}

export const MainFrame: React.FunctionComponent<MainFrameArgs> = props => {
  const { contentComponentName, children } = props
  const headerFrameProps = { contentComponentName, children }

  const buttonMdMenuProps = {
    icon: 'MdMenu',
    classAdded: 'Button_MdMenu',
    action: {
      typeEvent: 'TOGGLE_SIDE_NAVIGATION',
    },
  }

  return (
    <div className='MainFrame'>
      <HeaderFrame {...headerFrameProps}>
        <Button {...buttonMdMenuProps} />
        {props.children[0]}
      </HeaderFrame>
      <SideNavigation />

      {/* <!-- Navigation Bar --> */}
      {/* <div className='navbar'>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
      </div> */}

      {/* <!-- The flexible grid (content) --> */}
      <div className='__middle'>
        <div className='_left'></div>
        <div className='_main'>
          <div className='_wrapper'>{props.children[1]}</div>
        </div>
        <div className='_right'>{props.children[2]}</div>
      </div>

      {/* <!-- Footer --> */}
      <div className='__comments'>
        <div className='_in'></div>
      </div>
    </div>
  )
}
