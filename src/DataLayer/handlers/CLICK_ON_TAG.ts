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

export const CLICK_ON_TAG: ActionEventType = (event, { tagCloud, navigate }: any) => {
  dispatch(
    actionAsync.GET_MODULES.REQUEST({
      moduleIDs: tagCloud.moduleIDs,
      isLoaderOverlay: true,
    })
  )

  dispatch(
    actionSync.SET_COMPONENTS_STATE({
      componentsStateProp: 'tagsSearchForModules',
      value: tagCloud.value,
    })
  )

  console.info('CLICK_ON_TAG [31]', { tagCloud, navigate })

  if (navigate) GO_LINK_PATH({}, { navigate, pathname: `/m`, isOrigin: false })

  dispatch(
    actionSync.SET_PAGE_CURSOR({
      paginationName: PaginationNameEnumType['pageModules'],
      first: 0,
    })
  )
}
