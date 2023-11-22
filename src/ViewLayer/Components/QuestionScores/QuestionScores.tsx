import React, { useEffect, ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { withPropsYrl } from '../../ComponentsLibrary'
import { getClasses } from '../../../Shared/getClasses'
import { isParsableFloat } from '../../../Shared/isParsableFloat'
import { getParsedUrlQuery } from '../../../Shared/getParsedUrlQuery'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { getQuestionsWrongAnswered } from '../../../Shared/getQuestionsWrongAnswered'
import {
  getAnswersChecked2,
  GetAnswersChecked2OutType,
} from '../../../Shared/getAnswersChecked2'
import { getActiveCourseData } from '../../../Shared/getActiveCourseData'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { InputYrl } from '../../ComponentsLibrary/InputYrl/InputYrl'
import { ButtonYrl } from '../../ComponentsLibrary/ButtonYrl/ButtonYrl'
import { getScenarioDict, GetScenarioDictPropsType } from './getScenarioDict'

import {
  QuestionScoresPropsType,
  QuestionScoresPropsOutType,
  QuestionScoresComponentType,
  QuestionScoresType,
} from './QuestionScoresTypes'

/**
 * @description Component to render QuestionScores
 * @import import { QuestionScores, QuestionScoresPropsType, QuestionScoresPropsOutType, QuestionScoresType } 
             from '../Components/QuestionScores/QuestionScores'
 */
const QuestionScoresComponent: QuestionScoresComponentType = (
  props: QuestionScoresPropsType
) => {
  let navigate = useNavigate()

  const { stopVideoHandler } = props
  const store = useSelector((store2: RootStoreType) => store2)
  const {
    language,
    documents,
    scorm: { moduleIDActive },
    courses,
    componentsState: { isDocumentAdded },
    forms: {
      user: { userNameFirst, userNameMiddle, userNameLast },
    },
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
  } = getActiveCourseData(courses, moduleIDActive)

  const { rp, pr } = getParsedUrlQuery()
  let passRateIn = rp || pr
  passRateIn =
    passRateIn && isParsableFloat(passRateIn) && parseFloat(passRateIn)
  passRateIn = passRateIn ? passRateIn : passRate
  passRateIn = passRateIn < 0.5 ? 0.5 : passRateIn

  const score: GetAnswersChecked2OutType = getAnswersChecked2(
    questionsActive,
    passRateIn
  )
  const questionsWrongAnswered = getQuestionsWrongAnswered(questionsActive)
  const { total, right, wrong } = score
  let result = score.result
  const { moduleID, contentID } = moduleActive

  useEffect(() => {
    stopVideoHandler && stopVideoHandler({}, {})
  }, [])

  useEffect(() => {
    if (pathName && isDocumentAdded === true) {
      handleEvents({}, { typeEvent: 'TOGGLE_IS_DOCUMENT_ADDED', data: false })
      navigate(pathName)
    }
  }, [pathName])

  const lastNameLabel = DICTIONARY.userNameLast[language]
  const firstNameLabel = DICTIONARY.userNameFirst[language]
  const middleNameLabel = DICTIONARY.userNameMiddle[language]

  const QuestionsWithIncorrectAnswers =
    DICTIONARY.QuestionsWithIncorrectAnswers[language]

  const getScenarioDictProps: GetScenarioDictPropsType = {
    result,
    language,
    right,
    total,
    userNameFirst,
    userNameMiddle,
    userNameLast,
    meta,
    courseCapture,
    description,
    courseID,
    moduleID,
    contentID,
  }
  const scenario = getScenarioDict(getScenarioDictProps)

  const getRendedQuestionsWrongAnswered: Function = (
    questions: any[]
  ): ReactElement => {
    return (
      <ul className='_ul'>
        {questions.map(question => {
          const { capture: questionCapture } = question

          return <li className='_li'>{questionCapture}</li>
        })}
      </ul>
    )
  }

  const propsOut: QuestionScoresPropsOutType = {
    inputFirstNameProps: {
      classAdded: 'Input_name',
      type: 'text',
      placeholder: 'first name...',
      typeEvent: 'ONCHANGE_FIRST_NAME_MODAL',
      storeFormGroup: 'user',
      storeFormProp: 'userNameFirst',
    },
    inputMiddleNameProps: {
      classAdded: 'Input_name',
      type: 'text',
      placeholder: 'second name...',
      typeEvent: 'ONCHANGE_MIDDLE_NAME_MODAL',
      storeFormGroup: 'user',
      storeFormProp: 'userNameMiddle',
    },
    inputLastNameProps: {
      classAdded: 'Input_name',
      type: 'text',
      placeholder: 'last name...',
      typeEvent: 'ONCHANGE_LAST_NAME_MODAL',
      storeFormGroup: 'user',
      storeFormProp: 'userNameLast',
    },
  }

  return (
    <div className='QuestionScores'>
      <div className='_text'>{scenario.message}</div>
      <form className='_form'>
        {result === 'success' ? (
          <>
            <div className='_group'>
              <label className='_label'>{lastNameLabel}*</label>
              <InputYrl {...propsOut.inputLastNameProps} />
            </div>
            <div className='_group'>
              <label className='_label'>{firstNameLabel}*</label>
              <InputYrl {...propsOut.inputFirstNameProps} />
            </div>
            <div className='_group'>
              <label className='_label'>{middleNameLabel}</label>
              <InputYrl {...propsOut.inputMiddleNameProps} />
            </div>
          </>
        ) : null}
        <div className='_buttons'>
          {/* <ButtonYrl {...buttonCancelProps} /> */}
          <ButtonYrl {...scenario.buttonForwardProps} />
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

export const QuestionScores = withPropsYrl({})(
  React.memo(QuestionScoresComponent)
)

export type {
  QuestionScoresPropsType,
  QuestionScoresPropsOutType,
  QuestionScoresComponentType,
  QuestionScoresType,
}
