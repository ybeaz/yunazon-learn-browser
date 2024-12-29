import { ActionEventType } from 'yourails_common'
import { getRedirected } from 'yourails_common'

export const GO_LINK_PATH: ActionEventType = (
  event,
  { navigate, pathname, isOrigin }: Record<'navigate' | 'pathname' | 'isOrigin', any> = {
    navigate: () => {},
    pathname: '',
    isOrigin: false,
  }
) => {
  try {
    if (isOrigin) {
      getRedirected(pathname, { isOrigin: true })
      return
    }

    navigate(pathname)

    setTimeout(() => {
      if (decodeURIComponent(location.pathname) !== pathname)
        getRedirected(pathname, { isOrigin: true })
    }, 500)
  } catch (error) {
    console.error('GO_LINK_PATH [13]', error)
  }
}
