import React, { useEffect, ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

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
import { withStoreStateSelectedYrl } from '../../ComponentsLibrary/'

import {
  QuestionScoresComponentPropsType,
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
  props: QuestionScoresComponentPropsType
) => {
  let navigate = useNavigate()

  const {
    stopVideoHandler,
    storeStateSlice: {
      language,
      documents,
      moduleIDActive,
      courses,
      isDocumentAdded,
      nameFirst,
      nameMiddle,
      nameLast,
    },
  } = props

  const documentsLen = documents.length
  const pathName = documentsLen && documents[documentsLen - 1]?.pathName

  const {
    courseActive: { courseID, capture: courseCapture, description, meta },
    moduleActive,
    questionsActive,
  } = getActiveCourseData(courses, moduleIDActive)
  const { moduleID, contentID, passRate } = moduleActive

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
    courseCapture: courseCapture || '',
    description: description || '',
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
          const { questionID, capture: questionCapture } = question

          return (
            <li key={questionID} className='_li'>
              {questionCapture}
            </li>
          )
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

const storeStateSliceProps: string[] = [
  'language',
  'documents',
  'moduleIDActive',
  'courses',
  'isDocumentAdded',
  'nameFirst',
  'nameMiddle',
  'nameLast',
]
export const QuestionScores = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(QuestionScoresComponent)
)

export type {
  QuestionScoresPropsType,
  QuestionScoresPropsOutType,
  QuestionScoresComponentType,
  QuestionScoresType,
}
