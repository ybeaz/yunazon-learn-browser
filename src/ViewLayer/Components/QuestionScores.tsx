import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { isParsableFloat } from '../../Shared/isParsableFloat'
import { getParsedUrlQuery } from '../../Shared/getParsedUrlQuery'
import { getQuesionString } from '../../Shared/getQuesionString'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { getQuestionsWrongAnswered } from '../../Shared/getQuestionsWrongAnswered'
import { getAnswersChecked2 } from '../../Shared/getAnswersChecked2'
import { getActiveCourseData } from '../../Shared/getActiveCourseData'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { IRootStore } from '../../Interfaces/IRootStore'
import { Input } from '../Components/Input'
import { Button } from '../Components/Button'

export const QuestionScores: React.FunctionComponent<any> = props => {
  let history = useHistory()

  const { stopVideoHandler } = props
  const store = useSelector((store2: IRootStore) => store2)
  const {
    language,
    documents,
    courses,
    componentsState: { isDocumentAdded },
    forms: { firstName, middleName, lastName },
  } = store

  const documentsLen = documents.length
  const pathName = documentsLen && documents[documentsLen - 1]?.pathName

  const {
    courseActive: {
      passRate,
      courseID,
      capture: courseCapture,
      description,
      meta,
    },
    moduleActive,
    questionsActive,
  } = getActiveCourseData(courses)

  const { rp, pr } = getParsedUrlQuery()
  let passRateIn = rp || pr
  passRateIn =
    passRateIn && isParsableFloat(passRateIn) && parseFloat(passRateIn)
  passRateIn = passRateIn ? passRateIn : passRate
  passRateIn = passRateIn < 0.5 ? 0.5 : passRateIn

  const score = getAnswersChecked2(questionsActive, passRateIn)
  const questionsWrongAnswered = getQuestionsWrongAnswered(questionsActive)
  const { total, right, wrong, result } = score
  const { moduleID, contentID } = moduleActive

  useEffect(() => {
    stopVideoHandler && stopVideoHandler({}, {})
  }, [])

  useEffect(() => {
    if (pathName && isDocumentAdded === true) {
      handleEvents({}, { typeEvent: 'TOGGLE_IS_DOCUMENT_ADDED', data: false })
      history.push(pathName)
    }
  }, [pathName])

  const inputFirstNameProps = {
    classAdded: 'Input_name',
    type: 'text',
    placeholder: 'first name...',
    typeEvent: 'ONCHANGE_FIRST_NAME_MODAL',
    storeFormProp: 'firstName',
  }

  const inputMiddleNameProps = {
    classAdded: 'Input_name',
    type: 'text',
    placeholder: 'second name...',
    typeEvent: 'ONCHANGE_MIDDLE_NAME_MODAL',
    storeFormProp: 'middleName',
  }

  const inputLastNameProps = {
    classAdded: 'Input_name',
    type: 'text',
    placeholder: 'last name...',
    typeEvent: 'ONCHANGE_LAST_NAME_MODAL',
    storeFormProp: 'lastName',
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
          <p>"{courseCapture}"</p>
          <p>
            {andPassedTheTestWith} {right} {correctAnsweresFrom} {total}
          </p>
          <p>{ToReceiveCertificate}</p>
        </>
      ),
      buttonForwardProps: {
        icon: 'MdForward',
        classAdded: 'Button_MdForward2',
        action: {
          typeEvent: 'ADD_DOCUMENT',
          data: {
            screenType: 'Certificate',
            firstName,
            middleName,
            lastName,
            meta,
            capture: courseCapture,
            description,
            courseID,
            moduleID,
            contentID,
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
        action: {
          typeEvent: 'CLOSE_MODAL_GET_SCORES',
        },
      },
    },
  }[result]

  const getRendedQuestionsWrongAnswered: Function = (
    questions: any[]
  ): JSX.Element => {
    return (
      <ul className='_ul'>
        {questions.map(question => {
          const { capture: questionCapture } = question

          return <li className='_li'>{questionCapture}</li>
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
              <Input {...inputLastNameProps} />
            </div>
            <div className='_group'>
              <label className='_label'>{firstNameLabel}*</label>
              <Input {...inputFirstNameProps} />
            </div>
            <div className='_group'>
              <label className='_label'>{middleNameLabel}</label>
              <Input {...inputMiddleNameProps} />
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
