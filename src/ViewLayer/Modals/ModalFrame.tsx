import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const ModalFrame: Function = (props: any): JSX.Element => {
  return (
    <div id='modalFrame' className='ModalFrame'>
      <div className='ModalFrame__content'>
        <span className='ModalFrame__content_close'>&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  )
}
