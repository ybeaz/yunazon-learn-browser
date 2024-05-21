import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionAsync, actionSync } from '../../DataLayer/index.action'
import { PaginationNameEnumType } from '../../Interfaces/RootStoreType'
import { GO_LINK_PATH } from './GO_LINK_PATH'
import {
  getSetUrlQueryBrowserApi,
  GetSetUrlQueryBrowserApiParamsType,
} from '../../Shared/getSetUrlQueryBrowserApi'

const { dispatch } = store

export const CLICK_ON_ALL_MODULES: ActionEventType = event => {
  dispatch(actionSync.SET_INPUT_TO_STORE({ storeFormProp: 'modulesSearch', value: '' }))

  dispatch(actionAsync.GET_MODULES.REQUEST({ isLoaderOverlay: true }))
  ;['modulesSearch'].forEach((searchParamsName: string) => {
    const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
      searchParamsName,
      searchParamsValue: '',
    }
    getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams)
  })

  dispatch(
    actionSync.SET_PAGE_CURSOR({
      paginationName: PaginationNameEnumType['pageModules'],
      first: 0,
    })
  )
}
