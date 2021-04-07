const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

const createRequestTypes = base =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})

// Asynchroneous actions for saga
export const GET_CONTENT_DATA: any = createRequestTypes('GET_CONTENT_DATA')
export const GET_GLOBAL_VARS: any = createRequestTypes('GET_GLOBAL_VARS')
export const GET_PRODUCT_CARD: any = createRequestTypes('GET_PRODUCT_CARD')

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
