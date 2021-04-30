import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { handleEvents } from '../Hooks/handleEvents'
import { IRootStore } from '../../Interfaces/IRootStore'

interface IInput {
  classAdded: string
  type: string
  placeholder: string
  typeEvent: string
  storeFormProp: string
}

export const Input: React.FunctionComponent<any> = (
  props: IInput
): JSX.Element => {
  const { classAdded, type, placeholder, typeEvent, storeFormProp } = props

  const store = useSelector((store: IRootStore) => store)
  const { forms } = store
  const value = forms[storeFormProp]

  const action = { typeEvent }

  return (
    <input
      className={`Input ${classAdded}`}
      type={type}
      placeholder={placeholder}
      onChange={event => handleEvents(event, action)}
      value={value}
    />
  )
}
