import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IRootStore } from '../../Interfaces/IRootStore'
import { Button } from './Button'
import { Input } from './Input'

interface AvatarArgs {}

export const Avatar: React.FunctionComponent<AvatarArgs> = (
  props: AvatarArgs
): ReactElement => {
  const {
    language,
    forms: {
      user: { avatar },
    },
  } = useSelector((store: IRootStore) => store)

  const propsOut = {
    buttonAvatarProps: {
      icon: avatar ? null : 'FaUserCircle',
      icon2: null,
      imageSrc: avatar,
      captureLeft: '',
      captureRight: '',
      classAdded: 'Button_Avatar',
      action: {},
      isDisplaying: true,
      tooltipText: '',
      tooltipPosition: '',
      isTooltipVisible: false,
      isUnderlined: false,
    },
    imageAvatarDefaultProps: {
      classAdded: 'Image_ProfileBody_avatar_default',
      src: avatar,
    },
    imageAvatarProps: {
      classAdded: 'Image_ProfileBody_avatar',
      src: avatar,
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
