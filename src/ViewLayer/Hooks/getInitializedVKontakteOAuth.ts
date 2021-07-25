import { useEffect } from 'react'

import { timeout } from '../../Shared/timeout'
import { handleEvents } from './handleEvents'
import { getPrependedExternalScript } from '../../Shared/getPrependedExternalScript'

/**
 * @description Make initial call for data and pupulate it to the store
 * @link https://vk.com/dev/Login?aid=7910949&mode=2
 * @link https://vk.com/dev/widget_auth
 */
export const getInitializedVKontakteOAuth: Function = (
  branch: string
): void => {
  useEffect(() => {
    const scriptProps = {
      src: 'https://vk.com/js/api/openapi.js?169',
      id: 'vk-root',
      defer: true,
    }

    const makeDispatchAsyncWrappered = async () => {
      try {
        await getPrependedExternalScript(scriptProps)
        await timeout(1000)
        // @ts-ignore
        await window.VK.init({ apiId: 7910953 })
        // @ts-ignore
        await window.VK.Widgets.Auth('vk_auth', {
          width: '300px',
          onAuth: function (data) {
            handleEvents({}, { typeEvent: 'AUTH_VKONTAKTE', data })
          },
        })
        handleEvents({}, { typeEvent: 'SET_OAUTH_VK_SCRIPT_STATE', data: true })
      } catch (error) {
        console.info('getInitializedVKontakteOAuth [34]', {
          message: error.message,
        })
      }
    }

    if (!document.getElementById(scriptProps.id)) makeDispatchAsyncWrappered()
  }, [branch])
}
