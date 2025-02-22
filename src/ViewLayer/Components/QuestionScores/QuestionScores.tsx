import React, { useEffect, ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'antd'

import { NavLinkWithQuery } from '../../Components/NavLinkWithQuery/NavLinkWithQuery'
import { isParsableFloat } from 'yourails_common'
import { getParsedUrlQuery } from 'yourails_common'
import { getQuestionsWrongAnswered } from 'yourails_common'
import { getParsedUrlQueryBrowserApi } from 'yourails_common'
import { getAnswersChecked2, GetAnswersChecked2OutType } from 'yourails_common'
import { getModuleByModuleID } from 'yourails_common'
import { ScenarioCaseType } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { FormInputNamesWithButtons } from '../FormInputNamesWithButtons/FormInputNamesWithButtons'
import { FormInputNames } from '../FormInputNames/FormInputNames'
import { withStoreStateSelectedYrl, withPropsYrl, ButtonYrl } from 'yourails_common'
import {
  getQuestionScoresPropsOut,
  GetQuestionScoresPropsOutParamsType,
} from './getQuestionScoresPropsOut'

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
  const {
    stopVideoHandler,
    storeStateSlice: {
      language,
      moduleIDActive,
      modules,
      nameFirst,
      nameMiddle,
      nameLast,
      sub,
      isEditNameVisible,
      profiles,
    },
    handleEvents,
  } = props

  // const nameFirst = ''

  const moduleActive = getModuleByModuleID(
    {
      moduleID: moduleIDActive || '',
      modules,
    },
    { parentFunction: 'QuestionScoresComponent' }
  )

  const { passRate, questions: questionsActive } = moduleActive

  const { rp, pr } = getParsedUrlQuery()
  let passRateIn = rp || pr
  passRateIn = passRateIn && isParsableFloat(passRateIn) && parseFloat(passRateIn)
  passRateIn = passRateIn ? passRateIn : passRate
  passRateIn = passRateIn < 0.5 ? 0.5 : passRateIn

  const score: GetAnswersChecked2OutType = getAnswersChecked2(questionsActive, passRateIn)
  const { total, right, result } = score

  let scenarioCase: ScenarioCaseType = result || ScenarioCaseType.failure
  if (!sub && result === ScenarioCaseType.success) {
    scenarioCase = ScenarioCaseType.successNoAuth
  }

  useEffect(() => {
    stopVideoHandler && stopVideoHandler({}, {})

    if (
      scenarioCase === ScenarioCaseType.success ||
      scenarioCase === ScenarioCaseType.successNoAuth
    ) {
      if ((!nameFirst || !nameLast) && sub && profiles.length) {
        handleEvents(
          {},
          { typeEvent: 'SET_EDIT_NAME_VISIBILITY', data: { isEditNameVisible: true } }
        )
      }

      /* TODO: handleEvents is undefined, reasons are unknown and incomprehensible */
      handleEvents({}, { typeEvent: 'TOGGLE_IS_CONFETTI', data: true })

      setTimeout(() => handleEvents({}, { typeEvent: 'TOGGLE_IS_CONFETTI', data: false }), 5000)
    }
  }, [])

  const queryUrl = getParsedUrlQueryBrowserApi()

  const getQuestionScoresPropsOutProps: GetQuestionScoresPropsOutParamsType = {
    modules,
    moduleActive,
    queryUrl,
    handleEvents,
    scenarioCase,
    isEditNameVisible,
    language,
    nameFirst,
    nameMiddle,
    nameLast,

    score,

    sub,
    profiles,
  }

  const propsOut: QuestionScoresPropsOutType = getQuestionScoresPropsOut(
    getQuestionScoresPropsOutProps
  )

  console.info('QuestionScores [142]', { nameFirst, nameLast, isEditNameVisible, modules })

  return (
    <div className='QuestionScores'>
      <div className='_text'>
        <div className='_greeting'>{propsOut.message.greeting}</div>
        <p>{propsOut.message.line1}</p>
        <p>{propsOut.message.line2}</p>
        <p>{propsOut.message.line3}</p>
      </div>

      <div className='_buttons'>
        <NavLinkWithQuery {...propsOut.navLinkNextTaskProps}>
          <ButtonYrl {...propsOut.buttonNextTaskProps} />
        </NavLinkWithQuery>
        <NavLinkWithQuery {...propsOut.navLinkCreditProps}>
          <ButtonYrl {...propsOut.buttonCreditProps} />
        </NavLinkWithQuery>
        <ButtonYrl {...propsOut.buttonIsEditNameVisibleProps} />
        <FormInputNamesWithButtons {...propsOut.formInputNamesWithButtonsProps} />
        <NavLinkWithQuery {...propsOut.navLinkAllMissionsProps}>
          <ButtonYrl {...propsOut.buttonAllMissionsProps} />
        </NavLinkWithQuery>
        <NavLinkWithQuery {...propsOut.navLinkAchievementsProps}>
          <ButtonYrl {...propsOut.buttonAchievementsProps} />
        </NavLinkWithQuery>
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = [
  'language',
  'moduleIDActive',
  'modules',
  'nameFirst',
  'nameMiddle',
  'nameLast',
  'sub',
  'profiles',
  'isEditNameVisible',
]

export const QuestionScores = React.memo(
  withPropsYrl({ handleEvents: handleEventsIn, comp: 'QuestionScores' })(
    withStoreStateSelectedYrl(storeStateSliceProps, QuestionScoresComponent)
  )
)

export type {
  QuestionScoresPropsType,
  QuestionScoresPropsOutType,
  QuestionScoresComponentType,
  QuestionScoresType,
}
