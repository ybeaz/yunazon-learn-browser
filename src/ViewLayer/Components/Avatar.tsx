import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootStoreType } from '../../Interfaces/RootStoreType'
import { Button } from '../ComponentsLibrary/Button'
import { Input } from '../ComponentsLibrary/Input'

interface AvatarArgs {}

export const Avatar: React.FunctionComponent<AvatarArgs> = (
  props: AvatarArgs
): ReactElement => {
  const {
    language,
    forms: {
      user: { userAvatar },
    },
  } = useSelector((store: RootStoreType) => store)

  const propsOut = {
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
    },
    imageAvatarDefaultProps: {
      classAdded: 'Image_ProfileBody_avatar_default',
      src: userAvatar,
    },
    imageAvatarProps: {
      classAdded: 'Image_ProfileBody_avatar',
      src: userAvatar,
    },
    inputAvatarFileProps: {
      classAdded: 'Input_ProfileBody_avatar',
      type: 'file',
      placeholder: '',
      typeEvent: 'GET_AVATAR_PATH',
      accept: 'image/png, image/jpeg, image/jpg',
    },
  }

  return (
    <div className='Avatar'>
      <div className={`_row`}>
        <div className='_button'>
          <Button {...propsOut.buttonAvatarProps} />
        </div>
        <div className='_input'>
          <Input {...propsOut.inputAvatarFileProps} />
        </div>
      </div>
    </div>
  )
}
