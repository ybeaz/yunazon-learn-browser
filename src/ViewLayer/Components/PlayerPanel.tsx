import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { FeatureBar } from './FeatureBar'
import { SuccessTried } from './SuccessTried'
import { DICTIONARY } from '../../Constants/dictionary.const'
import { IRootStore } from '../../Interfaces/IRootStore'
import { IDurationObj } from '../../Interfaces/IDurationObj'
import { Button } from '../Components/Button'

interface IPlayerPanelInput {
  courseCapture: string
  moduleCapture: string
  durationObj: IDurationObj
  screenType: string
  isShowingPlay: boolean
  buttonPlayProps: any
  buttonPauseProps: any
  buttonStopProps: any
  isActionButtonDisplaying: boolean
  muduleIndex: number
  modulesTotal: number
  questionsTotal: number
}

export const PlayerPanel: React.FunctionComponent<any> = (
  props: IPlayerPanelInput
): JSX.Element => {
  const {
    courseCapture,
    moduleCapture,
    durationObj: { duration, units },
    screenType,
    isShowingPlay = false,
    buttonPlayProps = {},
    buttonPauseProps = {},
    buttonStopProps = {},
    isActionButtonDisplaying: isDisplaying,
    muduleIndex,
    modulesTotal,
    questionsTotal,
  } = props

  const { language } = useSelector((store: IRootStore) => store)
  const certificate = DICTIONARY.certificate[language]
  const succeded = DICTIONARY.succeded[language]
  const tried = DICTIONARY.tried[language]
  const difficulty = DICTIONARY.difficulty[language]

  const callForActionButtonPros = {
    captureLeft: `${duration} ${units} `,
    icon: 'MdForward',
    captureRight: ` ${certificate}`,
    classAdded: 'Button_CallForActionMatrix',
    handleEvents: () => {},
    action: {},
    isDisplaying,
  }

  const successTriedProps = {
    tooltipText: `${succeded} / ${tried}`,
    tooltipPosition: 'top',
  }

  const numOfBars = 5
  const maxComplexity = 10
  const questinsAccepted =
    questionsTotal <= maxComplexity ? questionsTotal : maxComplexity
  const curComplexity = (questinsAccepted * numOfBars) / maxComplexity

  const featureBarProps = {
    number: curComplexity,
    total: numOfBars,
    iconMain: 'BsSquareFill',
    iconHalf: 'BsSquareHalf',
    iconRest: 'BsSquare',
    tooltipText: difficulty,
    tooltipPosition: 'bottom',
  }
  const capture =
    screenType === 'PresentAndSubscribe' && modulesTotal > 1
      ? `${courseCapture} ${moduleCapture}`
      : `${courseCapture}`

  return (
    <div className={`PlayerPanel PlayerPanel_${screenType}`}>
      <div className='__info'>
        <div className='_capture'>{capture}</div>
        <div className='_metaData'>
          <div className='_successTried'>
            <SuccessTried {...successTriedProps} />
          </div>
          <div className='_difficulty'>
            <FeatureBar {...featureBarProps} />
          </div>
        </div>
      </div>
      <div className='__buttons'>
        {isShowingPlay ? (
          <Button {...buttonPlayProps} />
        ) : (
          <Button {...buttonPauseProps} />
        )}
        <Button {...buttonStopProps} />
      </div>
      <Button {...callForActionButtonPros} />
    </div>
  )
}
