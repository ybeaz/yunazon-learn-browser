import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { ONCHANGE_INPUT_SEARCH } from './ONCHANGE_INPUT_SEARCH'

const { dispatch, getState } = store

export const CLICK_ON_CANCEL_APPLIED_SEARCH: ActionEventType = (event, dataIn) => {
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
