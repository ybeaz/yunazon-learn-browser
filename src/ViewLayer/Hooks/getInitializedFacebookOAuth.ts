import { useEffect } from 'react'

import { timeout } from '../../Shared/timeout'
import { handleEvents } from './handleEvents'
import { getPrependedExternalScript } from '../../Shared/getPrependedExternalScript'

declare global {
  interface Window {
    FB: any
    statusChangeCallback: any
  }
}

/**
 * @description Make initial call for data and pupulate it to the store
 * @link https://developers.facebook.com/apps/4763706043658984/dashboard/?business_id=848662925772143
 * @link https://developers.facebook.com/docs/facebook-login/web/login-button
 */
export const getInitializedFacebookOAuth: Function = (branch: string): void => {
  useEffect(() => {
    const scriptProps = {
      src: 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0&appId=1654554724606416&autoLogAppEvents=1',
      id: 'fb-root',
      defer: true,
      crossOrigin: 'anonymous',
      nonce: 'Wxx1aJlO',
    }

    const scriptProps2 = {
      src: 'https://un.userto.com/javascripts/fbOAuthInit.js',
      id: 'facebook_oauth_script',
      defer: true,
    }

    const makeDispatchAsyncWrappered = async () => {
      try {
        await getPrependedExternalScript(scriptProps)
        await getPrependedExternalScript(scriptProps2)
        await timeout(1000)
        await window.FB.getLoginStatus(function (response) {
          handleEvents({}, { typeEvent: 'AUTH_FACEBOOK', data: response })
        })
        handleEvents({}, { typeEvent: 'SET_OAUTH_FB_SCRIPT_STATE', data: true })
      } catch (error) {
        console.info('getInitializedFacebookOAuth [34]', {
          message: error.message,
        })
      }
    }

    if (
      !document.getElementById(scriptProps.id) ||
      !document.getElementById(scriptProps2.id)
    ) {
      makeDispatchAsyncWrappered()
    }
  }, [branch])
}
