// @ts-nocheck

import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SET_PAGE_CURSOR: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_PAGE_CURSOR(data))
}
