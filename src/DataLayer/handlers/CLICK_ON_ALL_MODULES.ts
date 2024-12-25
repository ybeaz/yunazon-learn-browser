import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync, actionSync } from '../../DataLayer/index.action'
import { PaginationNameEnumType } from 'yourails_common'
import { getSetUrlQueryBrowserApi, GetSetUrlQueryBrowserApiParamsType } from 'yourails_common'

const { dispatch } = store

export const CLICK_ON_ALL_MODULES: ActionEventType = event => {
  dispatch(actionSync.SET_INPUT_TO_STORE({ storeFormProp: 'modulesSearch', value: '' }))

  dispatch(
    actionSync.SET_COMPONENTS_STATE({
      componentsStateProp: 'tagsPick',
      value: [],
    })
  )
  dispatch(
    actionSync.SET_COMPONENTS_STATE({
      componentsStateProp: 'modulesSearchApplied',
      value: null,
    })
  )
  dispatch(actionSync.SET_TAGS_STATE({ tagsPick: [], tagsOmit: [] }))

  dispatch(actionAsync.READ_MODULES_CONNECTION.REQUEST({ isLoaderOverlay: true }))

  dispatch(
    actionSync.SET_PAGE_CURSOR({
      paginationName: PaginationNameEnumType['pageModules'],
      first: 0,
    })
  )
}
