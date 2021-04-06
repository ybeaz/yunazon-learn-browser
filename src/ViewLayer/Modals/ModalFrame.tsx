import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getQuestionsWrongAnswered } from '../../Shared/getQuestionsWrongAnswered'
import { getAnswersChecked2 } from '../../Shared/getAnswersChecked2'
import { getActiveCourseData } from '../../Shared/getActiveCourseData'
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
  const {
    courseActive: { capture },
    moduleActive,
    questionsActive,
  } = getActiveCourseData(courses)

  const score = getAnswersChecked2(questionsActive)
  const questionsWrongAnswered = getQuestionsWrongAnswered(questionsActive)
  const { total, right, wrong, result } = score
  console.info('ModalFrame [12]', {
    questionsWrongAnswered,
    questionsActive,
    result,
    capture,
    total,
    right,
    wrong,
    modalGetScores,
  })

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

  const getRendedQuestionsWrongAnswered: Function = (
    questions: any[]
  ): JSX.Element[] => {
    return questions.map(question => {
      const { capture } = question

      return (
        <ul className='ModalFrame__content_inner_qwa_ul'>
          <li className='ModalFrame__content_inner_qwa_ul_li'>{capture}</li>
        </ul>
      )
    })
  }

  const addClass = !modalGetScores ? '' : 'ModalFrame_display'
  const message = {
    success: (
      <>
        <p>Our congratulations!</p>
        <p>You completed the course</p>
        <p>"{capture}"</p>
        <p>
          and passed the test with {right} question from {total}
        </p>
        <p>To receive a certificate, fill the form</p>
      </>
    ),
    failure: (
      <>
        <p>You committed to success.</p>
        <p>
          and this time anwered {right} question from {total}.
        </p>
        <p>This is not enough to complete the course</p>
        <p>and receive the certificate.</p>
        <p>You can try once again</p>
      </>
    ),
  }[result]

  return (
    <div id='modalFrame' className={`ModalFrame ${addClass}`}>
      <div className='ModalFrame__content'>
        <span className='ModalFrame__content_close'>
          <Button {...buttonCloseProps} />
        </span>
        <div className='ModalFrame__content_inner'>
          <div className='ModalFrame__content_inner_text'>{message}</div>

          <form className='ModalFrame__content_inner_form'>
            {result === 'success' ? (
              <>
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
              </>
            ) : null}
            <div className='ModalFrame__content_inner_form_buttons'>
              {/* <Button {...buttonCancelProps} /> */}
              <Button {...buttonForwardProps} />
            </div>
          </form>

          {result === 'failure' ? (
            <div className='ModalFrame__content_inner_qwa'>
              <div>Questions with incorrect answers:</div>
              {getRendedQuestionsWrongAnswered(questionsWrongAnswered)}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
