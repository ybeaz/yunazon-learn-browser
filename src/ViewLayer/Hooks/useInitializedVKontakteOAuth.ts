import { useEffect } from 'react'

import { timeout } from '../../Shared/timeout'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { getPrependedExternalScript } from '../../Shared/getPrependedExternalScript'

/**
 * @description Make initial call for data and pupulate it to the store
 * @link https://vk.com/dev/Login?aid=7910949&mode=2
 * @link https://vk.com/dev/widget_auth
 */
export const useInitializedVKontakteOAuth: Function = (
  branch: string
): void => {
  useEffect(() => {
    const scriptProps = {
      src: 'https://vk.com/js/api/openapi.js?169',
      id: 'vk-root',
      defer: true,
    }

    // <script type="text/javascript" src="https://vk.com/js/api/openapi.js?169"></script>
    // <script type="text/javascript">
    //   VK.init({apiId: 7910949});
    // </script>

    // <!-- VK Widget -->
    // <div id="vk_auth"></div>
    // <script type="text/javascript">
    //   VK.Widgets.Auth("vk_auth", {"onAuth":function(data) {alert('user '+data['uid']+' authorized');}});
    // </script>

    const makeDispatchAsyncWrappered = async () => {
      try {
        await getPrependedExternalScript(scriptProps)
        await timeout(1000)
        handleEvents({}, { typeEvent: 'SET_OAUTH_VK_SCRIPT_STATE', data: true })

        // @ts-ignore
        window.VK.init({ apiId: 7910949 })
        // @ts-ignore
        window.VK.Widgets.Auth('vk_auth', {
          width: '300px',
          onAuth: function (data: any) {
            handleEvents({}, { typeEvent: 'AUTH_VKONTAKTE', data })
          },
        })
      } catch (error: any) {
        console.info('useInitializedVKontakteOAuth [34]', {
          message: error.message,
        })
      }
    }

    if (!document.getElementById(scriptProps.id)) makeDispatchAsyncWrappered()
  }, [branch])
}
