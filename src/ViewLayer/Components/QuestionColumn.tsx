import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CheckRadioGroup } from './CheckRadioGroup'
import { Button } from './Button'
import { getPrintScreenAsPdf } from '../../Shared/getPrintScreenAsPdf'

interface IQuestionColumn {
  questions: any[]
}

export const QuestionColumn: Function = (
  props: IQuestionColumn
): JSX.Element => {
  const { questions } = props

  const getQuestionColumnQuestions: Function = (
    questions: any[]
  ): JSX.Element => {
    let output = questions.map((questionProps, i) => {
      return <CheckRadioGroup key={`CheckRadioGroup-${i}`} {...questionProps} />
    })

    return <div className='QuestionColumn__questions'>{output}</div>
  }

  const buttonContinueProps = {
    icon: 'MdForward',
    classAdded: 'Button_MdForward',
    // handleEvents: () => { },
    // action: {},
  }

  const buttonPrintCertProps = {
    icon: 'MdPrint',
    classAdded: 'Button_MdForward',
    handleEvents: getPrintScreenAsPdf,
    action: { screenType: 'Certificate', userName: 'Vasia Pupkin' },
  }

  return (
    <div className='QuestionColumn'>
      {getQuestionColumnQuestions(questions)}
      <div className='QuestionColumn__ok'>
        <Button {...buttonContinueProps} />
        <div className='QuestionColumn__print'>
          <Button {...buttonPrintCertProps} />
        </div>
      </div>
    </div>
  )
}
