import React from 'react'

import { NavLinkWithQuery } from '../../Components/NavLinkWithQuery/NavLinkWithQuery'
import { useNavigate } from 'react-router-dom'
import { ImageYrl, withPropsYrl } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { getClasses } from 'yourails_common'

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
  const {
    classProps,
    pathname,
    handleEvents,
    typeEvent,
    imgSrc,
    capture,
    text,
    isTitle = false,
  } = props

  const navigate = useNavigate()

  const propsOut: AvatarPlusInfoPropsOutType = {
    imageProps: {
      classAdded: '_avatarPlusInfo',
      handleEvents,
      action: {
        typeEvent: null,
        data: {},
      },
      src: imgSrc,
      alt: capture,
    },
    navLinkProps: {
      className: getClasses('_link', classProps),
      to: { pathname: pathname || '/' },
    },
  }

  return (
    <div className={getClasses('AvatarPlusInfo', classProps)}>
      <NavLinkWithQuery {...propsOut.navLinkProps}>
        <ImageYrl {...propsOut.imageProps} />
        <div className='_captureText'>
          {isTitle ? (
            <>
              <h1 className='_capture'>{capture}</h1>
              <h2 className='_text'>{text}</h2>
            </>
          ) : (
            <>
              <div className='_capture'>{capture}</div>
              <div className='_text'>{text}</div>
            </>
          )}
        </div>
      </NavLinkWithQuery>
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
