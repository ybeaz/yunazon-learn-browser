import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { DICTIONARY } from '../../Constants/dictionary.const'
import { getQuesionString } from '../../Shared/getQuesionString'
import { getButtonsClassString } from '../../Shared/getButtonsClassString'
import { getChunkedArray } from '../../Shared/getChunkedArray'
import { CheckRadioGroup } from './CheckRadioGroup'
import { getActiveCourseData } from '../../Shared/getActiveCourseData'
import { Button } from '../Components/Button'
import { handleEvents } from '../Hooks/handleEvents'
import { IRootStore } from '../../Interfaces/IRootStore'
import { IDurationObj } from '../../Interfaces/IDurationObj'
interface ICarouselQuestionsInput {
  durationObj: IDurationObj
}

export const CarouselQuestions: React.FunctionComponent<any> = (
  props: ICarouselQuestionsInput
): JSX.Element => {
  const store = useSelector((store: IRootStore) => store)

  const {
    durationObj: { duration, units },
  } = props

  const {
    globalVars: { numberQuestionsInSlide },
    componentsState: { questionsSlideNumber, isCourseStarted },
    courses,
    language,
  } = store

  const {
    courseActive: { capture: courseCapture },
    questionsActive,
  } = getActiveCourseData(courses)

  const questionsChunked = getChunkedArray(
    questionsActive,
    numberQuestionsInSlide
  )

  const getDots: Function = (questions: any[]): JSX.Element => {
    const dotsJSX = questions.map((question, index) => {
      const classNameToggleHighlight =
        index === questionsSlideNumber ? 'active' : ''
      return (
        <span
          className={`_dot ${classNameToggleHighlight}`}
          onClick={event =>
            handleEvents(event, {
              typeEvent: 'SET_QUESTION_SLIDE',
              data: index,
            })
          }
        ></span>
      )
    })

    return <div className='__dots'>{dotsJSX}</div>
  }

  const getSlidesChunk: Function = (questions: any[]): JSX.Element[] => {
    return questions.map(question => {
      return <CheckRadioGroup {...question} />
    })
  }

  const getSlides: Function = (questionsChunked: any[]): JSX.Element => {
    const questionsJSX = questionsChunked.map((questions, index) => {
      const classNameToggleShow = index === questionsSlideNumber ? '_show' : ''
      return (
        <div className={`_slides fade ${classNameToggleShow}`}>
          {getSlidesChunk(questions)}
        </div>
      )
    })

    return <div className='__slideshow'>{questionsJSX}</div>
  }

  const {
    buttonsClassString,
    isButtonSlideStart,
    isButtonSlideBackward,
    isButtonSlideForward,
    isButtonToCertificate,
    isButtonBlockProps,
  } = getButtonsClassString(
    questionsSlideNumber,
    questionsChunked.length,
    questionsActive,
    questionsChunked,
    isCourseStarted
  )

  const buttonSlideBackwardProps = {
    icon: 'MdForward',
    classAdded: 'Button_MdBackward2',
    action: { typeEvent: 'PLUS_QUESTION_SLIDE', data: -1 },
    isDisplaying: isButtonSlideBackward,
  }

  const buttonSlideForwardProps = {
    icon: 'MdForward',
    classAdded: 'Button_MdForward2',
    action: { typeEvent: 'PLUS_QUESTION_SLIDE', data: 1 },
    isDisplaying: isButtonSlideForward,
  }

  const buttonToCertificateProps = {
    icon: 'MdForward',
    icon2: 'HiOutlineAcademicCap',
    classAdded: 'Button_MdForward',
    action: {
      typeEvent: 'OPEN_MODAL_GET_SCORES',
      data: {},
    },
    isDisplaying: isButtonToCertificate,
  }

  const buttonBlockProps = {
    icon: 'MdForward',
    classAdded: 'Button_downLeft',
    action: {
      typeEvent: '',
      data: {},
    },
    isDisplaying: isButtonBlockProps,
  }

  const CertificateDash = DICTIONARY['Certificate-'][language]
  const min = DICTIONARY.min[language]
  const questionStr = getQuesionString(language, questionsActive.length)

  const buttonStartProps = {
    captureLeft: `${CertificateDash} ${duration} ${units}\u00A0\u00A0/\u00A0\u00A0
      ${questionsActive.length} ${questionStr}\u00A0\u00A0`,
    icon: 'MdForward',
    classAdded: 'Button_startModule',
    action: {
      typeEvent: 'TOGGLE_START_COURSE',
      data: { isStarting: true, courseCapture },
    },
    isDisplaying: isButtonSlideStart,
  }

  return (
    <div className={`CarouselQuestions ${buttonsClassString}`}>
      {questionsActive.length ? getDots(questionsChunked) : null}
      <div className={`__buttons`}>
        <div className='_backward'>
          <Button {...buttonSlideBackwardProps} />
        </div>
        <div className='_forward'>
          <Button {...buttonSlideForwardProps} />
        </div>
        <div className='_toCertificate'>
          <Button {...buttonToCertificateProps} />
        </div>
        <div className='_downLeft'>
          <Button {...buttonBlockProps} />
        </div>
        <div className='_startModule'>
          <Button {...buttonStartProps} />
        </div>
      </div>
      {getSlides(questionsChunked)}
    </div>
  )
}
