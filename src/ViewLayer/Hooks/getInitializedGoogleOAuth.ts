import { useEffect } from 'react'

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

    const makeDispatchAsyncWrappered = async () => {
      await getPrependedExternalScript(scriptProps)
    }

    if (!document.getElementById(scriptProps.id)) makeDispatchAsyncWrappered()
  }, [])
}
