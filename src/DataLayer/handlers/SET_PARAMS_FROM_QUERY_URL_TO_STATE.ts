import { store } from '../store'
import { ActionEventType } from 'yourails_common'
import { actionSync } from '../../DataLayer/index.action'
import { PAGINATION_OFFSET } from 'yourails_common'
import { PaginationNameEnumType } from 'yourails_common'

const { dispatch, getState } = store

const getQueryUrlReducerData = ({
  queryUrl,
  queryName,
}: {
  queryUrl: string
  queryName: string | PaginationNameEnumType
}): { reducerFunc: any; data: any } => {
  const QUERY_URL_TO_REDUCER_DATA_MAP = {
    // pageModules: {
    //   reducerFunc: actionSync.SET_PAGE_CURSOR,
    //   data: {
    //     paginationName: queryName,
    //     first: queryUrl[queryName],
    //   },
    // },
    // pageTags: {
    //   reducerFunc: actionSync.SET_PAGE_CURSOR,
    //   data: {
    //     paginationName: queryName,
    //     first: queryUrl[queryName],
    //   },
    // },
    // pageDocuments: {
    //   reducerFunc: actionSync.SET_PAGE_CURSOR,
    //   data: {
    //     paginationName: queryName,
    //     first: queryUrl[queryName],
    //   },
    // },
    inputCourseCreate: {
      reducerFunc: actionSync.SET_INPUT_TO_STORE,
      data: {
        storeFormProp: queryName,
        value: queryUrl[queryName],
      },
    },
    modulesSearch: {
      reducerFunc: actionSync.SET_INPUT_TO_STORE,
      data: { storeFormProp: queryName, value: queryUrl[queryName] },
    },
    tagsSearch: {
      reducerFunc: actionSync.SET_INPUT_TO_STORE,
      data: { storeFormProp: queryName, value: queryUrl[queryName] },
    },
    tagsPick: { reducerFunc: null, data: {} },
    emailCC: { reducerFunc: null, data: {} },
    code: { reducerFunc: null, data: {} },
  }

  return QUERY_URL_TO_REDUCER_DATA_MAP[queryName]
    ? QUERY_URL_TO_REDUCER_DATA_MAP[queryName]
    : { reducerFunc: null, data: {} }
}

export const SET_PARAMS_FROM_QUERY_URL_TO_STATE: ActionEventType = (event, dataIn) => {
  const { queryUrl } = getState()

  Object.keys(queryUrl).forEach((queryName: string) => {
    const { data, reducerFunc } = getQueryUrlReducerData({ queryUrl, queryName })
    console.info('SET_PARAMS_FROM_QUERY_URL_TO_STATE [68]', {
      data,
      reducerFunc,
      queryName,
      queryUrl,
    })

    // const data = {
    //   storeFormProp: queryName,
    //   value: queryUrl[queryName],
    // }
    reducerFunc && dispatch(reducerFunc(data))
  })
}
