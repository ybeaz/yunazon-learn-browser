import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAnswersChecked2 } from '../../Shared/getAnswersChecked2'
import { getQuestionsActive } from '../../Shared/getQuestionsActive'
import { handleEvents } from '../Hooks/handleEvents'
import { RootStore } from '../../@types/RootStore'
import { Input } from '../Components/Input'
import { Button } from '../Components/Button'

export const ModalFrame: Function = (props: any): JSX.Element => {
  const store = useSelector((store: RootStore) => store)
  const {
    modalsState: { modalGetScores },
    courses,
  } = store
  const questions = getQuestionsActive(courses)

  const score = getAnswersChecked2(questions)
  const { total, right, wrong } = score
  // console.info('ModalFrame [12]', { total, right, wrong, modalGetScores })

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

  const buttonForwardProps = {
    icon: 'MdForward',
    classAdded: 'Button_MdForward2',
    // handleEvents: () => { },
    // action: {},
  }

  const addClass = !modalGetScores ? '' : 'ModalFrame_display'

  return (
    <div id='modalFrame' className={`ModalFrame ${addClass}`}>
      <div className='ModalFrame__content'>
        <span className='ModalFrame__content_close'>
          <Button {...buttonCloseProps} />
        </span>
        <div className='ModalFrame__content_inner'>
          <div className='ModalFrame__content_inner_text'>
            Our congratulations!
            <br />
            You answered right of {right} question from {total} and passed the
            test
            <br />
            To receive a certificate, fill the form
          </div>

          <form className='ModalFrame__content_inner_form'>
            <div className='ModalFrame__content_inner_form_group'>
              <label className='ModalFrame__content_inner_form_group_label'>
                Your name
              </label>
              <Input {...inputNameProps} />
            </div>

            <div className='ModalFrame__content_inner_form_group'>
              <label className='ModalFrame__content_inner_form_group_label'>
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

            <div className='ModalFrame__content_inner_form_buttons'>
              {/* <Button {...buttonCancelProps} /> */}
              <Button {...buttonForwardProps} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
