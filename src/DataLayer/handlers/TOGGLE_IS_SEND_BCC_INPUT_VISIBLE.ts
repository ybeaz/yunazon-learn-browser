import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const TOGGLE_IS_SEND_BCC_INPUT_VISIBLE: ActionEventType = () => {
  const {
    componentsState: { isSendBccInputVisible },
  } = getState()
  dispatch(
    actionSync.SET_COMPONENTS_STATE({
      componentsStateProp: 'isSendBccInputVisible',
      value: !isSendBccInputVisible,
    })
  )
}
