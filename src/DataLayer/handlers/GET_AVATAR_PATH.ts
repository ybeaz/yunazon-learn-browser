import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

const getBase64 = (event, dispatchFunc) => {
  const file = event && event?.target?.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    dispatchFunc(reader.result)
  }
  reader.onerror = function (error) {
    console.log('GET_AVATAR_PATH [20 handler] Error: ', error)
  }
}

export const GET_AVATAR_PATH: ActionEventType = event => {
  const dispatchFunc: Function = (data2: string): Function => {
    return dispatch(actionSync.GET_AVATAR_PATH(data2))
  }

  getBase64(event, dispatchFunc)
}
