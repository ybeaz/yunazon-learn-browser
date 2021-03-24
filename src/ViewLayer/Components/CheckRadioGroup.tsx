import React, { useState, useRef } from 'react'

import { handleEvents } from '../Hooks/handleEvents'
import { getAddedArrIdPrefix } from '../../Shared/getAddedArrIdPrefix'

export const CheckRadioGroup: Function = ({
  capture,
  checkInputsIn,
  typeInput,
  multi,
}: any): JSX.Element => {
  const checkInputsInRef = useRef(getAddedArrIdPrefix(checkInputsIn, 'label'))
    .current

  const [checkInputs, setCheckInputs] = useState(checkInputsInRef)

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
    <div className={typeInput}>
      <div className={`${typeInput}__capture`}>{capture}</div>
      {getCheckLines(checkInputs, multi)}
    </div>
  )
}
