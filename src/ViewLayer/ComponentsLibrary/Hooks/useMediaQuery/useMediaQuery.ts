import { useState, useEffect } from 'react'
import useEventListener from '../useEventListener/useEventListener'

/**
 * @link https://github.com/sergeyleschev/react-custom-hooks/tree/main/src/hooks
 */
export const useMediaQuery = (mediaQuery: any) => {
  const [isMatch, setIsMatch] = useState(false)
  const [mediaQueryList, setMediaQueryList] = useState(null)
  useEffect(() => {
    const list: any = window.matchMedia(mediaQuery)
    setMediaQueryList(list)
    setIsMatch(list.matches)
  }, [mediaQuery])
  // @ts-expect-error
  useEventListener('change', e => setIsMatch(e.matches), mediaQueryList)
  return isMatch
}
