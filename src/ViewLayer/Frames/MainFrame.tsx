import React, { useState, useEffect, useRef, ReactElement } from 'react'

import { Button } from '../Components/Button'
import { HeaderFrame } from '../Frames/HeaderFrame'
import { SideNavigation } from '../Components/SideNavigation'

interface MainFrameArgs {
  screenType?: string
  contentComponentName?: string
  children: any[]
}

export const MainFrame: React.FunctionComponent<MainFrameArgs> = props => {
  const { screenType, contentComponentName, children } = props
  const headerFrameProps = { contentComponentName, children }

  const buttonMdMenuProps = {
    icon: 'MdMenu',
    classAdded: 'Button_MdMenu',
    action: {
      typeEvent: 'TOGGLE_SIDE_NAVIGATION',
    },
  }

  const classAdded = screenType ? `MainFrame_${screenType}` : ''

  return (
    <div className={`MainFrame ${classAdded}`}>
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
        <div className='_left'>{props.children[1]}</div>
        <div className='_main'>
          <div className='_wrapper'>{props.children[2]}</div>
        </div>
        <div className='_right'>{props.children[3]}</div>
      </div>

      {/* <!-- Footer --> */}
      <div className='__comments'>
        <div className='_in'></div>
      </div>
    </div>
  )
}
