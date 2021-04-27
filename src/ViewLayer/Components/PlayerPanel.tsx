import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
  } = props

  const { language } = useSelector((store: IRootStore) => store)
  const certificate = DICTIONARY.certificate[language]

  const callForActionButtonPros = {
    captureLeft: `${duration} ${units} `,
    icon: 'MdForward',
    captureRight: ` ${certificate}`,
    classAdded: 'Button_CallForActionMatrix',
    handleEvents: () => {},
    action: {},
    isDisplaying,
  }

  const capture =
    screenType === 'PlayAndSubscribe'
      ? `${courseCapture} ${moduleCapture}`
      : `${courseCapture}`

  return (
    <div className={`PlayerPanel PlayerPanel_${screenType}`}>
      <div className='__capture'>{capture}</div>
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
