import React from 'react'

import { IconContext } from 'react-icons'
import {
  MdBlock,
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
// go/pitchday
const ICON = {
  MdBlock,
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

export const Button: React.FunctionComponent<any> = (
  props: IButton
): JSX.Element => {
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
        className={`__button`}
        type='button'
        onClick={event => handleEvents(event, action)}
      >
        {Icon ? (
          <>
            <IconContext.Provider
              value={{
                className: `_in`,
              }}
            >
              <Icon />
            </IconContext.Provider>
            {icon2 !== null ? (
              <IconContext.Provider
                value={{
                  className: `_in`,
                }}
              >
                <Icon2 />
              </IconContext.Provider>
            ) : null}
          </>
        ) : capture ? (
          <div className={`_in`}>{capture}</div>
        ) : null}
      </button>
    </div>
  )
}
