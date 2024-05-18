import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ActionReduxType } from '../../Interfaces/ActionReduxType'
import { actionSync, actionAsync, ACTIONS_SYNC, ACTIONS_ASYNC } from '../../DataLayer/index.action'

export const useEffectedInitialRequests: Function = (
  requestList: string[] | any[],
  triggers: any[] = []
): void => {
  const dispatch = useDispatch()

  useEffect(() => {
    const makeDispatchAsyncWrappered = async (requestList2: Array<string>) =>
      Promise.all(
        requestList2.map(async (action: string | ActionReduxType) => {
          if (typeof action === 'string') {
            if (ACTIONS_SYNC.includes(action)) await dispatch(actionSync[action]())
            else if (ACTIONS_ASYNC.includes(action)) await dispatch(actionAsync[action].REQUEST())
          } else if (typeof action !== 'string') {
            const { type = '', data } = action as ActionReduxType
            if (ACTIONS_SYNC.includes(type)) await dispatch(actionSync[type](data))
            else if (ACTIONS_ASYNC.includes(type)) await dispatch(actionAsync[type].REQUEST(data))
          }
        })
      )

    makeDispatchAsyncWrappered(requestList)
  }, triggers)
}
