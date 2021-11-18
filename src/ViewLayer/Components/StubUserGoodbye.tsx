import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

interface StubUserGoodbyeArgs {}

export const StubUserGoodbye: React.FunctionComponent<StubUserGoodbyeArgs> = (
  props: StubUserGoodbyeArgs
): JSX.Element => {
  return (
    <div className='StubUserGoodbye'>
      <h1 className='_h1'>Present funcitonality is under development</h1>
      <div className='_text'>
        Currently we are looking for support and feedback{' '}
      </div>
      <div className='_text'>
        If you have ideas or oppinions about this service,
      </div>
      <div className='_text'>please, share them with us</div>
      <br />
      <div className='_text'>Our contacts:</div>
      <div className='_text'>
        Email:{' '}
        <a href='mailto: akruglov2000@gmail.com' target='_blank'>
          akruglov2000@gmail.com
        </a>
      </div>
      <div className='_text'>Tel: +1 650 7 410014</div>
    </div>
  )
}
