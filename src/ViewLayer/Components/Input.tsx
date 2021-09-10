import React from 'react'
import { useSelector } from 'react-redux'

import { handleEvents } from '../Hooks/handleEvents'
import { IRootStore } from '../../Interfaces/IRootStore'

interface InputArgs {
  classAdded: string
  type: string
  placeholder: string
  typeEvent: string
  storeFormProp: string
}

export const Input: React.FunctionComponent<InputArgs> = props => {
  const { classAdded, type, placeholder, typeEvent, storeFormProp } = props

  const store = useSelector((store2: IRootStore) => store2)
  const { forms } = store
  const value = forms[storeFormProp]

  const action = { typeEvent }

  return (
    <div className={`Input ${classAdded}`}>
      <input
        className={`__input`}
        type={type}
        placeholder={placeholder}
        onChange={event => handleEvents(event, action)}
        value={value}
      />
    </div>
  )
}
