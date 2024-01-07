import { useEffect } from 'react'

import { getPrependedExternalScript } from '../../Shared/getPrependedExternalScript'
import { handleEvents } from '../../DataLayer/index.handleEvents'

/**
 * @description Make initial call for data and pupulate it to the store
 */
export const useLoadedInitialTeachContent: Function = (
  { isSkipping }: { isSkipping: boolean } = { isSkipping: false }
): void => {
  useEffect(() => {
    if (isSkipping) return

    const scriptProps = {
      src: 'https://www.youtube.com/iframe_api',
      id: 'youtube_com_iframe_api',
    }

    const makeDispatchAsyncWrappered = async () => {
      await getPrependedExternalScript(scriptProps)

      handleEvents({}, { typeEvent: 'SAVE_ANALYTICS_INIT_DATA' })
      handleEvents({}, { typeEvent: 'SELECT_LANGUAGE_APP_INIT' })
      handleEvents({}, { typeEvent: 'SET_INPUT_SEARCH' })
    }

    if (!document.getElementById(scriptProps.id)) makeDispatchAsyncWrappered()
  }, [])
}
