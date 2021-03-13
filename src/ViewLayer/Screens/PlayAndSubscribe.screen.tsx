import React, { useState, useEffect, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState } from '../../@types/RootState'
import * as action from '../../DataLayer/index.action'
import { Header } from '../Components/Header.component'

import './PlayAndSubscribe.style.less'

export const PlayAndSubscribeScreen: Function = (props = { rootPath: '' }) => {
  const { rootPath } = props

  const { globalVars } = useSelector((store: RootState) => store)
  const dispatch = useDispatch()

  if (globalVars?.theme) {
    const theme = globalVars.theme
    require(`../StyleThemes/theme${theme}.less`)
  }

  console.info('PlayAndSubscribe [22]', { globalVars })
  return (
    <div className='PlayAndSubscribe'>
      <Header />

      {/* <!-- Navigation Bar --> */}
      <div className='navbar'>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
      </div>

      {/* <!-- The flexible grid (content) --> */}
      <div className='row'>
        <div className='side'>
          <h2>About Me</h2>
          <h5>Photo of me:</h5>
          <div className='fakeimg'>Image</div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          <h3>More Text</h3>
          <p>Lorem ipsum dolor sit ame.</p>
          <div className='fakeimg'>Image</div>
          <br />
          <div className='fakeimg'>Image</div>
          <br />
          <div className='fakeimg'>Image</div>
        </div>
        <div className='main'>
          <h2>TITLE HEADING</h2>
          <h5>Title description, Dec 7, 2017</h5>
          <div className='fakeimg'>Image</div>
          <p>Some text..</p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
          <br />
          <h2>TITLE HEADING</h2>
          <h5>Title description, Sep 2, 2017</h5>
          <div className='fakeimg'>Image</div>
          <p>Some text..</p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <div className='footer'>
        <h2>Footer</h2>
      </div>
    </div>
  )
}
