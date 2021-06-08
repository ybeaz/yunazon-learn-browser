import React, { useState, useEffect, useRef, ReactElement } from 'react'

import { Button } from '../Components/Button'
import { SideNavigation } from '../Components/SideNavigation'
import { HeaderFrame } from '../Frames/HeaderFrame'

interface IMainFrameInput {
  contentComponentName: string
  children: React.ReactChildren
}

export const MainFrame: React.FunctionComponent<any> = (
  props: IMainFrameInput
): JSX.Element => {
  const { contentComponentName } = props
  const headerFrameProps = { contentComponentName }

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
