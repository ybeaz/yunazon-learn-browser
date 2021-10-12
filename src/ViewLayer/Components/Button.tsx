import React from 'react'

import { handleEvents } from '../../DataLayer/index.handleEvents'
import { IconContext } from 'react-icons'
import {
  MdAddBox,
  MdQueue,
  MdHome,
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

import {
  FaYinYang,
  FaFacebook,
  FaVk,
  FaTwitter,
  FaGooglePlusG,
} from 'react-icons/fa'
import { BsLink45Deg, BsQuestionCircle } from 'react-icons/bs'
import { HiOutlineAcademicCap } from 'react-icons/hi'

const ICON = {
  FaYinYang,
  FaFacebook,
  FaVk,
  FaTwitter,
  FaGooglePlusG,
  MdAddBox,
  MdQueue,
  MdHome,
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
interface ButtonArgs {
  icon?: string | null
  icon2?: string | null
  captureLeft?: string | JSX.Element
  captureRight?: string
  classAdded?: string
  action?: any
  isDisplaying?: boolean // is the button displaing at all
  tooltipText?: string
  tooltipPosition?: string // options: ['top','right','bottom','left']
  isTooltipVisible?: boolean
  isUnderlined?: boolean
  handleEvents?: Function
}

export const Button: React.FunctionComponent<ButtonArgs> = (
  props: ButtonArgs
): React.ReactElement => {
  const {
    icon,
    icon2 = null,
    captureLeft,
    captureRight,
    classAdded,
    action = {},
    isDisplaying = true,
    tooltipText = '',
    tooltipPosition = '',
    isTooltipVisible = false,
    isUnderlined = false,
    handleEvents: handleEventsCustom,
  } = props
  const Icon = ICON[icon]
  const Icon2 = ICON[icon2]

  const classDisplay = isDisplaying === true ? '' : 'Button_none'
  const handleEventsToUse = handleEventsCustom
    ? handleEventsCustom
    : handleEvents

  let classTooltipAdd = {
    top: '_tooltipTop',
    right: '_tooltipRight',
    bottom: '_tooltipBottom',
    left: '_tooltipLeft',
  }[tooltipPosition]

  classTooltipAdd = isTooltipVisible
    ? `${classTooltipAdd} __tooltipTextVisible`
    : classTooltipAdd

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
        onClickCapture={event => handleEventsToUse(event, action)}
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
            {icon2 && (
              <IconContext.Provider
                value={{
                  className: `_icon`,
                }}
              >
                <Icon2 />
              </IconContext.Provider>
            )}
          </div>
        ) : null}
        {captureRight ? (
          <div className={`_in`}>
            <div className={`_capture_right`}>{captureRight}</div>
          </div>
        ) : null}
      </button>
      {isUnderlined && <hr className='__underlined' />}
    </div>
  )
}
