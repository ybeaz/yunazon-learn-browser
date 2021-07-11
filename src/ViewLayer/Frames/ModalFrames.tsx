import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AuthUser } from '../Components/AuthUser'
import { handleEvents } from '../Hooks/handleEvents'
import { IRootStore } from '../../Interfaces/IRootStore'
import { Button } from '../Components/Button'

const CHILDREN = {
  AuthUser,
}

interface IModalFramesInput {}

export const ModalFrames: React.FunctionComponent<any> = (
  props: IModalFramesInput
): JSX.Element => {
  const store = useSelector((store: IRootStore) => store)
  const {
    componentsState: { modalFrames: children },
  } = store

  const getChildren: Function = (children: any[]): JSX.Element[] => {
    return children.map(child => {
      const { childName, isActive, childProps } = child
      const CHILD = CHILDREN[childName]
      const closeAction = {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [{ childName, isActive: false, childProps }],
      }

      const buttonCloseProps = {
        icon: 'MdClose',
        classAdded: 'Button_MdClose',
        action: closeAction,
      }

      const addClass = !isActive ? '' : 'ModalFrame_display'
      return (
        <div
          id='modalFrame'
          className={`ModalFrame ${addClass} ModalFrame_${childName}`}
          onClick={event => handleEvents(event, closeAction)}
        >
          <div className='__content'>
            <span className='_close'>
              <Button {...buttonCloseProps} />
            </span>
            <div className='_inner'>
              <CHILD {...childProps} />
            </div>
          </div>
        </div>
      )
    })
  }

  return <>{getChildren(children)}</>
}
