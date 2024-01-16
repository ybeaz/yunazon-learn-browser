import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { RootStoreType } from '../../Interfaces/RootStoreType'

const { dispatch, getState } = store

export const CLICK_ON_SEARCH_BUTTON: ActionEventType = (event, data) => {
  const {
    componentsState: { screenActive },
  } = getState() as RootStoreType

  if (screenActive === 'AcademyMatrix' || screenActive === 'MyCourses')
    dispatch(actionAsync.GET_COURSES.REQUEST())
  else if (screenActive === 'MyDocuments')
    dispatch(actionAsync.GET_DOCUMENTS.REQUEST())
}
