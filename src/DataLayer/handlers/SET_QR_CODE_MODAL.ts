import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync, actionSync } from '../../DataLayer/index.action'

const { dispatch } = store

export const SET_QR_CODE_MODAL: ActionEventType = (event, data) => {
  const { isActive } = data

  dispatch(
    actionSync.SET_MODAL_FRAMES([
      {
        childName: 'QrCodeModalBody',
        isActive,
        childProps: {},
      },
    ])
  )
}
