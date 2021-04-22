import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Button } from '../Components/Button'

export const PlayerPanel: React.FunctionComponent<any> = (
  props: any
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
