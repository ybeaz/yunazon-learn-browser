import { useState } from 'react'
import useEventListener from './useEventListener'

/**
 * @link https://github.com/sergeyleschev/react-custom-hooks/tree/main/src/hooks
 */
export default function EventListenerComponent() {
  const [key, setKey] = useState('')
  useEventListener('keydown', (e: any) => {
    setKey(e.key)
  })

  return <div>Last Key: {key}</div>
}
