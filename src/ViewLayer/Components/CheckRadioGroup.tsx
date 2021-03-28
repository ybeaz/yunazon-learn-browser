import React, { useState, useRef } from 'react'

import { handleEvents } from '../Hooks/handleEvents'
import { getAddedArrIdPrefix } from '../../Shared/getAddedArrIdPrefix'

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
  const optionsInRef = useRef(getAddedArrIdPrefix(options, 'label')).current

  const [checkInputs, setCheckInputs] = useState(optionsInRef)

  const getCheckLines: Function = (
    checkInputs: any[],
    multi: boolean
  ): JSX.Element[] => {
    return checkInputs.map(item => {
      const { label, checked = false, id: labelKey } = item

      return (
        <label className='container' key={labelKey}>
          {label}
          <input
            onChange={event =>
              handleEvents(event, {
                typeEvent: 'CLICK_CHECK',
                data: { checkInputs, setCheckInputs, labelKey, multi },
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
