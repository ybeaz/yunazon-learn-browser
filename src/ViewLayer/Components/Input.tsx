import React from 'react'
import { useSelector } from 'react-redux'

import { IconReact } from './IconReact'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { IRootStore } from '../../Interfaces/IRootStore'

interface InputArgs {
  classAdded: string
  type: string
  placeholder: string
  typeEvent: string
  storeFormProp: string
  storeFormGroup?: string
}

export const Input: React.FunctionComponent<InputArgs> = (
  props: InputArgs
): React.ReactElement => {
  const {
    classAdded,
    type,
    placeholder,
    typeEvent,
    storeFormGroup,
    storeFormProp,
  } = props

  const store = useSelector((store2: IRootStore) => store2)
  const { forms } = store
  const value = storeFormGroup
    ? forms[storeFormGroup][storeFormProp]
    : forms[storeFormProp]

  const action = { typeEvent }

  const iconReactProps = {
    icon: 'AiFillCloseCircle',
    icon2: null,
    classAdded: `IconReact_Input`,
  }

  return (
    <div className={`Input ${classAdded}`}>
      <input
        className={`__input`}
        type={type}
        placeholder={placeholder}
        onChange={event => handleEvents(event, action)}
        value={value}
      />
      <span
        className='_iconClose'
        onClick={event => handleEvents({ target: { value: '' } }, action)}
      >
        <IconReact {...iconReactProps} />
      </span>
    </div>
  )
}
