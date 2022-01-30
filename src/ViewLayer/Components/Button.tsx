import React, { ReactElement } from 'react'

import { IAction } from '../../Interfaces/IAction'
import { Image } from './Image'
import { IconReact } from './IconReact'
import { handleEvents } from '../../DataLayer/index.handleEvents'
export interface ButtonArgs {
  icon?: string | null // react name for the first icon inside the button
  icon2?: string | null // react name for the second icon to exchange first one
  imageSrc?: string | null // image source for the image inside the button
  captureLeft?: string | ReactElement // capture on the left of the icon/ image
  captureRight?: string // capture on the right of the icon/ button
  classAdded?: string // calss added to the button, to make it css unique
  action?: IAction // action to assign the button
  isDisplaying?: boolean // is the button displaing at all
  tooltipText?: string // tooltips text for the button to provide user with a promt
  tooltipPosition?: string // options: ['top','right','bottom','left']
  isTooltipVisible?: boolean // is tooltips visible, to manage it
  isUnderlined?: boolean // is the button underlined to highlight on of the buttons
  handleEvents?: Function // to pass handleEvents custom functioon instead of the action
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
    icon = null,
    icon2 = null,
    imageSrc = null,
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

  const propsOut = {
    iconReactProps: {
      icon,
      icon2,
      classAdded: `_in IconReact_${classAdded}`,
    },
    imageProps: {
      classAdded: `_in Image_${classAdded}`,
      src: imageSrc,
    },
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
        {icon || icon2 ? <IconReact {...propsOut.iconReactProps} /> : null}
        {imageSrc && <Image {...propsOut.imageProps} />}
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
