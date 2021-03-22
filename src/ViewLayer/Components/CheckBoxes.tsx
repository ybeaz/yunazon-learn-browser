import React, { useState } from 'react'

import { getArrCheckedChangedById } from '../../Shared/getArrCheckedChangedById'

export const CheckBoxes: Function = ({
  capture,
  checkBoxesIn,
}: any): JSX.Element => {
  const [checkBoxes, setCheckBoxes] = useState(checkBoxesIn)

  const handleEvents: Function = (
    e: EventListener,
    { type, data }: any
  ): void => {
    switch (type) {
      case 'CLICK_CHECKBOX':
        {
          const checkBoxesNext = getArrCheckedChangedById(checkBoxes, data)
          setCheckBoxes(checkBoxesNext)
        }
        break
      default: {
        console.info('Checkboxes [18]', 'strange action type', type)
      }
    }
  }

  const getCheckBoxes: Function = (checkBoxes: any[]): JSX.Element[] => {
    return checkBoxes.map(item => {
      const { label, checked = false, id: labelKey } = item
      return (
        <label className='container' key={labelKey}>
          {label}
          <input
            onChange={e =>
              handleEvents(e, { type: 'CLICK_CHECKBOX', data: labelKey })
            }
            type='checkbox'
            checked={checked}
          />
          <span className='checkmark'></span>
        </label>
      )
    })
  }

  return (
    <div className='CheckBoxes'>
      <div className='CheckBoxex_capture'>{capture}</div>
      {getCheckBoxes(checkBoxes)}
    </div>
  )
}
