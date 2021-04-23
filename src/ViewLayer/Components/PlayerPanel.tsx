import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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

  const callForActionButtonPros = {
    captureLeft: `${duration} ${units} `,
    icon: 'MdForward',
    captureRight: ` сертификат`,
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
