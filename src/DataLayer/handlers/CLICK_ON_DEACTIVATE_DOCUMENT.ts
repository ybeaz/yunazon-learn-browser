// @ts-nocheck

import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_ON_DEACTIVATE_DOCUMENT: ActionEventType = (event, data) => {
  dispatch(actionAsync.DEACTIVATE_DOCUMENTS.REQUEST(data))
}
