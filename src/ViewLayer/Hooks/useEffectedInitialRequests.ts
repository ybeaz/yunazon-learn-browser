import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { ActionReduxType } from '../../Interfaces/ActionReduxType'
import { actionAsync } from '../../DataLayer/index.action'

export const useEffectedInitialRequests: Function = (
  requestList: string[] | any[],
  triggers: any[] = []
): void => {
  const dispatch = useDispatch()
  const countRef = useRef(0)

  useEffect(() => {
    const makeDispatchAsyncWrappered = async (requestList2: Array<string>) =>
      Promise.all(
        requestList2.map(async (action: string | ActionReduxType) => {
          if (countRef.current === 0) {
            if (typeof action === 'string') {
              await dispatch(actionAsync[action].REQUEST())
            } else if (typeof action !== 'string') {
              const { type = '', data } = action as ActionReduxType
              await dispatch(actionAsync[type].REQUEST(data))
            }

            countRef.current = 1
          }
        })
      )

    makeDispatchAsyncWrappered(requestList)
  }, triggers)
}
