import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ActionReduxType } from 'yourails_common'
import { actionSync, actionAsync, ACTIONS_SYNC, ACTIONS_ASYNC } from '../../DataLayer/index.action'
import { handleEvents } from '../../DataLayer/index.handleEvents'
import * as handleEventsAll from '../../DataLayer/handlers'

/**
 * @description useEffectedInitialRequests
 * @comment The function consider action types to select its sourcein the following sequence:
 * - handler actions
 * - Sync actions
 * - Async actions
 */
export const useEffectedInitialRequests: Function = (
  requestList: string[] | any[],
  triggers: any[] = []
): void => {
  const dispatch = useDispatch()

  useEffect(() => {
    const makeDispatchAsyncWrappered = async (requestList2: Array<string>) => {
      console.info('useEffectedInitialRequests [24]', { triggers, requestList2 })
      for await (const action of requestList2) {
        if (typeof action === 'string') {
          if (ACTIONS_SYNC.includes(action)) await dispatch(actionSync[action]())
          else if (ACTIONS_ASYNC.includes(action)) await dispatch(actionAsync[action].REQUEST())
        } else if (typeof action !== 'string') {
          console.info('useEffectedInitialRequests [30]', { triggers, requestList2, action })
          const { type = '', data } = action as ActionReduxType
          if (Object.keys(handleEventsAll).includes(type)) await handleEvents({}, action)
          else if (ACTIONS_SYNC.includes(type)) await dispatch(actionSync[type](data))
          else if (ACTIONS_ASYNC.includes(type)) await dispatch(actionAsync[type].REQUEST(data))
        }
      }

      // Promise.all(
      //   requestList2.map(async (action: string | ActionReduxType) => {
      //     if (typeof action === 'string') {
      //       if (ACTIONS_SYNC.includes(action)) await dispatch(actionSync[action]())
      //       else if (ACTIONS_ASYNC.includes(action)) await dispatch(actionAsync[action].REQUEST())
      //     } else if (typeof action !== 'string') {
      //       console.info('useEffectedInitialRequests [26]', { triggers, requestList2, action })
      //       const { type = '', data } = action as ActionReduxType
      //       if (Object.keys(handleEventsAll).includes(type)) await handleEvents({}, action)
      //       else if (ACTIONS_SYNC.includes(type)) await dispatch(actionSync[type](data))
      //       else if (ACTIONS_ASYNC.includes(type)) await dispatch(actionAsync[type].REQUEST(data))
      //     }
      //   })
      // )
    }

    makeDispatchAsyncWrappered(requestList)
    return () => {}
  }, triggers)
}
