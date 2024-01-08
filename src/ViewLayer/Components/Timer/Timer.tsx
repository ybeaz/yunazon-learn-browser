import React, { useState, useEffect, useRef } from 'react'

import { getClasses, ClassAddedType } from '../../../Shared/getClasses'
import {
  TimerComponentPropsType,
  TimerPropsType,
  TimerPropsOutType,
  TimerComponentType,
  TimerType,
} from './TimerTypes'

/**
 * @description Component to render Timer
 * @import import { Timer, TimerPropsType, TimerPropsOutType, TimerType } 
             from '../Components/Timer/Timer'
 */
const TimerComponent: TimerComponentType = (props: TimerComponentPropsType) => {
  const { miliseconds, isDisplaying = true, isVisible = true } = props

  const classAdded: string = props?.classAdded || ''

  const classDisplay =
    miliseconds && isDisplaying === true ? '' : 'Timer_display_none'
  const classVisible =
    miliseconds && isVisible === true ? '' : 'Timer_visible_none'

  const secondsInitial = miliseconds ? Math.round(miliseconds / 1000) : 0

  const [timerState, setTimerState] = useState(secondsInitial)
  const counterRef = useRef(secondsInitial)

  useEffect(() => {
    counterRef.current = timerState
  }, [timerState])

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (counterRef.current > 0) {
        setTimerState(counterRef.current - 1)
      }
    }, 1000)

    return () => {
      clearInterval(intervalID)
    }
  }, [])

  const propsOut: TimerPropsOutType = {}

  return (
    <div
      className={getClasses('Timer', [classAdded, classDisplay, classVisible])}
    >
      <div className='_number'>{timerState}</div>
    </div>
  )
}

export const Timer: TimerType = React.memo(TimerComponent)

export type { TimerPropsType, TimerPropsOutType, TimerComponentType, TimerType }
