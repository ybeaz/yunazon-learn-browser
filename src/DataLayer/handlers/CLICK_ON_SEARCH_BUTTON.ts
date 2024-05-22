import { store } from '../store'
import { ModuleType } from '../../@types/'
import { ActionEventType } from '../../Interfaces/ActionEventType'
import { actionSync, actionAsync } from '../../DataLayer/index.action'
import { RootStoreType, PaginationNameEnumType } from '../../Interfaces/RootStoreType'

const { dispatch, getState } = store

export const CLICK_ON_SEARCH_BUTTON: ActionEventType = (event, data) => {
  const {
    componentsState: { screenActive, modulesSearchApplied, tagsSearchForModules },
    modules,
    forms: { modulesSearch },
  } = getState() as RootStoreType

  if (screenActive === 'AcademyMatrix') {
    if (!data || data?.storeFormProp === 'modulesSearch') {
      dispatch(
        actionSync.SET_PAGE_CURSOR({
          paginationName: PaginationNameEnumType['pageModules'],
          first: 0,
        })
      )

      dispatch(actionAsync.GET_MODULES.REQUEST({ isLoaderOverlay: true, isWithinModuleIDs: false }))
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
  } else if (screenActive === 'ModulesPresent' || screenActive === 'MyModules') {
    const moduleIDs = modules.map((module: ModuleType) => module.moduleID)
    dispatch(
      actionSync.SET_PAGE_CURSOR({
        paginationName: PaginationNameEnumType['pageModules'],
        first: 0,
      })
    )
    dispatch(actionAsync.GET_MODULES.REQUEST({ moduleIDs }))
    dispatch(
      actionSync.SET_COMPONENTS_STATE({
        componentsStateProp: 'modulesSearchApplied',
        value: modulesSearch,
      })
    )
  } else if (screenActive === 'MyDocuments') {
    dispatch(
      actionSync.SET_PAGE_CURSOR({
        paginationName: PaginationNameEnumType['pageDocuments'],
        first: 0,
      })
    )
    dispatch(actionAsync.GET_DOCUMENTS.REQUEST())
  } else if (screenActive === 'TagsCloud') {
    dispatch(
      actionSync.SET_PAGE_CURSOR({ paginationName: PaginationNameEnumType['pageTags'], first: 0 })
    )
    dispatch(actionAsync.READ_TAGS_CONNECTION.REQUEST())
  }

  dispatch(actionSync.TOGGLE_IS_MOBILE_SEARCH_INPUT({ isMobileSearchInput: false }))
}
