import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionAsync, actionSync } from '../../DataLayer/index.action'
import { PaginationNameEnumType } from '../../Interfaces/RootStoreType'
import { getSetUrlQueryBrowserApi, GetSetUrlQueryBrowserApiParamsType } from 'yourails_common'

const { dispatch } = store

export const CLICK_ON_ALL_TAGS: ActionEventType = event => {
  dispatch(actionSync.SET_INPUT_TO_STORE({ storeFormProp: 'tagsSearch', value: '' }))

  dispatch(actionAsync.READ_TAGS_CONNECTION.REQUEST({ isLoaderOverlay: true }))
  ;['tagsPick', 'tagsSearch'].forEach((searchParamsName: string) => {
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
