// @ts-nocheck

import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const TEMPLATE_HANDLER: ActionEventType = (event, data) => {
  dispatch(
    actionAsync.TEMPLATE_ASYNC.REQUEST({
      id: data.id,
    })
  )
}
