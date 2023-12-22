import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ActionReduxType } from '../../Interfaces/ActionReduxType'
import { actionAsync } from '../../DataLayer/index.action'

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
            await dispatch(actionAsync[action].REQUEST())
          } else if (typeof action !== 'string') {
            const { type = '', data } = action as ActionReduxType
            await dispatch(actionAsync[type].REQUEST(data))
          }
        })
      )

    makeDispatchAsyncWrappered(requestList)
  }, triggers)
}
