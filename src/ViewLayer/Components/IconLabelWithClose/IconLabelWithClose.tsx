import React from 'react'

import { withPropsYrl, IconYrl, ButtonYrl } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'

import { getClasses } from 'yourails_common'
import {
  IconLabelWithCloseComponentPropsType,
  IconLabelWithClosePropsType,
  IconLabelWithClosePropsOutType,
  IconLabelWithCloseComponentType,
  IconLabelWithCloseType,
} from './IconLabelWithCloseTypes'

/**
 * @description Component to render IconLabelWithClose
 * @import import { IconLabelWithClose, IconLabelWithClosePropsType, IconLabelWithClosePropsOutType, IconLabelWithCloseType } 
             from '../Components/IconLabelWithClose/IconLabelWithClose'
 */
const IconLabelWithCloseComponent: IconLabelWithCloseComponentType = (
  props: IconLabelWithCloseComponentPropsType
) => {
  const { classAdded, icon, capture, action, handleEvents } = props

  const propsOut: IconLabelWithClosePropsOutType = {
    iconLabelProps: {
      classAdded: 'Icon_IconLabelWithClose',
      icon,
      isDisplaying: true,
    },
    buttonCloseProps: {
      icon: 'MdClose',
      classAdded: 'Button_IconLabelWithClose',
      handleEvents,
      action,
      isDisplaying: true,
      tooltipText: '',
      tooltipPosition: '',
      isTooltipVisibleForced: false,
      isUnderlined: false,
    },
  }

  return (
    <div className={getClasses('IconLabelWithClose', classAdded)}>
      <IconYrl {...propsOut.iconLabelProps} />
      <div className='_capture'>{capture}</div>
      <ButtonYrl {...propsOut.buttonCloseProps} />
    </div>
  )
}

export const IconLabelWithClose: IconLabelWithCloseType = withPropsYrl({
  handleEvents: handleEventsIn,
})(React.memo(IconLabelWithCloseComponent))

export type {
  IconLabelWithClosePropsType,
  IconLabelWithClosePropsOutType,
  IconLabelWithCloseComponentType,
  IconLabelWithCloseType,
}
