import React from 'react'

import { ClassAddedType } from 'yourails_common'

export type TimerComponentPropsType = {
  classAdded?: string
  miliseconds: number | null
  isStoping: boolean
  isDisplaying?: boolean // is element present on the page and visible/ displaying?
  isVisible?: boolean // element is present on the page, but if it is visible/ displaying?
}

export type TimerPropsType = Omit<TimerComponentPropsType, 'storeStateSlice'>

export type TimerPropsOutType = Record<string, any>

/**
 * @import import { TimerComponentPropsType, TimerPropsType, TimerPropsOutType, TimerComponentType, TimerType } from './TimerTypes'
 */
export interface TimerComponentType extends React.FunctionComponent<TimerComponentPropsType> {
  (props: TimerComponentPropsType): React.ReactElement
}

export type TimerType = React.FunctionComponent<TimerPropsType>
