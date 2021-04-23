import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getButtonsClassString } from '../../Shared/getButtonsClassString'
import { getChunkedArray } from '../../Shared/getChunkedArray'
import { CheckRadioGroup } from './CheckRadioGroup'
import { getActiveCourseData } from '../../Shared/getActiveCourseData'
import { Button } from '../Components/Button'
import { handleEvents } from '../Hooks/handleEvents'
import { IRootStore } from '../../@types/IRootStore'
import { IDurationObj } from '../../@types/IDurationObj'
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
    globalVars,
    componentsState: { questionsSlideNumber },
    courses,
  } = store

  const numberQuestionsInSlide =
    globalVars?.configuration?.numberQuestionsInSlide || 2

  const { courseActive, moduleActive, questionsActive } = getActiveCourseData(
    courses
  )

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
          className={`CarouselQuestions__dots_dot ${classNameToggleHighlight}`}
          onClick={event =>
            handleEvents(event, {
              typeEvent: 'SET_QUESTION_SLIDE',
              data: index,
            })
          }
        ></span>
      )
    })

    return <div className='CarouselQuestions__dots'>{dotsJSX}</div>
  }

  const getSlidesChunk: Function = (questions: any[]): JSX.Element[] => {
    return questions.map(question => {
      return <CheckRadioGroup {...question} />
    })
  }

  const getSlides: Function = (questionsChunked: any[]): JSX.Element => {
    const questionsJSX = questionsChunked.map((questions, index) => {
      const classNameToggleShow =
        index === questionsSlideNumber ? 'CarouselQuestions_show' : ''
      return (
        <div
          className={`CarouselQuestions__slideshow_slides fade ${classNameToggleShow}`}
        >
          {getSlidesChunk(questions)}
        </div>
      )
    })

    return <div className='CarouselQuestions__slideshow'>{questionsJSX}</div>
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
    questionsChunked
  )

  const buttonSlideBackwardProps = {
    icon: 'MdForward',
    classAdded: 'Button_MdBackward2',
    handleEvents,
    action: { typeEvent: 'PLUS_QUESTION_SLIDE', data: -1 },
    isDisplaying: isButtonSlideBackward,
  }

  const buttonSlideForwardProps = {
    icon: 'MdForward',
    classAdded: 'Button_MdForward2',
    handleEvents,
    action: { typeEvent: 'PLUS_QUESTION_SLIDE', data: 1 },
    isDisplaying: isButtonSlideForward,
  }

  const buttonToCertificateProps = {
    icon: 'MdForward',
    icon2: 'HiOutlineAcademicCap',
    classAdded: 'Button_MdForward',
    handleEvents,
    action: {
      typeEvent: 'OPEN_MODAL_GET_SCORES',
      data: {},
    },
    isDisplaying: isButtonToCertificate,
  }

  const buttonBlockProps = {
    icon: 'MdForward',
    classAdded: 'Button_downLeft',
    handleEvents: () => {},
    action: {
      typeEvent: '',
      data: {},
    },
    isDisplaying: isButtonBlockProps,
  }

  const buttonStartProps = {
    captureLeft: `До сертификата ${duration} ${units}\u00A0\u00A0/\u00A0\u00A0${questionsActive.length} `,
    icon: 'BsQuestionCircle',
    classAdded: 'Button_startModule',
    handleEvents: () => {},
    action: {
      typeEvent: '',
      data: {},
    },
    isDisplaying: isButtonBlockProps,
  }

  return (
    <div className='CarouselQuestions'>
      {questionsActive.length ? getDots(questionsChunked) : null}
      <div className={`CarouselQuestions__buttons ${buttonsClassString}`}>
        <div className='CarouselQuestions__buttons_backward'>
          <Button {...buttonSlideBackwardProps} />
        </div>
        <div className='CarouselQuestions__buttons_forward'>
          <Button {...buttonSlideForwardProps} />
        </div>
        <div className='CarouselQuestions__buttons_toCertificate'>
          <Button {...buttonToCertificateProps} />
        </div>
        <div className='CarouselQuestions__buttons_downLeft'>
          <Button {...buttonBlockProps} />
        </div>
        <div className='CarouselQuestions__buttons_startModule'>
          <Button {...buttonStartProps} />
        </div>
      </div>
      {getSlides(questionsChunked)}
    </div>
  )
}
