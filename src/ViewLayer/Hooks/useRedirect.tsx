import { useNavigate } from 'react-router-dom'

/**
 * @description NOT USED. Functional hook to redirect app programmatically
 * @link https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
 * @methods (full list) push(location), replace(location), go(number), goBack(), goForward()
 * @example useRedirect({}, { typeRedirect: 'back' })
 * @import import { useRedirect } from '../../Hooks/useRedirect'
 */
export const useRedirect: Function = (
  e: any,
  { typeRedirect, pathName }: { typeRedirect: string; pathName: string }
): void => {
  const navigate = useNavigate()
  if (typeRedirect === 'newLocation' && pathName) navigate(pathName)
  else if (typeRedirect === 'back') navigate(-1)
  else if (typeRedirect === 'forward') navigate(1)
}
