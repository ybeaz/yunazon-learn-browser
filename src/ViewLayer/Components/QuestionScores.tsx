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

export const QuestionScores: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  let history = useHistory()

  const { stopVideoHandler } = props
  const store = useSelector((store: IRootStore) => store)
  const {
    documents,
    courses,
    componentsState: { isDocumentAdded },
    forms: { userNameModal },
  } = store

  const { firstName, middleName, lastName } = userNameModal
  const slug = documents[0]?.slug

  const {
    courseActive: { courseID, capture, description, meta },
    moduleActive,
    questionsActive,
  } = getActiveCourseData(courses)

  const score = getAnswersChecked2(questionsActive)
  const questionsWrongAnswered = getQuestionsWrongAnswered(questionsActive)
  const { total, right, wrong, result: result2 } = score
  let result = 'success'
  const { moduleID, ytID: videoId } = moduleActive

  useEffect(() => {
    stopVideoHandler({}, {})
  }, [])

  useEffect(() => {
    if (slug && isDocumentAdded === true) {
      handleEvents({}, { typeEvent: 'TOGGLE_IS_DOCUMENT_ADDED', data: false })
      history.push(slug)
    }
  }, [slug])

  const inputFirstNameProps = {
    classAdded: 'Input_name',
    type: 'text',
    placeholder: 'first name...',
    handleEvents,
    action: { typeEvent: 'ONCHANGE_FIRST_NAME_MODAL' },
  }

  const inputMiddleNameProps = {
    classAdded: 'Input_name',
    type: 'text',
    placeholder: 'second name...',
    handleEvents,
    action: { typeEvent: 'ONCHANGE_MIDDLE_NAME_MODAL' },
  }

  const inputLastNameProps = {
    classAdded: 'Input_name',
    type: 'text',
    placeholder: 'last name...',
    handleEvents,
    action: { typeEvent: 'ONCHANGE_LAST_NAME_MODAL' },
  }

  const scenario = {
    success: {
      message: (
        <>
          <div className='_greet'>Congratulations!</div>
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
            userName: userNameModal,
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
          <div className='_greet'>You committed to success.</div>
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

  return (
    <div className='QuestionScores'>
      {' '}
      <div className='_text'>{scenario.message}</div>
      <form className='_form'>
        {result === 'success' ? (
          <>
            <div className='_group'>
              <label className='_label'>Your first name</label>
              <Input {...inputFirstNameProps} value={firstName} />
            </div>
            <div className='_group'>
              <label className='_label'>Your middle name</label>
              <Input {...inputMiddleNameProps} value={middleName} />
            </div>
            <div className='_group'>
              <label className='M_label'>Your last name</label>
              <Input {...inputLastNameProps} value={lastName} />
            </div>
          </>
        ) : null}
        <div className='_buttons'>
          {/* <Button {...buttonCancelProps} /> */}
          <Button {...scenario.buttonForwardProps} />
        </div>
      </form>
      {result === 'failure' ? (
        <div className='_qwa'>
          <div className='_capture'>Questions with incorrect answers:</div>
          {getRendedQuestionsWrongAnswered(questionsWrongAnswered)}
        </div>
      ) : null}
    </div>
  )
}
