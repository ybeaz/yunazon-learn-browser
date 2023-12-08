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
  ResultType,
} from '../../../Shared/getAnswersChecked2'
import { getActiveCourseData } from '../../../Shared/getActiveCourseData'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { getScenarioDict, GetScenarioDictPropsType } from './getScenarioDict'
import { FormInputNames } from '../FormInputNames/FormInputNames'

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
      user: { nameFirst, nameMiddle, nameLast },
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

  const QuestionsWithIncorrectAnswers =
    DICTIONARY.QuestionsWithIncorrectAnswers[language]

  const getScenarioDictProps: GetScenarioDictPropsType = {
    result,
    language,
    right,
    total,
    nameFirst,
    nameMiddle,
    nameLast,
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
    formInputNamesProps: {
      language,
      buttonForwardProps: scenario.buttonForwardProps,
    },
  }

  return (
    <div className='QuestionScores'>
      <div className='_text'>{scenario.message}</div>
      {result === 'success' ? (
        <FormInputNames {...propsOut.formInputNamesProps} />
      ) : null}
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
