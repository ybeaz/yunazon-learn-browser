import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { getQuesionString } from '../../Shared/getQuesionString'
import { DICTIONARY } from '../../Constants/dictionary.const'
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
    language,
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
  const { total, right, wrong, result } = score
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

  const ToReceiveCertificate = DICTIONARY.ToReceiveCertificate[language]
  const correctAnsweresFrom = DICTIONARY.correctAnsweresFrom[language]
  const andPassedTheTestWith = DICTIONARY.andPassedTheTestWith[language]
  const YouCompletedTheCourse = DICTIONARY.YouCompletedTheCourse[language]
  const Congratulations = DICTIONARY.Congratulations[language]

  const lastNameLabel = DICTIONARY.lastName[language]
  const firstNameLabel = DICTIONARY.firstName[language]
  const middleNameLabel = DICTIONARY.middleName[language]

  const QuestionsWithIncorrectAnswers =
    DICTIONARY.QuestionsWithIncorrectAnswers[language]
  const YouCanTryOnceAgain = DICTIONARY.YouCanTryOnceAgain[language]
  const andReceiveTheCertificate = DICTIONARY.andReceiveTheCertificate[language]
  const ThisIsNotEnough = DICTIONARY.ThisIsNotEnough[language]
  const from = DICTIONARY.from[language]
  const andThisTimeAnswered = DICTIONARY.andThisTimeAnswered[language]
  const YouWereCommittedToSuccess =
    DICTIONARY.YouWereCommittedToSuccess[language]
  const WeGreetYou = DICTIONARY.WeGreetYou[language]

  const question = getQuesionString(language, right)

  const scenario = {
    success: {
      message: (
        <>
          <div className='_greet'>{Congratulations}</div>
          <p>{YouCompletedTheCourse}</p>
          <p>"{capture}"</p>
          <p>
            {andPassedTheTestWith} {right} {correctAnsweresFrom} {total}
          </p>
          <p>{ToReceiveCertificate}</p>
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
          <div className='_greet'>{YouWereCommittedToSuccess}</div>
          <p>
            {andThisTimeAnswered} {right} {question} {from} {total}.
          </p>
          <p>{ThisIsNotEnough}</p>
          <p>{andReceiveTheCertificate}</p>
          <p>{YouCanTryOnceAgain}</p>
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
              <label className='_label'>{lastNameLabel}*</label>
              <Input {...inputLastNameProps} value={lastName} />
            </div>
            <div className='_group'>
              <label className='_label'>{firstNameLabel}*</label>
              <Input {...inputFirstNameProps} value={firstName} />
            </div>
            <div className='_group'>
              <label className='_label'>{middleNameLabel}</label>
              <Input {...inputMiddleNameProps} value={middleName} />
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
          <div className='_capture'>{QuestionsWithIncorrectAnswers}</div>
          {getRendedQuestionsWrongAnswered(questionsWrongAnswered)}
        </div>
      ) : null}
    </div>
  )
}
