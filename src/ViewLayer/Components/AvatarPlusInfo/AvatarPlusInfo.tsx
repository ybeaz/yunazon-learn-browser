import React from 'react'
import { Link } from 'react-router-dom'

import {
  AvatarPlusInfoPropsType,
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
  props: AvatarPlusInfoPropsType
) => {
  const { typeWrapper, classProps } = props

  const propsOut: AvatarPlusInfoPropsOutType = {}

  return (
    <div className='AvatarPlusInfo'>
      <Link
        className={`LogoGroup LogoGroup_${''}`}
        to={{
          pathname: `/`,
        }}
        // onClick={() => handleEvents({}, { typeEvent: 'CLICK_LOGO_GROUP' })}
      ></Link>
    </div>
  )
}

export const AvatarPlusInfo: AvatarPlusInfoType = React.memo(
  AvatarPlusInfoComponent
)

export type {
  AvatarPlusInfoPropsType,
  AvatarPlusInfoPropsOutType,
  AvatarPlusInfoComponentType,
  AvatarPlusInfoType,
}
