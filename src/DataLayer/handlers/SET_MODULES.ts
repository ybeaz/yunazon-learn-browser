import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SET_MODULES: ActionEventType = (event, data) => {
  dispatch(actionSync.SET_MODULES(data))

  const moduleID = data ? data?.moduleID : ''
  dispatch(actionSync.SET_MODULE_ID_ACTIVE({ moduleID }))
}
