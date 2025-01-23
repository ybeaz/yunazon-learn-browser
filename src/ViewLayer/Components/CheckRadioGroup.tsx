import React, { ReactElement, useRef } from 'react'

import { getRandomNumBetween } from 'yourails_common'
import { getDesignType } from 'yourails_common'
import { getAnswerByOptionID } from 'yourails_common'
import { handleEvents } from '../../DataLayer/index.handleEvents'

export type CheckRadioGroupPropsType = {
  courseID?: string
  moduleID: string
  questionID: string
  capture: string
  topic?: string
  options: any[]
}

export const CheckRadioGroup: React.FunctionComponent<CheckRadioGroupPropsType> = ({
  questionID,
  capture,
  topic,
  options,
}) => {
  const { designType, multi } = getDesignType(options)

  const acceptedAnswerState = useRef<boolean>(false)

  const getCheckLines: Function = (options2: any[]): ReactElement[] => {
    return options2.map(item => {
      const { optionID, label, status } = item
      let voteMin = 0
      let voteMax = 10
      if (status) {
        voteMin = 10
        voteMax = 30
      }
      const upvoteCount = getRandomNumBetween(voteMin, voteMax, true)
      let statusAnswer = 'suggestedAnswer'
      if (!acceptedAnswerState.current && status) {
        acceptedAnswerState.current = true
        statusAnswer = 'acceptedAnswer'
      }

      const answer = getAnswerByOptionID(options, optionID)
      return (
        <label
          key={optionID}
          className={`__label`}
          itemScope
          itemProp={statusAnswer}
          itemType='https://schema.org/Answer'
        >
          <meta itemProp='upvoteCount' content={String(upvoteCount)} />
          <div className='_capture' itemProp='text'>
            {label}
          </div>
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
    <div itemProp='mainEntity'>
      <div itemScope itemType='https://schema.org/QAPage'>
        <div
          className={`CheckRadioGroup ${designType}`}
          itemProp='mainEntity'
          itemScope
          itemType='https://schema.org/Question'
        >
          <meta itemProp='indetifier' content={questionID} />
          <meta itemProp='answerCount' content={String(options.length)} />
          {topic ? <meta itemProp='abstract' content={topic} /> : null}
          <div className='__capture' itemProp='name'>
            {capture}
          </div>
          {getCheckLines(options)}
        </div>
      </div>
    </div>
  )
}
