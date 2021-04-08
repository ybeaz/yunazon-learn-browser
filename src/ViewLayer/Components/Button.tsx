import React from 'react'

import { IconContext } from 'react-icons'
import {
  MdClose,
  MdPrint,
  MdForward,
  MdRemoveCircle,
  MdPause,
  MdPlayArrow,
  MdPerson,
  MdMenu,
  MdSearch,
} from 'react-icons/md'

import { HiOutlineAcademicCap } from 'react-icons/hi'

const ICON = {
  HiOutlineAcademicCap,
  MdClose,
  MdPrint,
  MdForward,
  MdRemoveCircle,
  MdPause,
  MdPlayArrow,
  MdMenu,
  MdSearch,
  MdPerson,
}
interface IButton {
  icon: string
  icon2: string | null
  capture: string
  classAdded: string
  handleEvents: Function
  action: any
}

export const Button: Function = (props: IButton): JSX.Element => {
  const handleEventsDefault: Function = (): void => {
    console.info('Button', 'handleEventDefault')
    alert('Sorry \n We are working on this')
  }
  const {
    icon,
    icon2 = null,
    capture,
    classAdded,
    handleEvents = handleEventsDefault,
    action = {},
  } = props
  const Icon = ICON[icon]
  const Icon2 = ICON[icon2]

  return (
    <div className={`Button ${classAdded}`}>
      <button
        className={`Button__button ${classAdded}__button`}
        type='button'
        onClick={event => handleEvents(event, action)}
      >
        {Icon ? (
          <>
            <IconContext.Provider
              value={{
                className: `Button__button_in ${classAdded}__button_in`,
              }}
            >
              <Icon />
            </IconContext.Provider>
            {icon2 !== null ? (
              <IconContext.Provider
                value={{
                  className: `Button__button_in ${classAdded}__button_in`,
                }}
              >
                <Icon2 />
              </IconContext.Provider>
            ) : null}
          </>
        ) : capture ? (
          <div className={`Button__button_in ${classAdded}__button_in`}>
            {capture}
          </div>
        ) : null}
      </button>
    </div>
  )
}
