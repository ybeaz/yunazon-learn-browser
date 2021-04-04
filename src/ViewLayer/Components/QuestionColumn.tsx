import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getCurrentCourseModule } from '../../Shared/getCurrentCourseModule'
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
  const { courses, userName } = store
  const currentCourseModule = getCurrentCourseModule(courses)

  const {
    capture,
    courseID,
    moduleID,
    questions,
    captureCourse,
    descriptionCourse,
    meta,
  } = currentCourseModule

  // console.info('QuestionColumn [26]', { currentCourseModule })

  const getQuestionColumnQuestions: Function = (
    questions: any[] = []
  ): JSX.Element => {
    let output = questions.map((question, i) => {
      const { questionID } = question
      const checkRadioGroupProps = { courseID, ...question }
      return <CheckRadioGroup key={questionID} {...checkRadioGroupProps} />
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
      meta,
      capture: captureCourse,
      description: descriptionCourse,
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
