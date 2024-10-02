import React from 'react'
import { NavLink } from 'react-router-dom'

import { ImageYrl } from './../ImageYrl/ImageYrl'
import { IconYrl } from './../IconYrl/IconYrl'
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
             from 'yourails_view_layer_web'
 */
const ButtonYrlComponent: ButtonYrlComponentType = (props: ButtonYrlPropsType) => {
  const {
    icon = undefined,
    icon2 = undefined,
    iconColor = undefined,
    icon2Color = undefined,
    imageSrc = undefined,
    captureLeft,
    captureRight,
    classAdded = '',
    action = {},
    isDisplaying = true,
    isVisible = true,
    tooltipText = '',
    tooltipPosition = 'top',
    isTooltipVisibleForced = false,
    isUnderlined = false,
    handleEvents,
    hrefTo = '',
    children,
  } = props

  const classDisplay = isDisplaying === true ? '' : 'Button_display_none'
  const classVisible = isVisible === true ? '' : 'Button_visible_none'

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
      iconColor,
      icon2,
      icon2Color,
      classAdded: `_in IconYrl_${classAdded}`,
    },
    imageProps: {
      classAdded: `_in Image_${classAdded}`,
      src: imageSrc,
    },
  }

  const InnerLinkButtonContent = () => (
    <>
      {' '}
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
    </>
  )

  return (
    <div className={getClasses('ButtonYrl', [classAdded, classDisplay, classVisible])}>
      {tooltipText ? (
        <span className={`__tooltipText ${classTooltipAdd}`}>{tooltipText}</span>
      ) : null}

      <button
        className={`__button`}
        type='button'
        onClickCapture={(event: React.MouseEvent<HTMLButtonElement>) => handleEvents(event, action)}
      >
        {hrefTo ? (
          <NavLink className='_navLink' to={hrefTo}>
            <InnerLinkButtonContent />
          </NavLink>
        ) : (
          <InnerLinkButtonContent />
        )}
      </button>
      {isUnderlined && <hr className='__underlined' />}
    </div>
  )
}

export const ButtonYrl: ButtonYrlType = React.memo(ButtonYrlComponent)

export type { ButtonYrlPropsType, ButtonYrlPropsOutType, ButtonYrlComponentType, ButtonYrlType }
