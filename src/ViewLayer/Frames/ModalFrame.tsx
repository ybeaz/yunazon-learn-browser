import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import * as action from '../../DataLayer/index.action'
import { getQuestionsWrongAnswered } from '../../Shared/getQuestionsWrongAnswered'
import { getAnswersChecked2 } from '../../Shared/getAnswersChecked2'
import { getActiveCourseData } from '../../Shared/getActiveCourseData'
import { handleEvents } from '../Hooks/handleEvents'
import { IRootStore } from '../../Interfaces/IRootStore'
import { Input } from '../Components/Input'
import { Button } from '../Components/Button'

export const ModalFrame: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const store = useSelector((store: IRootStore) => store)
  const {
    componentsState: { isModalFrameVisible },
  } = store

  const inputEmailProps = {
    classAdded: 'Input_email',
    type: 'email',
    placeholder: 'email...',
    handleEvents,
    action: { typeEvent: 'ONCHANGE_EMAIL_MODAL' },
  }

  const buttonCloseProps = {
    icon: 'MdClose',
    classAdded: 'Button_MdClose',
    handleEvents,
    action: { typeEvent: 'CLOSE_MODAL_GET_SCORES' },
  }

  const buttonCancelProps = {
    icon: 'MdForward',
    classAdded: 'Button_MdBackward2',
    handleEvents,
    action: { typeEvent: 'CLOSE_MODAL_GET_SCORES' },
  }

  const addClass = !isModalFrameVisible ? '' : 'ModalFrame_display'

  return (
    <div id='modalFrame' className={`ModalFrame ${addClass}`}>
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
