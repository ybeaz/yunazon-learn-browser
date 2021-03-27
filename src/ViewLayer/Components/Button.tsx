import React from 'react'

import { IconContext } from 'react-icons'
import {
  MdPrint,
  MdForward,
  MdRemoveCircle,
  MdPause,
  MdPlayArrow,
  MdPerson,
  MdMenu,
  MdSearch,
} from 'react-icons/md'

const ICON = {
  MdPrint,
  MdForward,
  MdRemoveCircle,
  MdPause,
  MdPlayArrow,
  MdMenu,
  MdSearch,
  MdPerson,
}

export const Button: Function = (props: any): JSX.Element => {
  const handleEventsDefault: Function = (): void => {
    console.info('Button', 'handleEventDefault')
    alert('Sorry \n We are working on this')
  }
  const {
    icon,
    capture,
    classAdded,
    handleEvents = handleEventsDefault,
    action = {},
  } = props
  const Icon = ICON[icon]

  return (
    <div className={`Button ${classAdded}`}>
      <button
        className={`Button__button ${classAdded}__button`}
        type='button'
        onClick={event => handleEvents(event, action)}
      >
        {Icon ? (
          <IconContext.Provider
            value={{
              className: `Button__button_in ${classAdded}__button_in`,
            }}
          >
            <Icon />
          </IconContext.Provider>
        ) : capture ? (
          <div className={`Button__button_in ${classAdded}__button_in`}>
            {capture}
          </div>
        ) : null}
      </button>
    </div>
  )
}
