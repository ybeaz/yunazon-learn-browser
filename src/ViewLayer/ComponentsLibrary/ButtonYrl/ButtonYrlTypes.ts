import React, { ReactElement } from 'react'
import { ActionReduxType } from '../../../Interfaces/ActionReduxType'

export type ButtonYrlPropsType = {
  icon?: string // react name for the first icon inside the button
  icon2?: string // react name for the second icon to exchange first one
  imageSrc?: string // image source for the image inside the button
  captureLeft?: string | ReactElement // capture on the left of the icon/ image
  captureRight?: string // capture on the right of the icon/ button
  classAdded: string // calss added to the button, to make it css unique
  action?: ActionReduxType // action to assign the button
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
  tooltipText?: string // tooltips text for the button to provide user with a promt
  tooltipPosition?: string // options: ['top','right','bottom','left']
  isTooltipVisibleForced?: boolean // is tooltips visible, to manage it
  isUnderlined?: boolean // is the button underlined to highlight on of the buttons
  handleEvents?: Function // to pass handleEvents custom functioon instead of the action
  children?: string | ReactElement
}

export type ButtonYrlPropsOutType = Record<string, any>

/**
 * @import import { ButtonYrlType } from './ButtonYrlType'
 */
export interface ButtonYrlComponentType
  extends React.FunctionComponent<ButtonYrlPropsType> {
  (props: ButtonYrlPropsType): React.ReactElement
}

export type ButtonYrlType = React.FunctionComponent<ButtonYrlPropsType>
