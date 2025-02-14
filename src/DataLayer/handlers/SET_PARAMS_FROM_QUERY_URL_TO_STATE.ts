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
}): { queryNamesArray: string[]; reducerArray: { reducerFunc: any; data: any }[] } => {
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
      {
        reducerFunc: actionSync.SET_COMPONENTS_STATE,
        data: { componentsStateProp: 'tagsSearchApplied', value: queryUrl[queryName] },
      },
    ],
    tagsPick: [
      {
        reducerFunc: actionSync.SET_COMPONENTS_STATE,
        data: {
          componentsStateProp: 'tagsPick',
          value: queryName && queryUrl[queryName] ? queryUrl[queryName].split(',') : [],
        },
      },
    ],
    sendCc: [
      {
        reducerFunc: actionSync.SET_URLPARAMSQUERY_TO_STORE,
        data: {
          propName: queryName,
          value: queryUrl[queryName],
        },
      },
    ],
    sendBcc: [
      {
        reducerFunc: actionSync.SET_URLPARAMSQUERY_TO_STORE,
        data: {
          propName: queryName,
          value: queryUrl[queryName],
        },
      },
    ],
  }

  return {
    queryNamesArray: Object.keys(QUERY_URL_TO_REDUCER_DATA_MAP),
    reducerArray:
      QUERY_URL_TO_REDUCER_DATA_MAP[queryName] !== undefined && queryUrl[queryName] !== undefined
        ? QUERY_URL_TO_REDUCER_DATA_MAP[queryName]
        : [],
  }
}

export const SET_PARAMS_FROM_QUERY_URL_TO_STATE: ActionEventType = (event, dataIn) => {
  let queryUrl = getParsedUrlQueryBrowserApi()

  if (JSON.stringify(queryUrl) === '{}')
    queryUrl = {
      pageModules: 0,
      pageTags: 0,
      pageDocuments: 0,
      inputCourseCreate: '',
      modulesSearch: '',
      tagsSearch: '',
      tagsPick: '',
      sendCc: '',
      sendBcc: '',
    }

  console.info('SET_PARAMS_FROM_QUERY_URL_TO_STATE [130]', { queryUrl })

  const queryNamesArray = getQueryUrlReducerData({ queryUrl, queryName: '' }).queryNamesArray
  queryNamesArray.forEach((queryName: string) => {
    const reducerArray = getQueryUrlReducerData({ queryUrl, queryName }).reducerArray
    reducerArray.length && reducerArray.map(({ reducerFunc, data }) => dispatch(reducerFunc(data)))
  })

  const {
    componentsState: { tagsPick },
  } = getState()
  console.info('SET_PARAMS_FROM_QUERY_URL_TO_STATE [139]', { tagsPick })
}
