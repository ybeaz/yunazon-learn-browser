import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Button } from '../Components/Button'

export const PlayerPanel: Function = (props: any): JSX.Element => {
  const {
    isShowingPanel = false,
    isShowingPlay = true,
    buttonPlayProps = {},
    buttonPauseProps = {},
    buttonStopProps = {},
  } = props

  return (
    <>
      {isShowingPanel ? (
        <div className='PlayerPanel'>
          {isShowingPlay ? (
            <Button {...buttonPlayProps} />
          ) : (
            <Button {...buttonPauseProps} />
          )}
          <Button {...buttonStopProps} />
        </div>
      ) : null}
    </>
  )
}
