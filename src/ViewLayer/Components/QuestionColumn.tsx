import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getContentInfoByContentID } from '../../Shared/getContentInfoByContentID'
import { RootStore } from '../../@types/RootStore'
import { CheckRadioGroup } from './CheckRadioGroup'
import { Button } from './Button'
import { getPrintScreenAsPdf } from '../../Shared/getPrintScreenAsPdf'

interface IQuestionColumn {
  contentID: string
}

export const QuestionColumn: Function = (
  props: IQuestionColumn
): JSX.Element => {
  const { contentID } = props

  const store = useSelector((store: RootStore) => store)
  const { content, userName } = store
  const {
    questions,
    meta: { institution, specTitle, specName },
    course,
  } = getContentInfoByContentID(content, contentID)

  const getQuestionColumnQuestions: Function = (
    questions: any[]
  ): JSX.Element => {
    let output = questions.map((question, i) => {
      const { questionID } = question
      return <CheckRadioGroup key={questionID} {...question} />
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
    action: {
      screenType: 'Certificate',
      userName,
      institution,
      specTitle,
      specName,
      course,
      contentID,
    },
  }

  return (
    <div className='QuestionColumn'>
      {getQuestionColumnQuestions(questions)}
      {questions.length ? (
        <div className='QuestionColumn__ok'>
          <Button {...buttonContinueProps} />
          <div className='QuestionColumn__print'>
            <Button {...buttonPrintCertProps} />
          </div>
        </div>
      ) : null}
    </div>
  )
}
