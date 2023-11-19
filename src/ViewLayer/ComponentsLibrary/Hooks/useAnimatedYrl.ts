import { useState, useEffect, useRef } from 'react'
// import { experimental_useEffectEvent as useEffectEvent } from 'react';

export type UseAnimatedYrlPropsType = {
  ref: Record<string, any>
  nameHtmlCssAttribute: string
  valueInit: number
  valueTarget: number
  duration: number
  trigger: any
  triggerShouldEqual: any
  testID?: string
}

export interface UseAnimatedYrlType {
  (props: UseAnimatedYrlPropsType): void
}

/**
 * @description React hook to provide animation, delay of appearance of an element
 * @import import { useAnimatedYrl } from './YrlNativeViewLibrary'
 */

export const useAnimatedYrl: UseAnimatedYrlType = ({
  ref,
  valueInit,
  valueTarget,
  nameHtmlCssAttribute,
  duration,
  trigger,
  triggerShouldEqual,
  testID,
}) => {
  const mode = valueInit < valueTarget ? 'In' : 'Out'

  useEffect(() => {
    let startTime: any = performance.now()
    let frameId: any = null

    const onProgress = (progress: number) => {
      if (ref.current && ref.current.style)
        ref.current.style[nameHtmlCssAttribute] = progress
    }

    const onFrameIn = (now: any) => {
      const timePassed = now - startTime
      const progress = Math.min(timePassed / duration, valueTarget)
      onProgress(progress)
      if (progress < valueTarget) {
        frameId = requestAnimationFrame(onFrameIn)
      }
    }

    const onFrameOut = (now: any) => {
      const timePassed = now - startTime < 0 ? 0 : now - startTime
      const durationTimePassed = (duration - timePassed) / timePassed
      const progress = Math.max(durationTimePassed, valueTarget)
      onProgress(progress)
      if (progress > valueTarget) {
        frameId = requestAnimationFrame(onFrameOut)
      }
    }

    const start = () => {
      if (trigger !== triggerShouldEqual) return
      onProgress(valueInit)
      startTime = performance.now()

      const onFrame = mode === 'In' ? onFrameIn : onFrameOut

      frameId = requestAnimationFrame(onFrame)
    }

    const stop = () => {
      cancelAnimationFrame(frameId)
      startTime = null
      frameId = null
    }

    start()
    return () => stop()
  }, [ref, duration, trigger])

  return undefined
}
