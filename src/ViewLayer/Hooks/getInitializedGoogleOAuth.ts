import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getPrependedExternalScript } from '../../Shared/getPrependedExternalScript'

declare global {
  interface Window {
    google: any
  }
}

/**
 * @description Make initial call for data and pupulate it to the store
 */
export const getInitializedGoogleOAuth: Function = (): void => {
  useEffect(() => {
    const scriptProps = {
      src: 'https://accounts.google.com/gsi/client',
      id: 'google_oauth_script',
    }

    const makeDispatchAsyncWrappered = async () => {
      await getPrependedExternalScript(scriptProps)
    }

    if (!document.getElementById(scriptProps.id)) makeDispatchAsyncWrappered()
  }, [])
}
