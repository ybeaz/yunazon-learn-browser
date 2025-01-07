import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { PaginationNameEnumType } from 'yourails_common'

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

  dispatch(
    actionAsync.READ_MODULES_CONNECTION.REQUEST({
      isLoaderOverlay: true,
      isWithinModuleIDs: false,
    })
  )
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

  dispatch(actionAsync.READ_TAGS_CONNECTION.REQUEST())
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

  dispatch(actionAsync.GET_DOCUMENTS.REQUEST())

  dispatch(
    actionSync.SET_PAGE_CURSOR({
      paginationName: PaginationNameEnumType['pageTags'],
      first: 1,
    })
  )
  dispatch(actionAsync.READ_TAGS_CONNECTION.REQUEST())
}

export const CLICK_ON_SEARCH_BUTTON: ActionEventType = (event, data) => {
  const {
    componentsState: { screenActive },
    forms: { modulesSearch, tagsSearch, documentsSearch },
  } = getState() as RootStoreType

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
    getSetDocuments(documentsSearch)
  } else if (screenActive === 'TagsCloud') {
    getSetTags(tagsSearch)
  }

  dispatch(actionSync.TOGGLE_IS_MOBILE_SEARCH_INPUT({ isMobileSearchInput: false }))
}
