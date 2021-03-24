import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as action from '../../DataLayer/index.action'
import { Header } from '../Components/Header'
import { Player } from '../Components/Player'
import { CheckRadioGroup } from '../Components/CheckRadioGroup'

interface IPlayAndSubScribe {
  routeProps: any
  rootPath: any
}

export const PlayAndSubscribeScreen: Function = (
  props: IPlayAndSubScribe = { routeProps: {}, rootPath: '' }
) => {
  const dispatch = useDispatch()

  const checkBoxesProps = {
    capture: 'My first question',
    checkInputsIn: [
      { label: 'One', checked: true },
      { label: 'Two', checked: false },
      { label: 'Three', checked: false },
      { label: 'Four', checked: false },
    ],
    typeInput: 'CheckBoxes',
    multi: true,
  }

  const radioButtonsProps = {
    capture: 'My second question',
    checkInputsIn: [
      { label: 'One', checked: true },
      { label: 'Two', checked: false },
      { label: 'Three', checked: false },
      { label: 'Four', checked: false },
    ],
    typeInput: 'RadioButtons',
    multi: false,
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
          <CheckRadioGroup {...checkBoxesProps} />
          <CheckRadioGroup {...radioButtonsProps} />
        </div>
      </div>

      {/* <!-- Footer --> */}
      <div className='PlayAndSubscribe__comments'>
        <div className='PlayAndSubscribe__comments_in'></div>
      </div>
    </div>
  )
}
