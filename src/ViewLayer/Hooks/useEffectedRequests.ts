import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ActionReduxType } from '../../Interfaces/ActionReduxType'
import { actionAsync } from '../../DataLayer/index.action'

export const useEffectedRequests: Function = (
  requestList: string[] | any[]
): void => {
  const dispatch = useDispatch()

  useEffect(() => {
    const makeDispatchAsyncWrappered = async (requestList2: Array<string>) =>
      requestList2.forEach(async (action: string | ActionReduxType) => {
        if (typeof action === 'string') {
          dispatch(actionAsync[action].REQUEST())
        } else if (typeof action !== 'string' && action?.data) {
          const { type = '', data } = action as ActionReduxType
          dispatch(actionAsync[type].REQUEST(data))
        }
      })

    makeDispatchAsyncWrappered(requestList)
  }, [])
}
