import React from 'react'

import { IconContext } from 'react-icons'
import {
  MdContactMail,
  MdAddShoppingCart,
  MdFlag,
  MdMailOutline,
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

import { BsLink45Deg, BsQuestionCircle } from 'react-icons/bs'
import { HiOutlineAcademicCap } from 'react-icons/hi'

const ICON = {
  MdContactMail,
  MdAddShoppingCart,
  MdFlag,
  BsLink45Deg,
  MdMailOutline,
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
  tooltipText?: string
  tooltipPosition?: string
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
    tooltipText = '',
    tooltipPosition = '',
  } = props
  const Icon = ICON[icon]
  const Icon2 = ICON[icon2]

  const classDisplay = isDisplaying === true ? '' : 'Button_none'

  const classTooltipAdd = {
    top: '_tooltipTop',
    right: '_tooltipRight',
    bottom: '_tooltipBottom',
    left: '_tooltipLeft',
  }[tooltipPosition]

  return (
    <div className={`Button ${classAdded} ${classDisplay}`}>
      {tooltipText ? (
        <span className={`__tooltipText ${classTooltipAdd}`}>
          {tooltipText}
        </span>
      ) : null}

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
                  className: `_icon`,
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
