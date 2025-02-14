import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { PaginationNameEnumType } from 'yourails_common'
import { CLICK_ON_TAG } from './CLICK_ON_TAG'
import { getSetUrlQueryBrowserApi, GetSetUrlQueryBrowserApiParamsType } from 'yourails_common'

const { dispatch, getState } = store

const getSetModules = (searchValue: string) => {
  dispatch(
    actionSync.SET_PAGE_CURSOR({
      paginationName: PaginationNameEnumType['pageModules'],
      first: 1,
    })
  )

  dispatch(
    actionSync.SET_COMPONENTS_STATE({
      componentsStateProp: 'modulesSearchApplied',
      value: searchValue,
    })
  )

  const getSetUrlQueryBrowserApiParams: GetSetUrlQueryBrowserApiParamsType = {
    searchParamsName: 'modulesSearch',
    searchParamsValue: searchValue,
  }

  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams, {
    printRes: false,
    parentFunction: 'CLICK_ON_SEARCH_BUTTON',
  })
}

const getSetTags = (searchValue: string) => {
  dispatch(
    actionSync.SET_PAGE_CURSOR({ paginationName: PaginationNameEnumType['pageTags'], first: 1 })
  )

  dispatch(
    actionSync.SET_COMPONENTS_STATE({
      componentsStateProp: 'tagsSearchApplied',
      value: searchValue,
    })
  )

  const getSetUrlQueryBrowserApiParams = {
    searchParamsName: 'tagsSearch',
    searchParamsValue: searchValue,
  }

  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams, {
    printRes: false,
    parentFunction: 'CLICK_ON_SEARCH_BUTTON',
  })
}

const getSetDocuments = (searchValue: string) => {
  dispatch(
    actionSync.SET_PAGE_CURSOR({
      paginationName: PaginationNameEnumType['pageDocuments'],
      first: 1,
    })
  )

  dispatch(
    actionSync.SET_COMPONENTS_STATE({
      componentsStateProp: 'documentsSearchApplied',
      value: searchValue,
    })
  )

  const getSetUrlQueryBrowserApiParams = {
    searchParamsName: 'documentsSearch',
    searchParamsValue: searchValue,
  }

  getSetUrlQueryBrowserApi(getSetUrlQueryBrowserApiParams, {
    printRes: false,
    parentFunction: 'CLICK_ON_SEARCH_BUTTON',
  })
}

export const CLICK_ON_SEARCH_BUTTON: ActionEventType = (event, data) => {
  const {
    componentsState: { screenActive },
    forms: { modulesSearch, tagsSearch, documentsSearch },
  } = getState() as RootStoreType
  console.info('CLICK_ON_SEARCH_BUTTON [91]', {
    screenActive,
    documentsSearch,
    tagsSearch,
    modulesSearch,
  })

  if (
    screenActive === 'AcademyMatrix' ||
    screenActive === 'ModulesPresent' ||
    screenActive === 'MyModules'
  ) {
    if (!data || data?.storeFormProp === 'modulesSearch') {
      getSetModules(modulesSearch)

      getSetTags(modulesSearch)
    } else if (data?.storeFormProp === 'tagsSearch') {
      getSetTags(tagsSearch)
    }
  } else if (screenActive === 'MyDocuments') {
    console.info('CLICK_ON_SEARCH_BUTTON [105]', { documentsSearch, tagsSearch, modulesSearch })
    getSetDocuments(documentsSearch)
    getSetTags(documentsSearch)
  } else if (screenActive === 'TagsCloud') {
    getSetTags(tagsSearch)
  }

  dispatch(actionSync.TOGGLE_IS_MOBILE_SEARCH_INPUT({ isMobileSearchInput: false }))
}
