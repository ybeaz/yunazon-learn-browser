import React, { ReactElement } from 'react'

import { IAction } from '../../Interfaces/IAction'
import { IconReact } from './IconReact'
import { handleEvents } from '../../DataLayer/index.handleEvents'
interface ButtonArgs {
  icon?: string | null
  icon2?: string | null
  captureLeft?: string | ReactElement
  captureRight?: string
  classAdded?: string
  action?: IAction
  isDisplaying?: boolean // is the button displaing at all
  tooltipText?: string
  tooltipPosition?: string // options: ['top','right','bottom','left']
  isTooltipVisible?: boolean
  isUnderlined?: boolean
  handleEvents?: Function
}

export const ButtonTest: React.FunctionComponent<ButtonArgs> = (
  props: ButtonArgs
): ReactElement => {
  return <div className='Button'>Button</div>
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

  const iconReactProps = {
    icon,
    icon2,
    classAdded: `_in IconReact_${classAdded}`,
  }

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
          <div className='_in'>
            <div className={`_capture_left`}>{captureLeft}</div>
          </div>
        ) : null}
        <IconReact {...iconReactProps} />
        {captureRight ? (
          <div className='_in'>
            <div className={`_capture_right`}>{captureRight}</div>
          </div>
        ) : null}
      </button>
      {isUnderlined && <hr className='__underlined' />}
    </div>
  )
}
