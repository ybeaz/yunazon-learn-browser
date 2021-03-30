import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Input } from '../Components/Input'
import { Button } from '../Components/Button'

export const ModalFrame: Function = (props: any): JSX.Element => {
  const inputNameProps = {
    classAdded: 'Input_name',
    type: 'text',
    placeholder: 'name...',
    // handleEvents,
    // action: { typeEvent: ''}
  }

  const inputEmailProps = {
    classAdded: 'Input_email',
    type: 'email',
    placeholder: 'email...',
    // handleEvents,
    // action: { typeEvent: ''}
  }

  const buttonCancelProps = {
    icon: 'MdForward',
    classAdded: 'Button_MdBackward2',
    // handleEvents,
    // action: { typeEvent: ''}
  }

  const buttonForwardProps = {
    icon: 'MdForward',
    classAdded: 'Button_MdForward2',
    // handleEvents: () => { },
    // action: {},
  }

  return (
    <div id='modalFrame' className='ModalFrame'>
      <div className='ModalFrame__content'>
        <span className='ModalFrame__content_close'>&times;</span>
        <form className='ModalFrame__content_form'>
          <div className='ModalFrame__content_form_group'>
            <label className='ModalFrame__content_form_group_label'>
              Your name
            </label>
            <Input {...inputNameProps} />
          </div>

          <div className='ModalFrame__content_form_group'>
            <label className='ModalFrame__content_form_group_label'>
              Email
            </label>
            <Input {...inputEmailProps} />
          </div>
          {/* <label>
              <b>Password</b>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='psw'
              required
            />
            <p>
              By creating an account you agree to our{' '}
              <a href='#'>Terms Privacy</a>.
            </p> */}

          <div className='ModalFrame__content_form_buttons'>
            <Button {...buttonCancelProps} />
            <Button {...buttonForwardProps} />
          </div>
        </form>
      </div>
    </div>
  )
}
