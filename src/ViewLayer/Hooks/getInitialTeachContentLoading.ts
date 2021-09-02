import { useEffect } from 'react'

import { getPrependedExternalScript } from '../../Shared/getPrependedExternalScript'
import { handleEvents } from './handleEvents'

/**
 * @description Make initial call for data and pupulate it to the store
 */
export const getInitialTeachContentLoading: Function = (): void => {
  useEffect(() => {
    const scriptProps = {
      src: 'https://www.youtube.com/iframe_api',
      id: 'youtube_com_iframe_api',
    }

    const makeDispatchAsyncWrappered = async () => {
      await getPrependedExternalScript(scriptProps)

      await handleEvents({}, { typeEvent: 'SAVE_ANALYTICS_INIT_DATA' })
      await handleEvents({}, { typeEvent: 'GET_INITIAL_QUERY_SETTING' })
    }

    if (!document.getElementById(scriptProps.id)) makeDispatchAsyncWrappered()
  }, [])
}
