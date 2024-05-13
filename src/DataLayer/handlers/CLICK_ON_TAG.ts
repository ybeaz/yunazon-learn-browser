import { store } from '../store'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionAsync, actionSync } from '../../DataLayer/index.action'
import { PaginationNameEnumType } from '../../Interfaces/RootStoreType'
import { GO_LINK_PATH } from './GO_LINK_PATH'
import {
  getSetUrlQueryBrowserApi,
  GetSetUrlQueryBrowserApiParamsType,
} from '../../Shared/getSetUrlQueryBrowserApi'

const { dispatch, getState } = store

export const CLICK_ON_TAG: ActionEventType = (event, { tag, navigate }: any) => {
  const { tagsCloud } = getState()

  const tagValue = tag.value.split(':')[0]
  const tagObj = tagsCloud.find((tag: any) => tag.value === tagValue)

  dispatch(
    actionAsync.GET_MODULES.REQUEST({
      operators: { moduleID: 'and' },
      moduleIDs: tagObj.moduleIDs,
    })
  )

  GO_LINK_PATH({}, { navigate, pathname: `/m`, isOrigin: false })

  const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
    searchParamsName: 'tagsPick',
    searchParamsValue: tagValue,
  }

  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams)

  dispatch(
    actionSync.SET_PAGE_CURSOR({
      paginationName: PaginationNameEnumType['pageModules'],
      first: 0,
    })
  )
}
