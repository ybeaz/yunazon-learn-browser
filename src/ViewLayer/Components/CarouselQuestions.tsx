import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CheckRadioGroup } from './CheckRadioGroup'
import { getActiveCourseData } from '../../Shared/getActiveCourseData'
import { Button } from '../Components/Button'
import { handleEvents } from '../Hooks/handleEvents'
import { RootStore } from '../../@types/RootStore'

export const CarouselQuestions: Function = (props: any): JSX.Element => {
  const store = useSelector((store: RootStore) => store)
  const {
    componentsState: { questionSlideNumber },
    courses,
  } = store

  const arrIn = [
    {
      designType: 'CheckBox',
      multi: true,
      capture: 'Согласно текста самодержец Николка',
      numbertext: 1,
      src: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
      options: [
        { label: 'был внешностью красив', status: false },
        {
          label: 'правил так, что было что закусить',
          status: true,
        },
        {
          label: 'был выдающейся личностью в истории',
          status: false,
        },
        { label: 'не видел дальше носа своего', status: true },
      ],
    },
    {
      designType: 'CheckBox',
      multi: true,
      capture: 'Согласно услышанного при товарище Сталине...',
      numbertext: 2,
      src: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
      options: [
        { label: 'колхозы распустили', status: false },
        { label: 'строились ТЭЦ', status: true },
        { label: 'в лагеря загнали всех', status: true },
        { label: 'граждан жизни не лишали', status: false },
      ],
    },
    {
      designType: 'CheckBox',
      multi: true,
      capture: 'Согласно песни Микитушка...',
      numbertext: 3,
      src: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
      options: [
        { label: 'наградил Кеннади медалью', status: false },
        { label: 'совершил немного дел', status: false },
        { label: 'был невысого роста', status: true },
        { label: 'пихал (космонавтов) на Луну', status: true },
      ],
    },
  ]

  const { courseActive, moduleActive, questionsActive } = getActiveCourseData(
    courses
  )

  const getDots: Function = (questions: any[]): JSX.Element => {
    const dotsJSX = questions.map((question, index) => {
      const classNameToggleHighlight =
        index === questionSlideNumber ? 'active' : ''
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

  const getSlides: Function = (questions: any[]): JSX.Element => {
    const questionsJSX = questions.map((question, index) => {
      const classNameToggleShow =
        index === questionSlideNumber ? 'CarouselQuestions_show' : ''
      return (
        <div className='slideshow-container'>
          <div className={`mySlides fade ${classNameToggleShow}`}>
            <CheckRadioGroup {...question} />
          </div>
        </div>
      )
    })

    return <div className='slideshow-container'>{questionsJSX}</div>
  }

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

  console.info('CarouselQuestions [113]', {
    questionSlideNumber,
    questionsActive,
    moduleActive,
    courseActive,
    courses,
    store,
  })
  return (
    <div className='CarouselQuestions'>
      {getDots(questionsActive)}
      <div className='CarouselQuestions__buttons'>
        <Button {...buttonSlideBackwardProps} />
        <Button {...buttonSlideForwardProps} />
      </div>
      {getSlides(questionsActive)}
    </div>
  )
}
