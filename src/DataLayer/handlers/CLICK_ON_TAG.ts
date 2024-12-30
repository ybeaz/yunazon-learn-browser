import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync, actionSync } from '../../DataLayer/index.action'
import { PaginationNameEnumType } from 'yourails_common'
import { GO_LINK_PATH } from './GO_LINK_PATH'
import { getSetUrlQueryBrowserApi, GetSetUrlQueryBrowserApiParamsType } from 'yourails_common'

const { dispatch } = store

export const CLICK_ON_TAG: ActionEventType = (
  event,
  { tagCloud }: { tagCloud: { value: string } }
) => {
  const {
    componentsState: { tagsPick },
  } = store.getState()

  const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
    searchParamsName: 'tagsPick',
    searchParamsValue: tagCloud.value,
  }

  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams, {
    printRes: false,
    parentFunction: 'CLICK_ON_TAG',
  })

  let tagsPickValueNext = []
  if (tagCloud?.value) tagsPickValueNext = [...tagsPick, tagCloud.value]

  dispatch(
    actionSync.SET_COMPONENTS_STATE({
      componentsStateProp: 'tagsPick',
      value: tagsPickValueNext,
    })
  )

  dispatch(
    actionAsync.READ_MODULES_CONNECTION.REQUEST({
      isLoaderOverlay: true,
    })
  )

  dispatch(
    actionSync.SET_PAGE_CURSOR({
      paginationName: PaginationNameEnumType['pageModules'],
      first: 1,
    })
  )
}
