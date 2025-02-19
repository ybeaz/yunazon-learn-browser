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
  const openClose = isEditNameVisible ? DICTIONARY.Close[language] : DICTIONARY.Open[language]

  const propsOut: QuestionScoresPropsOutType = {
    navLinkNextTaskProps: {
      to: {
        pathname: getMapJourneyData({ modules }).find(
          ({ isNextModule }: { isNextModule: boolean }) => isNextModule
        )?.pathnameModule,
        search: queryUrl,
      },
    },
    buttonNextTaskProps: {
      icon: 'MdForward',
      classAdded: 'Button_NextTask',
      handleEvents,
      action: {
        typeEvent: 'TEST',
        data: {},
      },
      captureLeft: DICTIONARY.Next_task[language],
      isDisplaying: scenario.scenarioCase === 'success' && !isEditNameVisible,
    },
    navLinkCreditProps: {
      to: { pathname: '/' },
    },
    buttonCreditProps: {
      icon: 'MdForward',
      classAdded: 'Button_Credit',
      handleEvents,
      action: {},
      tooltipText: DICTIONARY.View_reward[language],
      tooltipPosition: 'top',
      captureLeft: DICTIONARY.View_reward[language],
      isDisplaying: scenario.scenarioCase === 'success' && !isEditNameVisible,
    },
    buttonEditNameProps: {
      icon: 'MdForward',
      classAdded: 'Button_EditName',
      handleEvents,
      action: {
        typeEvent: 'SET_EDIT_NAME_VISIBILITY',
        data: {
          isEditNameVisible: !isEditNameVisible,
        },
      },
      tooltipText: `${openClose} ${DICTIONARY.edit_name[language]}`,
      tooltipPosition: 'top',
      captureLeft: `${openClose} ${DICTIONARY.edit_name[language]}`,
      isDisplaying: !(isEditNameVisible && (!nameFirst || !nameLast)),
    },
    buttonConfirmEditNameProps: {
      icon: 'MdForward',
      classAdded: 'Button_ConfirmEditName',
      handleEvents,
      action: {
        typeEvent: 'CLICK_ON_CONFIRM_NAMES',
        data: {},
      },
      tooltipText: DICTIONARY.Confirm[language],
      tooltipPosition: 'top',
      captureLeft: DICTIONARY.Confirm[language],
      isDisplaying: scenario.scenarioCase === 'success' && isEditNameVisible,
    },
    navLinkAchievementsProps: {
      to: { pathname: '/my-documents' },
    },
    buttonAchievementsProps: {
      icon: 'MdForward',
      classAdded: 'Button_Achievements',
      handleEvents,
      action: {},
      tooltipText: DICTIONARY.Achievements[language],
      tooltipPosition: 'top',
      captureLeft: DICTIONARY.Achievements[language],
      isDisplaying: scenario.scenarioCase === 'success' && !isEditNameVisible,
    },
    navLinkAllMissionsProps: {
      onClick: () => navigate(-1),
    },
    buttonAllMissionsProps: {
      icon: 'MdForward',
      classAdded: 'Button_BackToTopic',
      handleEvents,
      action: {},
      tooltipText: DICTIONARY.Back_to_topic[language],
      tooltipPosition: 'top',
      captureLeft: DICTIONARY.Back_to_topic[language],
      isDisplaying: scenario.scenarioCase === 'success' && !isEditNameVisible,
    },
    formInputNamesProps: {
      language,
      buttonForwardProps: scenario.buttonForwardProps,
      handleEvents,
    },
  }

  const buttonNextTaskTooltipText = (
    <div className='_tagsCloudBodyTooltipContentTagButton2'>{DICTIONARY.Next_task[language]}</div>
  )

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
      {/* <br />
      <hr />
      <br />
      <div className='_text'>{scenario.message}</div>
      {scenario.scenarioCase === 'success' ? (
        <FormInputNames {...propsOut.formInputNamesProps} />
      ) : null}
      {result === 'failure' ? (
        <div className='_qwa'>
          <div className='_capture'>{QuestionsWithIncorrectAnswers}</div>
          {getRendedQuestionsWrongAnswered(questionsWrongAnswered)}
        </div>
      ) : null} */}
      {/* {scenario.scenarioCase === 'success' || scenario.scenarioCase === 'successNoAuth' ? (
        <div className='_buttons'>
          <ButtonYrl {...propsOut.buttonForwardProps} />
        </div>
      ) : null} */}
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
