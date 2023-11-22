import React, { ReactElement, FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { nanoid } from 'nanoid'

import { SkillExchangeIntro2 } from '../../Components/SkillExchangeIntro2'
import { SkillExchangeIntro } from '../../Components/SkillExchangeIntro'
import { AuthUser } from '../../Components/AuthUser'
import { ButtonYrl } from '../../ComponentsLibrary/ButtonYrl/ButtonYrl'
import { EmalInputs } from '../../Components/EmalInputs'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { QuestionScores } from '../../Components/QuestionScores/QuestionScores'

import {
  ModalFramesPropsType,
  ModalFramesPropsOutType,
  ModalFramesComponentType,
  ModalFramesType,
} from './ModalFramesTypes'

const CHILDREN: Record<string, FunctionComponent<any>> = {
  SkillExchangeIntro2,
  SkillExchangeIntro,
  EmalInputs,
  QuestionScores,
  //AuthUser, Not used in favor of Cognito authetication
}

/**
 * @description Component to render ModalFrames
 * @import import { ModalFrames, ModalFramesPropsType, ModalFramesPropsOutType, ModalFramesType } 
             from '../Components/ModalFrames/ModalFrames'
 */
const ModalFramesComponent: ModalFramesComponentType = (
  props: ModalFramesPropsType
) => {
  const store = useSelector((store2: RootStoreType) => store2)
  const {
    componentsState: { modalFrames },
  } = store

  const getChildren: Function = (children: any[]): (ReactElement | null)[] => {
    return children.map(child => {
      const { childName, isActive, childProps } = child
      const CHILD = CHILDREN[childName]
      const key = JSON.stringify({ childName, childProps })

      if (!CHILD) return null

      const closeAction = {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [{ childName, isActive: false, childProps }],
      }

      const addClass = !isActive ? '' : 'ModalFrames_display'

      const propsOut = {
        buttonCloseProps: {
          icon: 'MdClose',
          classAdded: 'Button_MdClose',
          action: closeAction,
        },
        childProps,
      }

      return (
        <div
          key={key}
          id='modalFrames'
          className={`ModalFrames ${addClass} ModalFrames_${childName}`}
          onClick={event => handleEvents(event, closeAction)}
        >
          <div className='__content'>
            <span className='_close'>
              <ButtonYrl {...propsOut.buttonCloseProps} />
            </span>
            <div
              className='_inner'
              onClick={event =>
                handleEvents(event, { typeEvent: 'STOP_PROPAGATION' })
              }
            >
              <CHILD {...propsOut.childProps} />
            </div>
          </div>
        </div>
      )
    })
  }

  const propsOut: ModalFramesPropsOutType = {}

  return <>{getChildren(modalFrames)}</>
}

export const ModalFrames: ModalFramesType = React.memo(ModalFramesComponent)

export type {
  ModalFramesPropsType,
  ModalFramesPropsOutType,
  ModalFramesComponentType,
  ModalFramesType,
}
