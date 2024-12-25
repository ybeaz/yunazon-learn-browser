import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { RootStoreType } from '../../Interfaces/RootStoreType'
import { PaginationNameEnumType } from 'yourails_common'

const { dispatch, getState } = store

export const CLICK_ON_SEARCH_BUTTON: ActionEventType = (event, data) => {
  const {
    componentsState: { screenActive },
    modules,
    forms: { modulesSearch },
  } = getState() as RootStoreType

  if (
    screenActive === 'AcademyMatrix' ||
    screenActive === 'ModulesPresent' ||
    screenActive === 'MyModules'
  ) {
    if (!data || data?.storeFormProp === 'modulesSearch') {
      dispatch(
        actionSync.SET_PAGE_CURSOR({
          paginationName: PaginationNameEnumType['pageModules'],
          first: 0,
        })
      )

      dispatch(
        actionAsync.READ_MODULES_CONNECTION.REQUEST({
          isLoaderOverlay: true,
          isWithinModuleIDs: false,
        })
      )
      dispatch(
        actionSync.SET_COMPONENTS_STATE({
          componentsStateProp: 'modulesSearchApplied',
          value: modulesSearch,
        })
      )
    } else if (data?.storeFormProp === 'tagsSearch') {
      dispatch(
        actionSync.SET_PAGE_CURSOR({ paginationName: PaginationNameEnumType['pageTags'], first: 0 })
      )
      dispatch(actionAsync.READ_TAGS_CONNECTION.REQUEST())
    }
  } else if (screenActive === 'MyDocuments') {
    dispatch(
      actionSync.SET_PAGE_CURSOR({
        paginationName: PaginationNameEnumType['pageDocuments'],
        first: 0,
      })
    )
    dispatch(actionAsync.GET_DOCUMENTS.REQUEST())

    dispatch(
      actionSync.SET_PAGE_CURSOR({
        paginationName: PaginationNameEnumType['pageTags'],
        first: 0,
      })
    )
    dispatch(actionAsync.READ_TAGS_CONNECTION.REQUEST())
  } else if (screenActive === 'TagsCloud') {
    dispatch(
      actionSync.SET_PAGE_CURSOR({ paginationName: PaginationNameEnumType['pageTags'], first: 0 })
    )
    dispatch(actionAsync.READ_TAGS_CONNECTION.REQUEST())
  }

  dispatch(actionSync.TOGGLE_IS_MOBILE_SEARCH_INPUT({ isMobileSearchInput: false }))
}
