import { createRequestTypes, ICreateRequestTypes } from './createRequestTypes'

interface IAction {
  type: string
  data?: any
}

// Asynchroneous actions for saga
export const SAVE_ANALYTICS: ICreateRequestTypes = createRequestTypes(
  'SAVE_ANALYTICS'
)

export const SEND_EMAIL_DOCUMENT: ICreateRequestTypes = createRequestTypes(
  'SEND_EMAIL_DOCUMENT'
)
export const FIND_DOCUMENT: ICreateRequestTypes = createRequestTypes(
  'FIND_DOCUMENT'
)
export const ADD_DOCUMENT: ICreateRequestTypes = createRequestTypes(
  'ADD_DOCUMENT'
)
export const GET_CONTENT_DATA: ICreateRequestTypes = createRequestTypes(
  'GET_CONTENT_DATA'
)
export const GET_GLOBAL_VARS: ICreateRequestTypes = createRequestTypes(
  'GET_GLOBAL_VARS'
)

// Synchroneours redux actions
export const TOGGLE_MEDIA_LOADED: Function = (data: number): IAction => ({
  type: 'TOGGLE_MEDIA_LOADED',
  data,
})

export const TOGGLE_START_COURSE: Function = (data: number): IAction => ({
  type: 'TOGGLE_START_COURSE',
  data,
})

export const ONCHANGE_SEARCH_INPUT: Function = (data: number): IAction => ({
  type: 'ONCHANGE_SEARCH_INPUT',
  data,
})

export const CHANGE_NUM_QUESTIONS_IN_SLIDE: Function = (
  data: number
): IAction => ({
  type: 'CHANGE_NUM_QUESTIONS_IN_SLIDE',
  data,
})

export const SELECT_LANGUAGE: Function = (data: number): IAction => ({
  type: 'SELECT_LANGUAGE',
  data,
})

export const ONCHANGE_EMAIL_CC: Function = (data: number): IAction => ({
  type: 'ONCHANGE_EMAIL_CC',
  data,
})

export const ONCHANGE_EMAIL_TO: Function = (data: number): IAction => ({
  type: 'ONCHANGE_EMAIL_TO',
  data,
})

export const TOGGLE_IS_DOCUMENT_ADDED: Function = (data: number): IAction => ({
  type: 'TOGGLE_IS_DOCUMENT_ADDED',
  data,
})

export const TOGGLE_LOADER_OVERLAY: Function = (data: number): IAction => ({
  type: 'TOGGLE_LOADER_OVERLAY',
  data,
})

export const SET_QUESTION_SLIDE: Function = (data: number): IAction => ({
  type: 'SET_QUESTION_SLIDE',
  data,
})

export const PLUS_QUESTION_SLIDE: Function = (data: number): IAction => ({
  type: 'PLUS_QUESTION_SLIDE',
  data,
})

export const ONCHANGE_FIRST_NAME_MODAL: Function = (
  data: string | number
): IAction => ({
  type: 'ONCHANGE_FIRST_NAME_MODAL',
  data,
})

export const ONCHANGE_MIDDLE_NAME_MODAL: Function = (
  data: string | number
): IAction => ({
  type: 'ONCHANGE_MIDDLE_NAME_MODAL',
  data,
})

export const ONCHANGE_LAST_NAME_MODAL: Function = (
  data: string | number
): IAction => ({
  type: 'ONCHANGE_LAST_NAME_MODAL',
  data,
})

export const TOGGLE_MODAL_FRAME: Function = (data: boolean): IAction => ({
  type: 'TOGGLE_MODAL_FRAME',
  data,
})

export const GET_ANSWERS_DEFAULT: Function = (): IAction => ({
  type: 'GET_ANSWERS_DEFAULT',
})

export const SELECT_COURSE_MODULE_CONTENTID: Function = (
  data: any = true
): IAction => ({
  type: 'SELECT_COURSE_MODULE_CONTENTID',
  data,
})

export const SELECT_COURSE_MODULE: Function = (data: any = true): IAction => ({
  type: 'SELECT_COURSE_MODULE',
  data,
})

export const CLICK_CHECK: Function = (data: any = true): IAction => ({
  type: 'CLICK_CHECK',
  data,
})

export const TOGGLE_SIDE_NAVIGATION: Function = (): IAction => ({
  type: 'TOGGLE_SIDE_NAVIGATION',
})

export const TEST_ACTION: Function = (data: any = true): IAction => ({
  type: 'TEST_ACTION',
  data,
})
