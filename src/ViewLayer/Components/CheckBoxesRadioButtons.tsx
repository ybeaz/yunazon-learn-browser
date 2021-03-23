import React, { useState } from 'react'

import { handleEvents } from '../Hooks/handleEvents'

export const CheckBoxesRadioButtons: Function = ({
  capture,
  checkInputsIn,
  typeInput,
  multi,
}: any): JSX.Element => {
  const [checkInputs, setCheckInputs] = useState(checkInputsIn)

  const getCheckLines: Function = (checkInputs: any[]): JSX.Element[] => {
    return checkInputs.map(item => {
      const { label, checked = false, id: labelKey } = item
      let multi = 'multy'

      // Stopped    here to convert this component into checkbox and radiobutton with single and multy features
      const inputProps = {}

      return (
        <label className='container' key={labelKey}>
          {label}
          <input
            onChange={event =>
              handleEvents(event, {
                typeEvent: 'CLICK_CHECK',
                data: { checkInputs, setCheckInputs, labelKey },
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
      <div className={`${typeInput}_capture`}>{capture}</div>
      {getCheckLines(checkInputs)}
    </div>
  )
}
