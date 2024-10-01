import React, { ReactElement, FunctionComponent } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import {
  withPropsYrl,
  ButtonYrl,
  withStoreStateSelectedYrl,
  ConfirmationYesNoBodyYrl,
} from '../../ComponentsLibrary/'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'

import { EmalInputs } from '../../Components/EmalInputs/EmalInputs'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { QuestionScores } from '../../Components/QuestionScores/QuestionScores'
import { AcademyAboutBody } from '../../Components/AcademyAboutBody/AcademyAboutBody'

import {
  ModalFramesComponentPropsType,
  ModalFramesPropsType,
  ModalFramesPropsOutType,
  ModalFramesComponentType,
  ModalFramesType,
} from './ModalFramesTypes'

const CHILDREN: Record<string, FunctionComponent<any>> = {
  ConfirmationYesNoBodyYrl,
  EmalInputs,
  QuestionScores,
  AcademyAboutBody,
  //AuthUser, Not used in favor of Cognito authetication
  // SkillExchangeIntro2,
  // SkillExchangeIntro,
}

/**
 * @description Component to render ModalFrames
 * @import import { ModalFrames, ModalFramesPropsType, ModalFramesPropsOutType, ModalFramesType } 
             from '../Components/ModalFrames/ModalFrames'
 */
const ModalFramesComponent: ModalFramesComponentType = (props: ModalFramesComponentPropsType) => {
  const {
    storeStateSlice: { modalFrames, isConfetti },
    handleEvents,
  } = props

  const { width, height } = useWindowSize()

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
          handleEvents,
          action: closeAction,
        },
        childProps,
        confettiProps: {
          width,
          height,
          run: true,
          opacity: isConfetti ? 1 : 0,
        },
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
              onClick={event => handleEvents(event, { typeEvent: 'STOP_PROPAGATION' })}
            >
              <CHILD {...propsOut.childProps} />
            </div>
          </div>
          {isConfetti ? <Confetti {...propsOut.confettiProps} /> : null}
        </div>
      )
    })
  }

  const propsOut: ModalFramesPropsOutType = {}

  return <>{getChildren(modalFrames)}</>
}

const storeStateSliceProps: string[] = ['modalFrames', 'isConfetti']

export const ModalFrames: ModalFramesType = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(storeStateSliceProps, React.memo(ModalFramesComponent))
)

export type {
  ModalFramesPropsType,
  ModalFramesPropsOutType,
  ModalFramesComponentType,
  ModalFramesType,
}
