import React, { useEffect, ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'antd'

import { NavLinkWithQuery } from '../../Components/NavLinkWithQuery/NavLinkWithQuery'
import { isParsableFloat } from 'yourails_common'
import { getParsedUrlQuery } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import { getQuestionsWrongAnswered } from 'yourails_common'
import { getParsedUrlQueryBrowserApi } from 'yourails_common'
import { getAnswersChecked2, GetAnswersChecked2OutType } from 'yourails_common'
import { getModuleByModuleID } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { getScenarioDict } from './getScenarioDict'
import { FormInputNames } from '../FormInputNames/FormInputNames'
import { getMapJourneyData } from 'yourails_common'
import { withStoreStateSelectedYrl, withPropsYrl, ButtonYrl } from 'yourails_common'
import { getQuestionScoresPropsOut } from './getQuestionScoresPropsOut'

import {
  GetScenarioDictPropsType,
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
  const navigate = useNavigate()

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

  const {
    capture,
    description,
    meta,
    moduleID,
    contentID,
    passRate,
    questions: questionsActive,
  } = getModuleByModuleID(
    {
      moduleID: moduleIDActive || '',
      modules,
    },
    { parentFunction: 'QuestionScoresComponent' }
  )

  const { rp, pr } = getParsedUrlQuery()
  let passRateIn = rp || pr
  passRateIn = passRateIn && isParsableFloat(passRateIn) && parseFloat(passRateIn)
  passRateIn = passRateIn ? passRateIn : passRate
  passRateIn = passRateIn < 0.5 ? 0.5 : passRateIn

  const score: GetAnswersChecked2OutType = getAnswersChecked2(questionsActive, passRateIn)

  const questionsWrongAnswered = getQuestionsWrongAnswered(questionsActive)
  const { total, right, wrong } = score
  let result = score.result

  const getScenarioDictProps: GetScenarioDictPropsType = {
    result,
    language,
    right,
    total,
    nameFirst,
    nameMiddle,
    nameLast,
    meta: meta || {},
    capture: capture || '',
    description: description || '',
    moduleID: moduleID || '',
    contentID: contentID || '',
    sub,
    navigate,
    handleEvents,
    isEditNameVisible,
  }

  const scenario = getScenarioDict(getScenarioDictProps)

  useEffect(() => {
    stopVideoHandler && stopVideoHandler({}, {})

    if (scenario.scenarioCase === 'success' || scenario.scenarioCase === 'successNoAuth') {
      console.info('QuestionScores [105]', {
        nameFirst,
        nameLast,
        sub,
        'profiles.length': profiles.length,
      })
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

  const propsOut: QuestionScoresPropsOutType = getQuestionScoresPropsOut({
    navigate,
    modules,
    queryUrl,
    handleEvents,
    scenario,
    isEditNameVisible,
    language,
    nameFirst,
    nameLast,
  })

  console.info('QuestionScores [221]', { nameFirst, nameLast, isEditNameVisible, modules })

  return (
    <div className='QuestionScores'>
      <div className='_text'>{scenario.message}</div>

      <div className='_buttons'>
        <NavLinkWithQuery {...propsOut.navLinkNextTaskProps}>
          <ButtonYrl {...propsOut.buttonNextTaskProps} />
        </NavLinkWithQuery>
        <NavLinkWithQuery {...propsOut.navLinkCreditProps}>
          <ButtonYrl {...propsOut.buttonCreditProps} />
        </NavLinkWithQuery>
        <ButtonYrl {...propsOut.buttonEditNameProps} />
        {scenario.scenarioCase === 'success' && isEditNameVisible && (
          <>
            <FormInputNames {...propsOut.formInputNamesProps} />
            <ButtonYrl {...propsOut.buttonConfirmEditNameProps} />
          </>
        )}
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
