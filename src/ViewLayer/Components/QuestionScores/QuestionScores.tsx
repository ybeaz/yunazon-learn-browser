import React, { useEffect, ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'antd'

import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'

import { isParsableFloat } from 'yourails_common'
import { getParsedUrlQuery } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import { getQuestionsWrongAnswered } from 'yourails_common'
import { getAnswersChecked2, GetAnswersChecked2OutType } from 'yourails_common'
import { getModuleByModuleID } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { getScenarioDict } from './getScenarioDict'
import { FormInputNames } from '../FormInputNames/FormInputNames'
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
  let navigate = useNavigate()

  const {
    stopVideoHandler,
    storeStateSlice: { language, moduleIDActive, modules, nameFirst, nameMiddle, nameLast, sub },
    handleEvents,
  } = props

  const {
    capture,
    description,
    meta,
    moduleID,
    contentID,
    creatorID,
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

  const QuestionsWithIncorrectAnswers = DICTIONARY.QuestionsWithIncorrectAnswers[language]

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
    creatorID: creatorID || '',
    sub,
    navigate,
    handleEvents,
  }

  const scenario = getScenarioDict(getScenarioDictProps)

  useEffect(() => {
    stopVideoHandler && stopVideoHandler({}, {})

    if (scenario.scenarioCase === 'success' || scenario.scenarioCase === 'successNoAuth') {
      /* TODO: handleEvents is undefined, reasons are unknown and incomprehensible */
      handleEventsIn({}, { typeEvent: 'TOGGLE_IS_CONFETTI', data: true })

      setTimeout(() => handleEventsIn({}, { typeEvent: 'TOGGLE_IS_CONFETTI', data: false }), 5000)
    }
  }, [])

  const getRendedQuestionsWrongAnswered: Function = (questions: any[]): ReactElement => {
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

  const propsOut: QuestionScoresPropsOutType & any = {
    buttonNextTaskProps: {
      icon: 'MdForward',
      classAdded: 'Button_UseCertificate',
      handleEvents,
      action: {
        typeEvent: 'TEST',
        data: {},
      },
      // tooltipText: DICTIONARY.Next_Task[language],
      // tooltipPosition: 'top',
      captureLeft: DICTIONARY.Next_Task[language],
    },
    buttonViewRewardProps: {
      icon: 'MdForward',
      classAdded: 'Button_UseCertificate',
      handleEvents,
      action: {
        typeEvent: 'TEST',
        data: {},
      },
      tooltipText: DICTIONARY.View_Reward[language],
      tooltipPosition: 'top',
      captureLeft: DICTIONARY.View_Reward[language],
    },
    buttonSeeAchievementsProps: {
      icon: 'MdForward',
      classAdded: 'Button_UseCertificate',
      handleEvents,
      action: {
        typeEvent: 'TEST',
        data: {},
      },
      tooltipText: DICTIONARY.See_Achievements[language],
      tooltipPosition: 'top',
      captureLeft: DICTIONARY.See_Achievements[language],
    },
    buttonAllMissionsProps: {
      icon: 'MdForward',
      classAdded: 'Button_UseCertificate',
      handleEvents,
      action: {
        typeEvent: 'TEST',
        data: {},
      },
      tooltipText: DICTIONARY.All_Missions[language],
      tooltipPosition: 'top',
      captureLeft: DICTIONARY.All_Missions[language],
    },
    formInputNamesProps: {
      language,
      buttonForwardProps: scenario.buttonForwardProps,
      handleEvents,
    },
    buttonForwardProps: scenario.buttonForwardProps,
  }

  const buttonNextTaskTooltipText = (
    <div className='_tagsCloudBodyTooltipContentTagButton2'>{DICTIONARY.Next_Task[language]}</div>
  )

  const geoUrl =
    'https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json'

  const markers = [
    {
      markerOffset: -30,
      name: 'Buenos Aires',
      coordinates: [-58.3816, -34.6037],
    },
    { markerOffset: 15, name: 'La Paz', coordinates: [-68.1193, -16.4897] },
    { markerOffset: 15, name: 'Brasilia', coordinates: [-47.8825, -15.7942] },
    { markerOffset: 15, name: 'Santiago', coordinates: [-70.6693, -33.4489] },
    { markerOffset: 15, name: 'Bogota', coordinates: [-74.0721, 4.711] },
    { markerOffset: 15, name: 'Quito', coordinates: [-78.4678, -0.1807] },
    { markerOffset: -30, name: 'Georgetown', coordinates: [-58.1551, 6.8013] },
    { markerOffset: -30, name: 'Asuncion', coordinates: [-57.5759, -25.2637] },
    { markerOffset: 15, name: 'Paramaribo', coordinates: [-55.2038, 5.852] },
    { markerOffset: 15, name: 'Montevideo', coordinates: [-56.1645, -34.9011] },
    { markerOffset: 15, name: 'Caracas', coordinates: [-66.9036, 10.4806] },
    { markerOffset: 15, name: 'Lima', coordinates: [-77.0428, -12.0464] },
  ]

  console.info('QuestionScores [128]', { 'scenario.message': scenario.message })

  return (
    <div className='QuestionScores'>
      <div className='_text'>
        <div className='_greet'>{DICTIONARY.Congratulations[language]}!</div>
        <div>
          <span>{DICTIONARY.You_ve_completed_the_task_successfully[language]}.</span>
          <span> </span>
          <span>{DICTIONARY.Keep_going[language]}!</span>
        </div>
      </div>

      <ComposableMap
        projection='geoAzimuthalEqualArea'
        projectionConfig={{
          rotate: [58, 20, 0],
          scale: 400,
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography key={geo.rsmKey} geography={geo} fill='#EAEAEC' stroke='#D6D6DA' />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <g
              fill='none'
              stroke='#FF5533'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              transform='translate(-12, -24)'
            >
              <circle cx='12' cy='10' r='3' />
              <path d='M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z' />
            </g>
            <text
              textAnchor='middle'
              y={markerOffset}
              style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>

      <div className='_buttons'>
        <Tooltip className='_tooltip' title={buttonNextTaskTooltipText}>
          <>
            <ButtonYrl {...propsOut.buttonNextTaskProps} />
          </>
        </Tooltip>
        <ButtonYrl {...propsOut.buttonViewRewardProps} />

        <ButtonYrl {...propsOut.buttonSeeAchievementsProps} />

        <ButtonYrl {...propsOut.buttonAllMissionsProps} />
      </div>
      <br />
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
      ) : null}
      {scenario.scenarioCase === 'success' || scenario.scenarioCase === 'successNoAuth' ? (
        <div className='_buttons'>
          <ButtonYrl {...propsOut.buttonForwardProps} />
        </div>
      ) : null}
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
