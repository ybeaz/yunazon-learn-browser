import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { IRootStore } from '../../Interfaces/IRootStore'
import { Button } from '../Components/Button'

interface IModalFrameInput {
  childName: string
  children: React.ReactChildren
}

export const ModalFrame: React.FunctionComponent<any> = (
  props: IModalFrameInput
): JSX.Element => {
  const { childName } = props

  const store = useSelector((store: IRootStore) => store)
  const {
    componentsState: { isModalFrameVisible },
  } = store

  const buttonCloseProps = {
    icon: 'MdClose',
    classAdded: 'Button_MdClose',
    action: { typeEvent: 'CLOSE_MODAL_GET_SCORES' },
  }

  const buttonCancelProps = {
    icon: 'MdForward',
    classAdded: 'Button_MdBackward2',
    action: { typeEvent: 'CLOSE_MODAL_GET_SCORES' },
  }

  const addClass = !isModalFrameVisible ? '' : 'ModalFrame_display'

  return (
    <div
      id='modalFrame'
      className={`ModalFrame ${addClass} ModalFrame_${childName}`}
    >
      <div className='__content'>
        <span className='_close'>
          <Button {...buttonCloseProps} />
        </span>
        <div className='_inner'>{props.children}</div>
      </div>
    </div>
  )
}

// For future authorization

/* <div className='ModalFrame__content_inner_form_group'>
                  <label className='ModalFrame__content_inner_form_group_label'>
                    Email
                  </label>
                  <Input {...inputEmailProps} value={emailModal} />
                </div> */

/* <label>
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
            </p> */
