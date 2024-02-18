import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionAsync, actionSync } from '../../DataLayer/index.action'

const { dispatch, getState } = store

export const CREATE_DOCUMENT: ActionEventType = (event, data) => {
  const data2 = [
    {
      childName: 'QuestionScores',
      isActive: false,
      childProps: {},
    },
  ]
  dispatch(actionSync.SET_MODAL_FRAMES(data2))

  dispatch(actionAsync.CREATE_DOCUMENT_SCENARIO.REQUEST(data))
}
