import React from 'react'
import { NavLink } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import { ImageYrl, withPropsYrl } from 'yourails_view_layer_web'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { getClasses } from '../../../Shared/getClasses'

import {
  AvatarPlusInfoPropsType,
  AvatarPlusInfoComponentPropsType,
  AvatarPlusInfoPropsOutType,
  AvatarPlusInfoComponentType,
  AvatarPlusInfoType,
} from './AvatarPlusInfoTypes'

/**
 * @description Component to render AvatarPlusInfo
 * @import import { AvatarPlusInfo, AvatarPlusInfoPropsType, AvatarPlusInfoPropsOutType, AvatarPlusInfoType } 
             from '../Components/AvatarPlusInfo/AvatarPlusInfo'
 */
const AvatarPlusInfoComponent: AvatarPlusInfoComponentType = (
  props: AvatarPlusInfoComponentPropsType
) => {
  const { classProps, pathname, handleEvents, typeEvent, imgSrc, capture, text } = props

  const navigate = useNavigate()

  const propsOut: AvatarPlusInfoPropsOutType = {
    imageProps: {
      classAdded: '_avatarPlusInfo',
      handleEvents,
      src: imgSrc,
    },
    navLinkProps: {
      className: getClasses('_link', classProps),
      to: pathname || '/',
      onClick: () =>
        handleEvents(
          {},
          {
            typeEvent: 'GO_LINK_PATH',
            data: { navigate, pathname: '/' },
          }
        ),
    },
  }

  return (
    <div className={getClasses('AvatarPlusInfo', classProps)}>
      <NavLink {...propsOut.navLinkProps}>
        <ImageYrl {...propsOut.imageProps} />
        <div className='_captureText'>
          <div className='_capture'>{capture}</div>
          <div className='_text'>{text}</div>
        </div>
      </NavLink>
    </div>
  )
}

export const AvatarPlusInfo: AvatarPlusInfoType = React.memo(
  withPropsYrl({ handleEvents: handleEventsIn })(AvatarPlusInfoComponent)
)

export type {
  AvatarPlusInfoPropsType,
  AvatarPlusInfoPropsOutType,
  AvatarPlusInfoComponentType,
  AvatarPlusInfoType,
}
