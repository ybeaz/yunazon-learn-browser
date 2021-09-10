import React from 'react'
import { useSelector } from 'react-redux'

import { AuthUser } from '../Components/AuthUser'
import { Button } from '../Components/Button'
import { EmalInputs } from '../Components/EmalInputs'
import { handleEvents } from '../Hooks/handleEvents'
import { IRootStore } from '../../Interfaces/IRootStore'
import { QuestionScores } from '../Components/QuestionScores'

const CHILDREN = {
  AuthUser,
  EmalInputs,
  QuestionScores,
}

export const ModalFrames: React.FunctionComponent = (): JSX.Element => {
  const store = useSelector((store2: IRootStore) => store2)
  const {
    componentsState: { modalFrames },
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

      const addClass = !isActive ? '' : 'ModalFrames_display'

      return (
        <div
          id='modalFrames'
          className={`ModalFrames ${addClass} ModalFrames_${childName}`}
          onClick={event => handleEvents(event, closeAction)}
        >
          <div className='__content'>
            <span className='_close'>
              <Button {...buttonCloseProps} />
            </span>
            <div
              className='_inner'
              onClick={event =>
                handleEvents(event, { typeEvent: 'STOP_PROPAGATION' })
              }
            >
              <CHILD {...childProps} />
            </div>
          </div>
        </div>
      )
    })
  }

  return <>{getChildren(modalFrames)}</>
}
