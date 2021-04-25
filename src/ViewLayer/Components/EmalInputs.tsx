import React, { useState, useEffect, useRef, ReactElement } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { handleEvents } from '../Hooks/handleEvents'
import { IRootStore } from '../../Interfaces/IRootStore'
import { Input } from '../Components/Input'
import { Button } from '../Components/Button'

interface EmalInputsInput {
  documentID: string
}

export const EmalInputs: React.FunctionComponent<any> = (
  props: EmalInputsInput
): JSX.Element => {
  const { documentID } = props

  const store = useSelector((store: IRootStore) => store)
  const {
    forms: { sendTo, sendCc },
  } = store

  const inputEmailToProps = {
    classAdded: 'Input_emailTo',
    type: 'text',
    placeholder: 'email...',
    handleEvents,
    action: { typeEvent: 'ONCHANGE_EMAIL_TO' },
  }

  const inputEmailCcProps = {
    classAdded: 'Input_emailTo',
    type: 'text',
    placeholder: 'email cc...',
    handleEvents,
    action: { typeEvent: 'ONCHANGE_EMAIL_CC' },
  }

  const buttonForwardProps = {
    icon: 'MdForward',
    classAdded: 'Button_MdForward',
    handleEvents,
    action: {
      typeEvent: 'SEND_EMAIL_DOCUMENT',
      data: { documentID, sendTo, sendCc },
    },
  }

  return (
    <div className='EmalInputs'>
      <form className='_form'>
        <div className='_group'>
          <label className='_label'>Email to send document</label>
          <Input {...inputEmailToProps} value={sendTo} />
        </div>
        <div className='_group'>
          <label className='_label'>CC email</label>
          <Input {...inputEmailCcProps} value={sendCc} />
        </div>
        <div className='_buttons'>
          {/* <Button {...buttonCancelProps} /> */}
          <Button {...buttonForwardProps} />
        </div>
      </form>
    </div>
  )
}
