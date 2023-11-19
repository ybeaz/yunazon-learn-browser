import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const SEP_INTRO_IN: ActionEventType = (event, data) => {
  const data2 = [
    {
      childName: data,
      isActive: true,
      childProps: { intro: data },
    },
  ]
  dispatch(actionSync.SET_MODAL_FRAMES(data2))
}
