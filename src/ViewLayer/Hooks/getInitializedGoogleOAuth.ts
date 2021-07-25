import { useEffect } from 'react'

import { timeout } from '../../Shared/timeout'
import { handleEvents } from './handleEvents'
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
          callback: handleCredentialResponse,
        })
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
