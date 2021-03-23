import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as action from '../../DataLayer/index.action'
import { Header } from '../Components/Header'
import { Player } from '../Components/Player'
import { CheckBoxes } from '../Components/CheckBoxes'
import { RadioButtons } from '../Components/RadioButtons'
import { getAddedArrIdPrefix } from '../../Shared/getAddedArrIdPrefix'

interface IPlayAndSubScribe {
  routeProps: any
  rootPath: any
}

export const PlayAndSubscribeScreen: Function = (
  props: IPlayAndSubScribe = { routeProps: {}, rootPath: '' }
) => {
  const dispatch = useDispatch()

  let checkBoxes = [
    { label: 'One', checked: true },
    { label: 'Two', checked: false },
    { label: 'Three', checked: false },
    { label: 'Four', checked: false },
  ]
  checkBoxes = getAddedArrIdPrefix(checkBoxes, 'label')
  const checkBoxesProps = {
    capture: 'My first question',
    checkBoxesIn: checkBoxes,
  }

  // console.info('PlayAndSubscribe.screen [72]', { props })
  return (
    <div className='PlayAndSubscribe'>
      <Header />

      {/* <!-- Navigation Bar --> */}
      {/* <div className='navbar'>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
      </div> */}

      {/* <!-- The flexible grid (content) --> */}
      <div className='PlayAndSubscribe__play'>
        <div className='PlayAndSubscribe__play_left'></div>
        <div className='PlayAndSubscribe__play_main'>
          <div className='PlayAndSubscribe__play_main_wrapper'>
            <Player />
          </div>
        </div>
        <div className='PlayAndSubscribe__play_right'>
          <CheckBoxes {...checkBoxesProps} />
          <RadioButtons />
        </div>
      </div>

      {/* <!-- Footer --> */}
      <div className='PlayAndSubscribe__comments'>
        <div className='PlayAndSubscribe__comments_in'></div>
      </div>
    </div>
  )
}
