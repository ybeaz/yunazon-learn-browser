import { useHistory } from 'react-router-dom'

/**
 * @description NOT USED. Functional hook to redirect app programmatically
 * @link https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
 * @methods (full list) push(location), replace(location), go(number), goBack(), goForward()
 * @example getRedirected({}, { typeRedirect: 'back' })
 */
export const getRedirected: Function = (
  e,
  { typeRedirect, pathName }
): void => {
  const history = useHistory()
  if (typeRedirect === 'newLocation' && pathName) history.push(pathName)
  else if (typeRedirect === 'back') history.back()
  else if (typeRedirect === 'forward') history.forward()
}
