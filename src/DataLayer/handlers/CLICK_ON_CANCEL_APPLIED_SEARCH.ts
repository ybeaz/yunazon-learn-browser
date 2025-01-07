import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { ONCHANGE_INPUT_SEARCH } from './ONCHANGE_INPUT_SEARCH'

const { dispatch, getState } = store

export const CLICK_ON_CANCEL_APPLIED_SEARCH: ActionEventType = (event, dataIn) => {
  dispatch(
    actionSync.SET_PAGE_CURSOR({
      paginationName: 'pageModules',
      first: 1,
      direction: 'set',
    })
  )

  dispatch(
    actionSync.SET_PAGE_CURSOR({
      paginationName: 'pageTags',
      first: 1,
      direction: 'set',
    })
  )

  ONCHANGE_INPUT_SEARCH({}, { storeFormProp: 'modulesSearch', value: '' })
  ONCHANGE_INPUT_SEARCH({}, { storeFormProp: 'tagsSearch', value: '' })

  let data = {
    componentsStateProp: 'modulesSearchApplied',
    value: '',
  }
  dispatch(actionSync.SET_COMPONENTS_STATE(data))

  data = {
    componentsStateProp: 'tagsSearchApplied',
    value: '',
  }
  dispatch(actionSync.SET_COMPONENTS_STATE(data))

  dispatch(
    actionAsync.READ_MODULES_CONNECTION.REQUEST({
      isLoaderOverlay: true,
    })
  )
}
