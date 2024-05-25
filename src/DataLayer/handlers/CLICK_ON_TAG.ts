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

export const CLICK_ON_TAG: ActionEventType = (event, { tagCloud, navigate = null }: any) => {
  const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
    searchParamsName: 'tagsSearch',
    searchParamsValue: tagCloud.value,
  }
  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams)

  dispatch(
    actionSync.SET_COMPONENTS_STATE({
      componentsStateProp: 'tagsSearchForModules',
      value: tagCloud.value,
    })
  )

  dispatch(
    actionAsync.GET_MODULES.REQUEST({
      isLoaderOverlay: true,
    })
  )

  if (navigate) GO_LINK_PATH({}, { navigate, pathname: `/m`, isOrigin: false })

  dispatch(
    actionSync.SET_PAGE_CURSOR({
      paginationName: PaginationNameEnumType['pageModules'],
      first: 0,
    })
  )
}
