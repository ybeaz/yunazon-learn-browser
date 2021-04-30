const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

/**
 * @description NOT USED. LEGACY. Function to return object with three props suffixes: _REQUEST, _SUCCESS, _FAILURE
 * @param base
 * @returns object of the kind {REQUEST: "ADD_DOCUMENT_REQUEST", SUCCESS: "ADD_DOCUMENT_SUCCESS", FAILURE: "ADD_DOCUMENT_FAILURE"}
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
 * @example  await dispatch(action.GET_CONTENT_DATA.REQUEST())
 * @example2 dispatch(action.GET_CONTENT_DATA.SUCCESS(myObject))
 * @example3 action.GET_CONTENT_DATA.SUCCESS(myObject).type - this returns type string 'GET_CONTENT_DATA_SUCCESS'
 * @returns object of the kind {REQUEST: "ADD_DOCUMENT_REQUEST", SUCCESS: "ADD_DOCUMENT_SUCCESS", FAILURE: "ADD_DOCUMENT_FAILURE"}
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
export const SEND_EMAIL_DOCUMENT: any = createRequestTypes(
  'SEND_EMAIL_DOCUMENT'
)
export const FIND_DOCUMENT: any = createRequestTypes('FIND_DOCUMENT')
export const ADD_DOCUMENT: any = createRequestTypes('ADD_DOCUMENT')
export const GET_CONTENT_DATA: any = createRequestTypes('GET_CONTENT_DATA')
export const GET_GLOBAL_VARS: any = createRequestTypes('GET_GLOBAL_VARS')

// Synchroneours redux actions
export const CHANGE_NUM_QUESTIONS_IN_SLIDE: Function = (data: number): any => ({
  type: 'CHANGE_NUM_QUESTIONS_IN_SLIDE',
  data,
})

export const SELECT_LANGUAGE: Function = (data: number): any => ({
  type: 'SELECT_LANGUAGE',
  data,
})

export const ONCHANGE_EMAIL_CC: Function = (data: number): any => ({
  type: 'ONCHANGE_EMAIL_CC',
  data,
})

export const ONCHANGE_EMAIL_TO: Function = (data: number): any => ({
  type: 'ONCHANGE_EMAIL_TO',
  data,
})

export const TOGGLE_IS_DOCUMENT_ADDED: Function = (data: number): any => ({
  type: 'TOGGLE_IS_DOCUMENT_ADDED',
  data,
})

export const TOGGLE_LOADER_OVERLAY: Function = (data: number): any => ({
  type: 'TOGGLE_LOADER_OVERLAY',
  data,
})

export const SET_QUESTION_SLIDE: Function = (data: number): any => ({
  type: 'SET_QUESTION_SLIDE',
  data,
})

export const PLUS_QUESTION_SLIDE: Function = (data: number): any => ({
  type: 'PLUS_QUESTION_SLIDE',
  data,
})

export const ONCHANGE_FIRST_NAME_MODAL: Function = (
  data: string | number
): any => ({
  type: 'ONCHANGE_FIRST_NAME_MODAL',
  data,
})

export const ONCHANGE_MIDDLE_NAME_MODAL: Function = (
  data: string | number
): any => ({
  type: 'ONCHANGE_MIDDLE_NAME_MODAL',
  data,
})

export const ONCHANGE_LAST_NAME_MODAL: Function = (
  data: string | number
): any => ({
  type: 'ONCHANGE_LAST_NAME_MODAL',
  data,
})

export const TOGGLE_MODAL_FRAME: Function = (data: boolean): any => ({
  type: 'TOGGLE_MODAL_FRAME',
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
