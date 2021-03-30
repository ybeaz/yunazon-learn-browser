import React from 'react'

interface IInput {
  classAdded: string
  type: string
  placeholder: string
  handleEvents: Function
  action: any
}

export const Input: Function = (props: IInput): JSX.Element => {
  const handleEventsDefault: Function = (): void => {
    console.info('Input', 'handleEventDefault')
    alert('Sorry \n We are working on this')
  }

  const {
    classAdded,
    type,
    placeholder,
    handleEvents = handleEventsDefault,
    action = {},
  } = props

  return (
    <input
      className={`Input ${classAdded}`}
      type={type}
      placeholder={placeholder}
      onChange={event => handleEvents(event, action)}
    />
  )
}
