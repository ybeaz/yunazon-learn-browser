import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Input } from './Input'

interface ProfileBodyArgs {}

export const ProfileBody: React.FunctionComponent<ProfileBodyArgs> = (
  props: ProfileBodyArgs
): ReactElement => {
  const propsOut = {
    inputNameProps: {
      classAdded: '',
      type: 'text',
      placeholder: 'name',
      typeEvent: 'string',
      storeFormProp: 'name',
      storeFormGroup: 'profile',
    },
  }
  return (
    <div className='ProfileBody'>
      <h2>ProfileBody</h2>
      <Input {...propsOut.inputNameProps} />
    </div>
  )
}
