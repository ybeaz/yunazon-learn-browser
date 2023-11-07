import { useEffect } from 'react'

import { timeout } from '../../Shared/timeout'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import { getPrependedExternalScript } from '../../Shared/getPrependedExternalScript'

declare global {
  interface Window {
    google: any
  }
}

/**
 * @description Make initial call for data and pupulate it to the store
 * @link https://console.cloud.google.com/apis/credentials?project=yourails-210718
 * @link https://developers.google.com/identity/gsi/web/guides/use-one-tap-js-api
 * @link https://developers.google.com/identity/sign-in/web/backend-auth#verify-the-integrity-of-the-id-token
 * @link explanation 'opt_out_or_no_session' https://www.intricatecloud.io/2020/12/passwordless-sign-in-with-google-one-tap-for-web/
 * @link example https://github.com/intricatecloud/google-one-tap-web-demo/blob/master/src/App.js
 */
export const getInitializedGoogleOAuth: Function = (): void => {
  useEffect(() => {
    const scriptProps = {
      src: 'https://accounts.google.com/gsi/client',
      id: 'google_oauth_script',
      defer: true,
    }

    const handleCredentialResponse = async (...args) => {
      handleEvents({}, { typeEvent: 'AUTH_GOOGLE', data: args })
    }

    const makeDispatchAsyncWrappered = async () => {
      try {
        await getPrependedExternalScript(scriptProps)
        await timeout(1000)
        await window.google.accounts.id.initialize({
          client_id:
            '756709380715-92ni8gbaiddbee18c1l63pjeu0pc1u27.apps.googleusercontent.com',
          prompt_parent_id: 'g_id_onload',
          cancel_on_tap_outside: false,
          callback: handleCredentialResponse,
          native_callback: handleCredentialResponse,
          // ux_mode: 'redirect',
        })
        // window.google.accounts.id.prompt(notification => {
        //   if (notification.isNotDisplayed()) {
        //     console.log(
        //       'getInitializedGoogleOAuth [47]',
        //       notification.getNotDisplayedReason()
        //     )
        //   } else if (notification.isSkippedMoment()) {
        //     console.log(
        //       'getInitializedGoogleOAuth [49]',
        //       notification.getSkippedReason()
        //     )
        //   } else if (notification.isDismissedMoment()) {
        //     console.log(
        //       'getInitializedGoogleOAuth [51]',
        //       notification.getDismissedReason()
        //     )
        //   }
        // })

        handleEvents(
          {},
          { typeEvent: 'SET_OAUTH_GOOGLE_SCRIPT_STATE', data: true }
        )
      } catch (error) {
        console.info('getInitializedGoogleOAuth [34]', {
          message: error.message,
        })
      }
    }

    if (!document.getElementById(scriptProps.id)) makeDispatchAsyncWrappered()
  }, [])
}
