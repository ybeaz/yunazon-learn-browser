import { useRef, useState, useEffect } from 'react'

type CallableType = (...args: any[]) => any

export interface UseIntervalYrlType {
  (callback: CallableType, delay: number, isSlideShow: boolean): void
}

/**
 * @description Reeact hook to provide periodic function call
 * @link https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 * @link https://stackoverflow.com/questions/36299174/setinterval-in-a-react-app
 * @import import { useInterval } from './YrlNativeViewLibrary'
 *
 */
export const useIntervalYrl: UseIntervalYrlType = (
  callback,
  delay,
  isSlideShow
) => {
  const savedCallback = useRef(callback)
  const [intervalId, setIntervalId] = useState(0)

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }

    if (isSlideShow) {
      let id = window?.setInterval(tick, delay)
      setIntervalId(id)
      return () => clearInterval(id)
    } else {
      clearInterval(intervalId)
      return () => clearInterval(intervalId)
    }
  }, [delay, isSlideShow])
}
