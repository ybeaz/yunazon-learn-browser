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

import { BsQuestionCircle } from 'react-icons/bs'
import { HiOutlineAcademicCap } from 'react-icons/hi'

const ICON = {
  BsQuestionCircle,
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
  icon?: string
  icon2?: string | null
  captureLeft?: string
  captureRight?: string
  classAdded?: string
  handleEvents?: Function
  action?: any
  isDisplaying?: boolean
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
    captureLeft,
    captureRight,
    classAdded,
    handleEvents = handleEventsDefault,
    action = {},
    isDisplaying = true,
  } = props
  const Icon = ICON[icon]
  const Icon2 = ICON[icon2]

  const classDisplay = isDisplaying === true ? '' : 'Button_none'

  return (
    <div className={`Button ${classAdded} ${classDisplay}`}>
      <button
        className={`__button`}
        type='button'
        onClick={event => handleEvents(event, action)}
      >
        {captureLeft ? (
          <div className={`_in`}>
            <div className={`_capture_left`}>{captureLeft}</div>
          </div>
        ) : null}
        {Icon ? (
          <div className={`_in`}>
            <IconContext.Provider
              value={{
                className: `_icon`,
              }}
            >
              <Icon />
            </IconContext.Provider>
            {icon2 !== null ? (
              <IconContext.Provider
                value={{
                  className: `_svg`,
                }}
              >
                <Icon2 />
              </IconContext.Provider>
            ) : null}
          </div>
        ) : null}
        {captureRight ? (
          <div className={`_in`}>
            <div className={`_capture_right`}>{captureRight}</div>
          </div>
        ) : null}
      </button>
    </div>
  )
}
