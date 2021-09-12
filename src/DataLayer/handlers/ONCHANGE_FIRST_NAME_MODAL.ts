import { store } from '../store'
import { actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const ONCHANGE_FIRST_NAME_MODAL = (event: any, data: any): void => {
  const { value } = event.target as HTMLInputElement
  dispatch(actionSync.ONCHANGE_FIRST_NAME_MODAL(value))
}
