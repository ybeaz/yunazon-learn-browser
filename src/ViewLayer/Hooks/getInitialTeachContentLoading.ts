import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { handleEvents } from './handleEvents'
import { actionAsync } from '../../DataLayer/index.action'

/**
 * @description Make initial call for data and pupulate it to the store
 */
export const getInitialTeachContentLoading: Function = (): void => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getLoadedPlayerScript = () => {
      var tag = document.createElement('script')
      tag.id = 'youtube_com_iframe_api'
      tag.src = 'https://www.youtube.com/iframe_api'
      const parent = document.getElementsByTagName('head')[0]
      parent.prepend(tag)
    }

    const makeDispatchAsyncWrappered = async () => {
      await getLoadedPlayerScript()

      await dispatch(actionAsync.GET_GLOBAL_VARS.REQUEST())
      await dispatch(actionAsync.GET_CONTENT_DATA.REQUEST())
      await handleEvents({}, { typeEvent: 'SAVE_ANALYTICS_INIT_DATA' })
      await handleEvents({}, { typeEvent: 'GET_INITIAL_QUERY_SETTING' })
    }

    if (!document.getElementById('youtube_com_iframe_api'))
      makeDispatchAsyncWrappered()
  }, [])
}
