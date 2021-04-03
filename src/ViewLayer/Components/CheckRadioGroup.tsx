import React, { useState, useRef } from 'react'

import { handleEvents } from '../Hooks/handleEvents'
interface ICheckRadioGroup {
  designType: string
  multi: boolean
  capture: string
  options: any[]
}

export const CheckRadioGroup: Function = ({
  capture,
  options,
  designType,
  multi,
}: ICheckRadioGroup): JSX.Element => {
  const optionsInRef = useRef(options).current

  const [checkInputs, setCheckInputs] = useState(optionsInRef)

  const getCheckLines: Function = (
    checkInputs: any[],
    multi: boolean
  ): JSX.Element[] => {
    return checkInputs.map(item => {
      const { optionID, label, checked = false } = item

      return (
        <label className='container' key={optionID}>
          {label}
          <input
            onChange={event =>
              handleEvents(event, {
                typeEvent: 'CLICK_CHECK',
                data: { checkInputs, setCheckInputs, optionID, multi },
              })
            }
            type='checkbox'
            name={'radio'}
            checked={checked}
          />
          <span className='checkmark'></span>
        </label>
      )
    })
  }

  // console.info('CheckBoxesRadioButtons [40]', { checkInputs })
  return (
    <div className={`CheckRadioGroup ${designType}`}>
      <div className='CheckRadioGroup__capture'>{capture}</div>
      {getCheckLines(checkInputs, multi)}
    </div>
  )
}
