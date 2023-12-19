// @ts-nocheck

import { store } from '../store'
import { ActionEventType } from '../../@types/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CLICK_ON_DEACTIVATE_DOCUMENT: ActionEventType = (event, data) => {
  console.info('CLICK_ON_DEACTIVATE_DOCUMENT [11]', { data })
  // dispatch(
  //   actionAsync.DEACTIVATE_DOCUMENT.REQUEST({
  //     id: data.id,
  //   })
  // )
}
