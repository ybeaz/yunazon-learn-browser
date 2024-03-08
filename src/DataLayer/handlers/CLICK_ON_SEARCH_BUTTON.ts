import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { RootStoreType } from '../../Interfaces/RootStoreType'

const { dispatch, getState } = store

export const CLICK_ON_SEARCH_BUTTON: ActionEventType = (event, data) => {
  const {
    componentsState: { screenActive },
  } = getState() as RootStoreType

  if (screenActive === 'AcademyMatrix' || screenActive === 'MyModules')
    dispatch(actionAsync.GET_MODULES.REQUEST())
  else if (screenActive === 'MyDocuments') dispatch(actionAsync.GET_DOCUMENTS.REQUEST())

  dispatch(actionSync.TOGGLE_IS_MOBILE_SEARCH_INPUT({ isMobileSearchInput: false }))
}
