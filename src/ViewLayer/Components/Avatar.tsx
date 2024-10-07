import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootStoreType } from '../../Interfaces/RootStoreType'
import {
  withPropsYrl,
  ButtonYrl,
  ButtonYrlPropsType,
  InputYrl,
  InputYrlPropsType,
} from 'yourails_view_layer_web'
import { handleEvents as handleEventsIn, HandleEventType } from '../../DataLayer/index.handleEvents'

type AvatarPropsType = {
  handleEvents: HandleEventType
}

type AvatarPropsOutType = {
  buttonAvatarProps: ButtonYrlPropsType
  inputAvatarFileProps: InputYrlPropsType
}

export const AvatarComponent: React.FunctionComponent<AvatarPropsType> = ({
  handleEvents,
}: AvatarPropsType): ReactElement => {
  const {
    language,
    forms: {
      user: { userAvatar },
    },
  } = useSelector((store: RootStoreType) => store)

  const propsOut: AvatarPropsOutType = {
    buttonAvatarProps: {
      icon: userAvatar ? null : 'FaUserCircle',
      icon2: null,
      imageSrc: userAvatar,
      captureLeft: '',
      captureRight: '',
      classAdded: 'Button_Avatar',
      action: {},
      isDisplaying: true,
      tooltipText: '',
      tooltipPosition: '',
      isTooltipVisibleForced: false,
      isUnderlined: false,
      handleEvents,
    },
    inputAvatarFileProps: {
      classAdded: 'Input_ProfileBody_avatar',
      type: 'file',
      placeholder: '',
      typeEvent: 'GET_AVATAR_PATH',
      accept: 'image/png, image/jpeg, image/jpg',
      handleEvents,
    },
  }

  return (
    <div className='Avatar'>
      <div className={`_row`}>
        <div className='_button'>
          <ButtonYrl {...propsOut.buttonAvatarProps} />
        </div>
        <div className='_input'>
          <InputYrl {...propsOut.inputAvatarFileProps} />
        </div>
      </div>
    </div>
  )
}

export const Avatar: React.FunctionComponent<AvatarPropsType> = withPropsYrl({
  handleEvents: handleEventsIn,
})(React.memo(AvatarComponent))
