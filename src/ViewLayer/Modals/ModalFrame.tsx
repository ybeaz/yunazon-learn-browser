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
  const { stopVideoHandler } = props
  const store = useSelector((store: RootStore) => store)
  const {
    courses,
    componentsState: { modalGetScores },
    forms: { nameModal, emailModal },
  } = store

  const {
    courseActive: { courseID, capture, description, meta },
    moduleActive,
    questionsActive,
  } = getActiveCourseData(courses)

  const score = getAnswersChecked2(questionsActive)
  const questionsWrongAnswered = getQuestionsWrongAnswered(questionsActive)
  const { total, right, wrong, result2 } = score
  let result = 'success'
  const { moduleID, ytID: videoId } = moduleActive

  useEffect(() => {
    stopVideoHandler({}, {})
  }, [])

  const inputNameProps = {
    classAdded: 'Input_name',
    type: 'text',
    placeholder: 'name...',
    handleEvents,
    action: { typeEvent: 'ONCHANGE_NAME_MODAL' },
  }

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

  const getRendedQuestionsWrongAnswered: Function = (
    questions: any[]
  ): JSX.Element => {
    return (
      <ul className='ModalFrame__content_inner_qwa_ul'>
        {questions.map(question => {
          const { capture } = question

          return (
            <li className='ModalFrame__content_inner_qwa_ul_li'>{capture}</li>
          )
        })}
      </ul>
    )
  }

  const addClass = !modalGetScores ? '' : 'ModalFrame_display'

  const scenario = {
    success: {
      message: (
        <>
          <div className='ModalFrame__content_inner_text_greet'>
            Congratulations!
          </div>
          <p>You completed the course</p>
          <p>"{capture}"</p>
          <p>
            and passed the test with {right} correct answeres from {total}
          </p>
          <p>To receive a certificate, fill the form</p>
        </>
      ),
      buttonForwardProps: {
        icon: 'MdForward',
        classAdded: 'Button_MdForward2',
        handleEvents,
        action: {
          typeEvent: 'ADD_DOCUMENT',
          data: {
            screenType: 'Certificate',
            userName: nameModal,
            userEmail: emailModal,
            meta,
            capture,
            description,
            courseID,
            moduleID,
            contentID: videoId,
          },
        },
      },
    },
    failure: {
      message: (
        <>
          <div className='ModalFrame__content_inner_text_greet'>
            You committed to success.
          </div>
          <p>
            and this time anwered {right} question from {total}.
          </p>
          <p>This is not enough to complete the course</p>
          <p>and receive the certificate.</p>
          <p>You can try once again</p>
        </>
      ),
      buttonForwardProps: {
        icon: 'MdForward',
        classAdded: 'Button_MdForward2',
        handleEvents,
        action: { typeEvent: 'CLOSE_MODAL_GET_SCORES' },
      },
    },
  }[result]

  return (
    <div id='modalFrame' className={`ModalFrame ${addClass}`}>
      <div className='ModalFrame__content'>
        <span className='ModalFrame__content_close'>
          <Button {...buttonCloseProps} />
        </span>
        <div className='ModalFrame__content_inner'>
          <div className='ModalFrame__content_inner_text'>
            {scenario.message}
          </div>

          <form className='ModalFrame__content_inner_form'>
            {result === 'success' ? (
              <>
                <div className='ModalFrame__content_inner_form_group'>
                  <label className='ModalFrame__content_inner_form_group_label'>
                    Your name
                  </label>
                  <Input {...inputNameProps} value={nameModal} />
                </div>

                {/* <div className='ModalFrame__content_inner_form_group'>
                  <label className='ModalFrame__content_inner_form_group_label'>
                    Email
                  </label>
                  <Input {...inputEmailProps} value={emailModal} />
                </div> */}
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
              <Button {...scenario.buttonForwardProps} />
            </div>
          </form>

          {result === 'failure' ? (
            <div className='ModalFrame__content_inner_qwa'>
              <div className='ModalFrame__content_inner_qwa_capture'>
                Questions with incorrect answers:
              </div>
              {getRendedQuestionsWrongAnswered(questionsWrongAnswered)}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
