import React from 'react'

import { Button } from '../Components/Button'
import { FooterFrame } from './FooterFrame'
import { HeaderFrame } from './HeaderFrame'
import { SideNavigation } from '../Components/SideNavigation'

interface MainFrameArgs {
  brandName: string
  screenType?: string
  contentComponentName?: string
  children: any[]
}

export const MainFrame: React.FunctionComponent<MainFrameArgs> = props => {
  const { brandName, screenType, contentComponentName, children } = props
  const headerFrameProps = { brandName, contentComponentName, children }

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
      <FooterFrame>{props.children[4]}</FooterFrame>
    </div>
  )
}
