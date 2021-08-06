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
 * @link https://stackoverflow.com/a/11297507/4791116
 */
export const getInitializedFacebookOAuth: Function = (branch: string): void => {
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
          console.info('getInitializedFacebookOAuth [40]', { response })
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
          if (response.status === 'connected') {
            // console.info('getInitializedFacebookOAuth [56]', {
            //   case: 'connected',
            //   response,
            // })
          } else if (response.status === 'unknown') {
            // console.info('getInitializedFacebookOAuth [62]', {
            //   case: 'login first',
            //   response,
            // })
          } else {
            // console.info('getInitializedFacebookOAuth [67]', {
            //   case: 'login first',
            //   response,
            // })
          }
        }, true)

        window.FB.Event.subscribe('auth.login', function (response) {
          // console.info('getInitializedFacebookOAuth [75]', {
          //   case: 'auth.login',
          //   response,
          // })
          if (response.status === 'connected') getFbApiResponse()
        })

        window.FB.Event.subscribe('auth.logout', function (response) {
          // console.info('getInitializedFacebookOAuth [83]', {
          //   case: 'auth.logout',
          //   response,
          // })
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
