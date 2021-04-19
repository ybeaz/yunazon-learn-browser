const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

/**
 * @description NOT USED. LEGACY. Function to return object with three props suffixes: _REQUEST, _SUCCESS, _FAILURE
 * @param base
 * @returns object of the kind {REQUEST: "RETRIVE_DOCUMENT_DATA_REQUEST", SUCCESS: "RETRIVE_DOCUMENT_DATA_SUCCESS", FAILURE: "RETRIVE_DOCUMENT_DATA_FAILURE"}
 */
const createRequestTypesLegacy = base =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})

/**
 * @description Function to return functions in object accepted data
 *              with three props suffixes: _REQUEST, _SUCCESS, _FAILURE
 * @param base => data => return {}
 * @example dispatch(action.GET_CONTENT_DATA.SUCCESS(myObject))
 * @example2 action.GET_CONTENT_DATA.SUCCESS(myObject).type - this returns type string 'GET_CONTENT_DATA_SUCCESS'
 * @returns object of the kind {REQUEST: "RETRIVE_DOCUMENT_DATA_REQUEST", SUCCESS: "RETRIVE_DOCUMENT_DATA_SUCCESS", FAILURE: "RETRIVE_DOCUMENT_DATA_FAILURE"}
 */
const createRequestTypes = base =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = (data: any = undefined) => {
      return data
        ? { type: `${base}_${type}`, data }
        : { type: `${base}_${type}` }
    }
    return acc
  }, {})

// Asynchroneous actions for saga
export const RETRIEVE_DOCUMENT_DATA: any = createRequestTypes(
  'RETRIEVE_DOCUMENT_DATA'
)
export const GET_CONTENT_DATA: any = createRequestTypes('GET_CONTENT_DATA')
export const GET_GLOBAL_VARS: any = createRequestTypes('GET_GLOBAL_VARS')

// Synchroneours redux actions
export const SET_QUESTION_SLIDE: Function = (data: number): any => ({
  type: 'SET_QUESTION_SLIDE',
  data,
})

export const PLUS_QUESTION_SLIDE: Function = (data: number): any => ({
  type: 'PLUS_QUESTION_SLIDE',
  data,
})

export const ONCHANGE_EMAIL_MODAL: Function = (data: string | number): any => ({
  type: 'ONCHANGE_EMAIL_MODAL',
  data,
})

export const ONCHANGE_NAME_MODAL: Function = (data: string | number): any => ({
  type: 'ONCHANGE_NAME_MODAL',
  data,
})

export const TOGGLE_MODAL_GET_SCORES: Function = (data: boolean): any => ({
  type: 'TOGGLE_MODAL_GET_SCORES',
  data,
})

export const GET_ANSWERS_DEFAULT: Function = (): any => ({
  type: 'GET_ANSWERS_DEFAULT',
})

export const SELECT_COURSE_MODULE_CONTENTID: Function = (
  data: any = true
): any => ({
  type: 'SELECT_COURSE_MODULE_CONTENTID',
  data,
})

export const SELECT_COURSE_MODULE: Function = (data: any = true): any => ({
  type: 'SELECT_COURSE_MODULE',
  data,
})

export const CLICK_CHECK: Function = (data: any = true): any => ({
  type: 'CLICK_CHECK',
  data,
})

export const TOGGLE_SIDE_NAVIGATION: Function = (): any => ({
  type: 'TOGGLE_SIDE_NAVIGATION',
})

export const TEST_ACTION: Function = (data: any = true): any => ({
  type: 'TEST_ACTION',
  data,
})
