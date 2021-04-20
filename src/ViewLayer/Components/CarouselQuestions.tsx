import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getButtonsClassString } from '../../Shared/getButtonsClassString'
import { getChunkedArray } from '../../Shared/getChunkedArray'
import { CheckRadioGroup } from './CheckRadioGroup'
import { getActiveCourseData } from '../../Shared/getActiveCourseData'
import { Button } from '../Components/Button'
import { handleEvents } from '../Hooks/handleEvents'
import { RootStore } from '../../@types/RootStore'

export const CarouselQuestions: React.FunctionComponent<any> = (
  props: any
): JSX.Element => {
  const store = useSelector((store: RootStore) => store)
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

  const buttonsClassString = getButtonsClassString(
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
  }

  const buttonSlideForwardProps = {
    icon: 'MdForward',
    classAdded: 'Button_MdForward2',
    handleEvents,
    action: { typeEvent: 'PLUS_QUESTION_SLIDE', data: 1 },
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
  }

  const buttonBlockProps = {
    icon: 'MdForward',
    classAdded: 'Button_downLeft',
    handleEvents: () => {},
    action: {
      typeEvent: '',
      data: {},
    },
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
      </div>
      {getSlides(questionsChunked)}
    </div>
  )
}
