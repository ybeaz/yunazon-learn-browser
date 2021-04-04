import React, { useState, useRef } from 'react'

import { getAnswerByOptionID } from '../../Shared/getAnswerByOptionID'
import { getArrShuffled } from '../../Shared/getArrShuffled'
import { handleEvents } from '../Hooks/handleEvents'
interface ICheckRadioGroup {
  courseID: string
  moduleID: string
  questionID: string
  capture: string
  options: any[]
  designType: string
  multi: boolean
}

export const CheckRadioGroup: Function = ({
  capture,
  options,
  designType,
  multi,
}: ICheckRadioGroup): JSX.Element => {
  const optionsShuffled = getArrShuffled(options)
  const optionsInRef = useRef(optionsShuffled).current
  // console.info('CheckRadioGroup [20]', {
  //   optionsInRef,
  //   options,
  // })

  const getCheckLines: Function = (
    options: any[],
    optionsInRef: any[]
  ): JSX.Element[] => {
    return optionsInRef.map(item => {
      const { optionID, label } = item
      const answer = getAnswerByOptionID(options, optionID)

      return (
        <label className='container' key={optionID}>
          {label}
          <input
            onChange={event =>
              handleEvents(event, {
                typeEvent: 'CLICK_CHECK',
                data: { optionID, multi },
              })
            }
            type='checkbox'
            name={'radio'}
            checked={answer}
          />
          <span className='checkmark'></span>
        </label>
      )
    })
  }

  return (
    <div className={`CheckRadioGroup ${designType}`}>
      <div className='CheckRadioGroup__capture'>{capture}</div>
      {getCheckLines(options, optionsInRef)}
    </div>
  )
}
