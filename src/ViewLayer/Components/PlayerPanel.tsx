import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IDurationObj } from '../../@types/IDurationObj'
import { Button } from '../Components/Button'

interface IPlayerPanelInput {
  captureCourse: string
  durationObj: IDurationObj
  screenType: string
  isShowingPlay: boolean
  buttonPlayProps: any
  buttonPauseProps: any
  buttonStopProps: any
}

export const PlayerPanel: React.FunctionComponent<any> = (
  props: IPlayerPanelInput
): JSX.Element => {
  const {
    captureCourse,
    durationObj: { duration, units },
    screenType,
    isShowingPlay = false,
    buttonPlayProps = {},
    buttonPauseProps = {},
    buttonStopProps = {},
  } = props

  const callForActionButtonPros = {
    captureLeft: `${duration} ${units} `,
    icon: 'MdForward',
    captureRight: ` сертификат`,
    classAdded: 'Button_CallForActionMatrix',
    handleEvents: () => {},
    action: {},
  }

  return (
    <div className={`PlayerPanel PlayerPanel_${screenType}`}>
      <div className='__capture'>{captureCourse}</div>
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
