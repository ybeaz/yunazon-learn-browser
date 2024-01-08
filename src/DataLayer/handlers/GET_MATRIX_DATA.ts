import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const GET_MATRIX_DATA: ActionEventType = (event, data) => {
  dispatch(actionAsync.GET_MATRIX_DATA.REQUEST())
}
