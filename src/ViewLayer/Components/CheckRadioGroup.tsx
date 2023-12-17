import React, { ReactElement } from 'react'

import { getDesignType } from '../../Shared/getDesignType'
import { getAnswerByOptionID } from '../../Shared/getAnswerByOptionID'
import { handleEvents } from '../../DataLayer/index.handleEvents'
interface CheckRadioGroupArgs {
  courseID: string
  moduleID: string
  questionID: string
  capture: string
  options: any[]
}

export const CheckRadioGroup: React.FunctionComponent<CheckRadioGroupArgs> = ({
  capture,
  options,
}) => {
  const { designType, multi } = getDesignType(options)

  const getCheckLines: Function = (options2: any[]): ReactElement[] => {
    return options2.map(item => {
      const { optionID, label } = item
      const answer = getAnswerByOptionID(options, optionID)
      return (
        <label key={optionID} className={`__label`}>
          <div className='_capture'>{label}</div>
          <div className={`_checkdiv`}>
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
          </div>
        </label>
      )
    })
  }

  return (
    <div className={`CheckRadioGroup ${designType}`}>
      <div className='__capture'>{capture}</div>
      {getCheckLines(options)}
    </div>
  )
}
