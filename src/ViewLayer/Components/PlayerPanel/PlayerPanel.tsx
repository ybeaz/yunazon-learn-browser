import React from 'react'

import { FeatureBar } from '../FeatureBar'
import { SuccessTried } from '../SuccessTried'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { ButtonYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'

import { getClasses } from '../../../Shared/getClasses'
import {
  PlayerPanelComponentPropsType,
  PlayerPanelPropsType,
  PlayerPanelPropsOutType,
  PlayerPanelComponentType,
  PlayerPanelType,
} from './PlayerPanelTypes'

/**
 * @description Component to render PlayerPanel
 * @import import { PlayerPanel, PlayerPanelPropsType, PlayerPanelPropsOutType, PlayerPanelType } 
             from '../Components/PlayerPanel/PlayerPanel'
 */
const PlayerPanelComponent: PlayerPanelComponentType = (
  props: PlayerPanelComponentPropsType
) => {
  const { classAdded, storeStateSlice } = props

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
    moduleIndex = 0,
    modulesTotal = 1,
    questionsTotal = 0,
    storeStateSlice: { language },
  } = props

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
    screenType === 'AcademyPresent' && modulesTotal > 1
      ? `${courseCapture} ${moduleCapture}`
      : `${courseCapture}`

  const propsOut: PlayerPanelPropsOutType = {}

  return (
    <div className={`PlayerPanel PlayerPanel_${screenType}`}>
      <div className='__info'>
        <div className='_captureDuration'>
          <div className='_capture'>{`${capture}`}</div>
          <div className='_duration'>{duration}</div>
        </div>
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
          <ButtonYrl {...buttonPlayProps} />
        ) : (
          <ButtonYrl {...buttonPauseProps} />
        )}
        <ButtonYrl {...buttonStopProps} />
      </div>
      <ButtonYrl {...callForActionButtonPros} />
    </div>
  )
}

const storeStateSliceProps: string[] = ['language']
export const PlayerPanel: React.FunctionComponent<PlayerPanelPropsType> =
  withStoreStateSelectedYrl(
    storeStateSliceProps,
    React.memo(PlayerPanelComponent)
  )

export type {
  PlayerPanelPropsType,
  PlayerPanelPropsOutType,
  PlayerPanelComponentType,
  PlayerPanelType,
}
