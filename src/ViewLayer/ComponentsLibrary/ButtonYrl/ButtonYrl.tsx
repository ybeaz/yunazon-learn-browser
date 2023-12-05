import React from 'react'

import { ImageYrl } from './../ImageYrl/ImageYrl'
import { IconYrl } from './../IconYrl/IconYrl'
import { handleEvents } from '../../../DataLayer/index.handleEvents'
import { getClasses } from '../../../Shared/getClasses'

import {
  ButtonYrlPropsType,
  ButtonYrlPropsOutType,
  ButtonYrlComponentType,
  ButtonYrlType,
} from './ButtonYrlTypes'

/**
 * @description Component to render ButtonYrl
 * @propsOut 
    buttonYrlProps: {
      icon: 'MdForward',
      classAdded: 'Button_MdBackward2',
      action: {
        typeEvent: 'SET_PAGE_CURSOR',
        data: { myData: 1 },
      },
      isDisplaying: true // isButtonSlideBackward,
    },
 * @import import { ButtonYrl, ButtonYrlPropsType, ButtonYrlPropsOutType, ButtonYrlType } 
             from '../ComponentsLibrary/'
 */
const ButtonYrlComponent: ButtonYrlComponentType = (
  props: ButtonYrlPropsType
) => {
  const {
    icon = undefined,
    icon2 = undefined,
    imageSrc = undefined,
    captureLeft,
    captureRight,
    classAdded = '',
    action = {},
    isDisplaying = true,
    tooltipText = '',
    tooltipPosition = 'top',
    isTooltipVisibleForced = false,
    isUnderlined = false,
    handleEvents: handleEventsCustom,
    children,
  } = props

  const classDisplay = isDisplaying === true ? '' : 'Button_none'
  const handleEventsToUse = handleEventsCustom
    ? handleEventsCustom
    : handleEvents

  const classTooltipsDictionary: Record<string, string> = {
    top: '_tooltipTop',
    right: '_tooltipRight',
    bottom: '_tooltipBottom',
    left: '_tooltipLeft',
  }

  let classTooltipAdd: any = classTooltipsDictionary[tooltipPosition]

  classTooltipAdd = isTooltipVisibleForced
    ? `${classTooltipAdd} __tooltipTextVisible`
    : classTooltipAdd

  const propsOut: ButtonYrlPropsOutType = {
    iconReactProps: {
      icon,
      icon2,
      classAdded: `_in IconYrl_${classAdded}`,
    },
    imageProps: {
      classAdded: `_in Image_${classAdded}`,
      src: imageSrc,
    },
  }

  return (
    <div className={getClasses('ButtonYrl', [classAdded, classDisplay])}>
      {tooltipText ? (
        <span className={`__tooltipText ${classTooltipAdd}`}>
          {tooltipText}
        </span>
      ) : null}

      <button
        className={`__button`}
        type='button'
        onClickCapture={(event: React.MouseEvent<HTMLButtonElement>) =>
          handleEventsToUse(event, action)
        }
      >
        {captureLeft ? (
          <div className='_in'>
            <div className={`_capture_left`}>{captureLeft}</div>
          </div>
        ) : null}
        {icon || icon2 ? <IconYrl {...propsOut.iconReactProps} /> : null}
        {imageSrc && <ImageYrl {...propsOut.imageProps} />}
        {captureRight ? (
          <div className='_in'>
            <div className={`_capture_right`}>{captureRight}</div>
          </div>
        ) : null}
        {children}
      </button>
      {isUnderlined && <hr className='__underlined' />}
    </div>
  )
}

export const ButtonYrl: ButtonYrlType = React.memo(ButtonYrlComponent)

export type {
  ButtonYrlPropsType,
  ButtonYrlPropsOutType,
  ButtonYrlComponentType,
  ButtonYrlType,
}
