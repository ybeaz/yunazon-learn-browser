import { useMediaQuery } from './useMediaQuery'

/**
 * @link https://github.com/sergeyleschev/react-custom-hooks/tree/main/src/hooks
 */
export default function MediaQueryComponent() {
  const isLarge = useMediaQuery('(min-width: 200px)')

  return <div>Large: {isLarge.toString()}</div>
}
