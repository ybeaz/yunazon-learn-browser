import { useRef, useEffect } from 'react'

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
 * @link https://developers.facebook.com/docs/graph-api/reference/user/
 * @link https://developers.facebook.com/docs/graph-api/using-graph-api
 */
export const getInitializedFacebookOAuth: Function = (branch: string): void => {
  const status = useRef(false)

  useEffect(() => {
    const scriptProps = {
      src: 'https://connect.facebook.net/en_US/sdk.js#appId=4763706043658984&cookie=1&status=1&xfbml=1&version=v11.0&autoLogAppEvents=1',
      id: 'fb-root',
      defer: true,
      crossOrigin: 'anonymous',
      nonce: 'Wxx1aJlO',
    }

    const getFbApiResponse = () => {
      window.FB.api(
        '/me',
        'POST',
        {
          fields:
            'id,first_name,last_name,middle_name,name,name_format,picture,short_name',
        },
        function (response) {
          if (response && !response.error) {
            handleEvents({}, { typeEvent: 'AUTH_FACEBOOK', data: response })
          }
        }
      )
    }

    const makeDispatchAsyncWrappered = async () => {
      try {
        await getPrependedExternalScript(scriptProps)
        await timeout(1000)
        window.FB.getLoginStatus(function (response) {
          console.info('getInitializedFacebookOAuth [54]', {
            response,
            'status.current': status.current,
          })
          if (!status.current) getFbApiResponse()
          if (response.status === 'connected') status.current = true
        })
        handleEvents({}, { typeEvent: 'SET_OAUTH_FB_SCRIPT_STATE', data: true })
      } catch (error) {
        console.info('getInitializedFacebookOAuth [34]', {
          message: error.message,
        })
      }
    }

    if (!document.getElementById(scriptProps.id)) {
      makeDispatchAsyncWrappered()
    }
  }, [branch])
}
