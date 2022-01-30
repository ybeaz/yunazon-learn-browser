import React from 'react'
import { useSelector } from 'react-redux'

import { IconReact } from './IconReact'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { IRootStore } from '../../Interfaces/IRootStore'

interface InputArgs {
  tagName?: string // input tag, may be 'input' or 'textarea'
  classAdded: string // class to add to customize the standard input class
  type?: string // type of html tag, for example, <input type='text' >
  placeholder: string // placeholder text
  typeEvent: string // typeEvent to trigger the proper action
  storeFormProp?: string // name of the property in store.form that stores data
  storeFormGroup?: string // sub property in store.form to keep data
  accept?: string // accepted files' format for type='file', for example, 'image/png, image/jpeg, image/jpg'
}

export const Input: React.FunctionComponent<InputArgs> = (
  props: InputArgs
): React.ReactElement => {
  const {
    tagName = 'input',
    classAdded,
    type,
    placeholder,
    typeEvent,
    storeFormGroup,
    storeFormProp,
    accept,
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
      {tagName === 'input' && (
        <input
          className={`__input`}
          type={type}
          placeholder={placeholder}
          onChange={event => handleEvents(event, action)}
          value={value}
          accept={accept}
        />
      )}
      {tagName === 'textarea' && (
        <textarea
          className={`__input`}
          placeholder={placeholder}
          onChange={event => handleEvents(event, action)}
          value={value}
        />
      )}
      <span
        className='_iconClose'
        onClick={event => handleEvents({ target: { value: '' } }, action)}
      >
        <IconReact {...iconReactProps} />
      </span>
    </div>
  )
}
