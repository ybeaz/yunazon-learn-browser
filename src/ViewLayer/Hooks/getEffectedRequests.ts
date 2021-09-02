import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { actionAsync } from '../../DataLayer/index.action'

export const getEffectedRequests: Function = (requestList: string[]): void => {
  const dispatch = useDispatch()

  useEffect(() => {
    const makeDispatchAsyncWrappered = async (requestList2: Array<string>) =>
      requestList2.forEach(async (item: string) =>
        dispatch(actionAsync[item].REQUEST())
      )

    makeDispatchAsyncWrappered(requestList)
  }, [])
}
