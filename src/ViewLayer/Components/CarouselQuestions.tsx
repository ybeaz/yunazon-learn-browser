import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { handleEvents } from '../Hooks/handleEvents'
import { RootStore } from '../../@types/RootStore'

export const CarouselQuestions: Function = (props: any): JSX.Element => {
  const store = useSelector((store: RootStore) => store)
  const {
    componentsState: { questionSlideNumber },
  } = store
  console.info('CarouselQuestions [10]', { questionSlideNumber })

  return (
    <div className='CarouselQuestions'>
      <div className='slideshow-container'>
        <div className='mySlides fade'>
          <div className='numbertext'>1 / 3</div>
          <img src='https://www.w3schools.com/howto/img_nature_wide.jpg' />
          <div className='text'>Caption Text</div>
        </div>

        <div className='mySlides fade'>
          <div className='numbertext'>2 / 3</div>
          <img src='https://www.w3schools.com/howto/img_snow_wide.jpg' />
          <div className='text'>Caption Two</div>
        </div>

        <div className='mySlides fade'>
          <div className='numbertext'>3 / 3</div>
          <img src='https://www.w3schools.com/howto/img_mountains_wide.jpg' />
          <div className='text'>Caption Three</div>
        </div>

        <a className='prev' onClick={event => 'plusSlides(-1)'}>
          &#10094;
        </a>
        <a className='next' onClick={event => 'plusSlides(1)'}>
          &#10095;
        </a>
      </div>
      <br />

      <div className='CarouselQuestions__dots'>
        <span className='dot' onClick={event => 'currentSlide(1)'}></span>
        <span className='dot' onClick={event => 'currentSlide(2)'}></span>
        <span className='dot' onClick={event => 'currentSlide(3)'}></span>
      </div>
    </div>
  )
}
