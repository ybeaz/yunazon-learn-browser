import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'
import { getParsedUrlQueryBrowserApi } from 'yourails_common'
import { PaginationNameEnumType } from 'yourails_common'

const { dispatch, getState } = store

const getQueryUrlReducerData = ({
  queryUrl,
  queryName,
}: {
  queryUrl: string
  queryName: string | PaginationNameEnumType
}): { reducerFunc: any; data: any }[] => {
  const QUERY_URL_TO_REDUCER_DATA_MAP = {
    pageModules: [
      {
        reducerFunc: actionSync.SET_PAGE_CURSOR,
        data: {
          paginationName: queryName,
          first: queryUrl[queryName],
          direction: 'set',
        },
      },
    ],
    pageTags: [
      {
        reducerFunc: actionSync.SET_PAGE_CURSOR,
        data: {
          paginationName: queryName,
          first: queryUrl[queryName],
          direction: 'set',
        },
      },
    ],
    pageDocuments: [
      {
        reducerFunc: actionSync.SET_PAGE_CURSOR,
        data: {
          paginationName: queryName,
          first: queryUrl[queryName],
          direction: 'set',
        },
      },
    ],
    inputCourseCreate: [
      {
        reducerFunc: actionSync.SET_INPUT_TO_STORE,
        data: {
          storeFormProp: queryName,
          value: queryUrl[queryName],
        },
      },
    ],
    modulesSearch: [
      {
        reducerFunc: actionSync.SET_INPUT_TO_STORE,
        data: { storeFormProp: queryName, value: queryUrl[queryName] },
      },
      {
        reducerFunc: actionSync.SET_COMPONENTS_STATE,
        data: { componentsStateProp: 'modulesSearchApplied', value: queryUrl[queryName] },
      },
    ],
    tagsSearch: [
      {
        reducerFunc: actionSync.SET_INPUT_TO_STORE,
        data: { storeFormProp: queryName, value: queryUrl[queryName] },
      },
    ],
    tagsPick: [
      {
        reducerFunc: actionSync.SET_COMPONENTS_STATE,
        data: { componentsStateProp: 'tagsPick', value: queryUrl[queryName].split(',') },
      },
    ],
    emailCC: [{ reducerFunc: null, data: {} }],
    code: [{ reducerFunc: null, data: {} }],
  }

  return QUERY_URL_TO_REDUCER_DATA_MAP[queryName] ? QUERY_URL_TO_REDUCER_DATA_MAP[queryName] : []
}

export const SET_PARAMS_FROM_QUERY_URL_TO_STATE: ActionEventType = (event, dataIn) => {
  const queryUrl = getParsedUrlQueryBrowserApi()
  Object.keys(queryUrl).forEach((queryName: string) => {
    const reducerArray = getQueryUrlReducerData({ queryUrl, queryName })
    reducerArray.length && reducerArray.map(({ reducerFunc, data }) => dispatch(reducerFunc(data)))
  })
}
