import React from 'react'
import { nanoid } from 'nanoid'

import { withPropsYrl, ButtonYrl } from 'yourails_view_layer_web'

import { getClasses } from '../../../Shared/getClasses'
import {
  ConfirmationYesNoBodyYrlComponentPropsType,
  ConfirmationYesNoBodyYrlPropsType,
  ConfirmationYesNoBodyYrlPropsOutType,
  ConfirmationYesNoBodyYrlComponentType,
  ConfirmationYesNoBodyYrlType,
} from './ConfirmationYesNoBodyYrlTypes'

/**
 * @description Component to render ConfirmationYesNoBodyYrl
 * @import import { ConfirmationYesNoBodyYrl, ConfirmationYesNoBodyYrlPropsType, ConfirmationYesNoBodyYrlPropsOutType, ConfirmationYesNoBodyYrlType } 
             from '../Components/ConfirmationYesNoBodyYrl/ConfirmationYesNoBodyYrl'
 */
const ConfirmationYesNoBodyYrlComponent: ConfirmationYesNoBodyYrlComponentType = (
  props: ConfirmationYesNoBodyYrlComponentPropsType
) => {
  const {
    classAdded,
    message,
    captureButton4Yes,
    captureButton4No,
    action4Yes,
    action4No,
    buttonRight = 'YesConfirm',
  } = props

  const getMessageElement = (message: string | string[]) => {
    let output = <div className='_message'>{message}</div>

    if (Array.isArray(message)) {
      const messagesMapped = message.map((messageItem: string) => {
        const key = nanoid()
        return (
          <div key={key} className='_messageItem'>
            {messageItem}
          </div>
        )
      })

      output = <div className='_message'>{messagesMapped}</div>
    }

    return output
  }

  const propsOut: ConfirmationYesNoBodyYrlPropsOutType = {
    buttonNoCancelProps: {
      icon: null,
      classAdded: 'Button_NoCancel',
      captureLeft: captureButton4No,
      action: action4No,
      isDisplaying: true,
    },
    buttonYesConfirmProps: {
      icon: null,
      classAdded: 'Button_YesConfirm',
      captureLeft: captureButton4Yes,
      action: action4Yes,
      isDisplaying: true,
    },
  }

  return (
    <div className={getClasses('ConfirmationYesNoBodyYrl', classAdded)}>
      <div className='_messageWrapper'>
        <div className='_message'>{getMessageElement(message)}</div>
      </div>
      <div className='_buttonsWrapper'>
        {buttonRight === 'YesConfirm' ? (
          <>
            <ButtonYrl {...propsOut.buttonNoCancelProps} />
            <div className='_inBetween' />
          </>
        ) : null}
        <ButtonYrl {...propsOut.buttonYesConfirmProps} />
        {buttonRight === 'NoCancel' ? (
          <>
            <div className='_inBetween' />
            <ButtonYrl {...propsOut.buttonNoCancelProps} />
          </>
        ) : null}
      </div>
    </div>
  )
}

export const ConfirmationYesNoBodyYrl: ConfirmationYesNoBodyYrlType = React.memo(
  ConfirmationYesNoBodyYrlComponent
)

export type {
  ConfirmationYesNoBodyYrlPropsType,
  ConfirmationYesNoBodyYrlPropsOutType,
  ConfirmationYesNoBodyYrlComponentType,
  ConfirmationYesNoBodyYrlType,
}
