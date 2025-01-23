import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync, actionSync } from '../../DataLayer/index.action'
import { PaginationNameEnumType } from 'yourails_common'
import { CLICK_ON_SEARCH_BUTTON } from './CLICK_ON_SEARCH_BUTTON'
import { ONCHANGE_INPUT_SEARCH } from './ONCHANGE_INPUT_SEARCH'
import { getSetUrlQueryBrowserApi, GetSetUrlQueryBrowserApiParamsType } from 'yourails_common'

const { dispatch } = store

export const CLICK_ON_TAG: ActionEventType = (
  event,
  { tagCloud }: { tagCloud: { value: string } }
) => {
  const {
    componentsState: { tagsPick },
  } = store.getState()

  if (tagCloud?.value) {
    ONCHANGE_INPUT_SEARCH(
      {},
      {
        storeFormProp: 'modulesSearch',
        value: '',
      }
    )

    ONCHANGE_INPUT_SEARCH(
      {},
      {
        storeFormProp: 'tagsSearch',
        value: '',
      }
    )

    CLICK_ON_SEARCH_BUTTON({})
  }

  const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
    searchParamsName: 'tagsPick',
    searchParamsValue: tagCloud.value,
  }

  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams, {
    printRes: false,
    parentFunction: 'CLICK_ON_TAG',
  })

  let tagsPickValueNext = []
  if (tagCloud?.value) tagsPickValueNext = [tagCloud.value]

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
