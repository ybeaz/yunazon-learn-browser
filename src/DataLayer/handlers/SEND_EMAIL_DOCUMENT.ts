import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync, actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SEND_EMAIL_DOCUMENT: ActionEventType = (event, data) => {
  dispatch(actionAsync.SEND_EMAIL_DOCUMENT.REQUEST(data))
  dispatch(
    actionSync.SET_MODAL_FRAMES([
      {
        childName: 'EmalInputs',
        isActive: false,
        childProps: {},
      },
    ])
  )
}
