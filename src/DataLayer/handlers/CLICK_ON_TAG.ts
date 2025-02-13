import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionAsync, actionSync } from '../../DataLayer/index.action'
import { PaginationNameEnumType } from 'yourails_common'
import { timeout } from 'yourails_common'
import { CLICK_ON_SEARCH_BUTTON } from './CLICK_ON_SEARCH_BUTTON'
import { ONCHANGE_INPUT_SEARCH } from './ONCHANGE_INPUT_SEARCH'
import { getSetUrlQueryBrowserApi, GetSetUrlQueryBrowserApiParamsType } from 'yourails_common'
import { getWaitedForVarChange } from 'yourails_common'

const { dispatch } = store

export const CLICK_ON_TAG: ActionEventType = async (
  event,
  { tagCloud }: { tagCloud: { value: string } }
) => {
  if (tagCloud?.value) {
    dispatch(actionSync.SET_INPUT_TO_STORE({ storeFormProp: 'modulesSearch', value: '' }))
    dispatch(actionSync.SET_INPUT_TO_STORE({ storeFormProp: 'tagsSearch', value: '' }))

    dispatch(
      actionSync.SET_COMPONENTS_STATE({
        componentsStateProp: 'modulesSearchApplied',
        value: '',
      })
    )

    dispatch(
      actionSync.SET_COMPONENTS_STATE({
        componentsStateProp: 'tagsSearchApplied',
        value: '',
      })
    )
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
