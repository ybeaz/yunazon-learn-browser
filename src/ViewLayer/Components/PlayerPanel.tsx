import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Button } from '../Components/Button'

export const PlayerPanel: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const {
    screenType,
    isShowingPlay = false,
    buttonPlayProps = {},
    buttonPauseProps = {},
    buttonStopProps = {},
  } = props
  const capture = '11 задание ЕГЭ 2020 по русскому языку: полный разбор'

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
    </div>
  )
}
