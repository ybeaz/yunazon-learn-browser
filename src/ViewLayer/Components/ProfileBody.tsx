import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Image } from './Image'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { IRootStore } from '../../Interfaces/IRootStore'
import { Input } from './Input'

interface ProfileBodyArgs {}

export const ProfileBody: React.FunctionComponent<ProfileBodyArgs> = (
  props: ProfileBodyArgs
): ReactElement => {
  const {
    forms: {
      profile: { avatar },
    },
  } = useSelector((store: IRootStore) => store)

  const propsOut = {
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
    inputNameProps: {
      classAdded: 'Input_ProfileBody_userNameFirst',
      type: 'text',
      placeholder: 'name',
      typeEvent: 'string',
      storeFormProp: 'userNameFirst',
      storeFormGroup: 'profile',
    },
  }

  console.info('ProfileBody [27]', { avatar })

  return (
    <div className='ProfileBody'>
      <h2 className='__title'>Profile</h2>
      <div className='__inputFileBox'>
        <Image {...propsOut.imageAvatarProps} />
        <Input {...propsOut.inputAvatarFileProps} />
      </div>
      <Input {...propsOut.inputNameProps} />
    </div>
  )
}
