import React from 'react'
import { useSelector } from 'react-redux'

import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { ButtonYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'

import {
  EmalInputsPropsType,
  EmalInputsPropsOutType,
  EmalInputsComponentType,
  EmalInputsType,
} from './EmalInputsTypes'

/**
 * @description Component to render EmalInputs
 * @import import { EmalInputs, EmalInputsPropsType, EmalInputsPropsOutType, EmalInputsType } 
             from '../Components/EmalInputs/EmalInputs'
 */
const EmalInputsComponent: EmalInputsComponentType = (
  props: EmalInputsPropsType
) => {
  const { classAdded, documentID } = props

  const store = useSelector((store2: RootStoreType) => store2)

  const {
    documents,
    forms: { sendTo, sendCc },
  } = store

  const documentsLen = documents.length
  let documentDefault = {
    meta: {
      email: '',
      isSendingBcc: false,
    },
  }
  const {
    meta: { email: emailBcc = '', isSendingBcc = false },
  } = (documentsLen && documents[documentsLen - 1]) || documentDefault

  const propsOut: EmalInputsPropsOutType = {
    inputEmailToProps: {
      classAdded: 'Input_email',
      key: 'InputEmailToKey',
      type: 'text',
      placeholder: 'email...',
      typeEvent: 'ONCHANGE_EMAIL_TO',
      storeFormProp: 'sendTo',
    },
    inputEmailCcProps: {
      classAdded: 'Input_email',
      key: 'InputEmailCcKey',
      type: 'text',
      placeholder: 'email cc...',
      typeEvent: 'ONCHANGE_EMAIL_CC',
      storeFormProp: 'sendCc',
    },
    buttonForwardProps: {
      icon: 'MdForward',
      classAdded: 'Button_MdForward',
      action: {
        typeEvent: 'SEND_EMAIL_DOCUMENT',
        data: { documentID, sendTo, sendCc, emailBcc, isSendingBcc },
      },
    },
  }

  return (
    <div className='EmalInputs'>
      <form className='_form'>
        <div className='_group'>
          <label className='_label'>Email to send document*</label>
          <InputYrl {...propsOut.inputEmailToProps} />
        </div>
        <div className='_group'>
          <label className='_label'>Email CC</label>
          <InputYrl {...propsOut.inputEmailCcProps} />
        </div>
        <div className='_buttons'>
          {/* <ButtonYrl {...buttonCancelProps} /> */}
          <ButtonYrl {...propsOut.buttonForwardProps} />
        </div>
      </form>
    </div>
  )
}

export const EmalInputs = React.memo(EmalInputsComponent)

export type {
  EmalInputsPropsType,
  EmalInputsPropsOutType,
  EmalInputsComponentType,
  EmalInputsType,
}
