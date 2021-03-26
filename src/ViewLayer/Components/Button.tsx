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
        <IconContext.Provider
          value={{
            className: `Button__button_icon ${classAdded}__button_icon`,
          }}
        >
          <Icon />
        </IconContext.Provider>
      </button>
    </div>
  )
}
