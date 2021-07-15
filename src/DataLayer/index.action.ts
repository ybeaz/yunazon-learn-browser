import { createSyncActions, ICreateSyncAction } from './createActionsSync'
import { createAsyncAction, ICreateAsyncAction } from './createActionsAsync'

// Asynchroneous actions for saga
const ACTION_ASYNC = [
  'SAVE_ANALYTICS',
  'SEND_EMAIL_DOCUMENT',
  'FIND_DOCUMENT',
  'ADD_DOCUMENT',
  'GET_CONTENT_DATA',
  'GET_GLOBAL_VARS',
]

// Synchroneours redux actions
const ACTIONS_SYNC = [
  'ONCHANGE_EMAIL_AUTH',
  'ONCHANGE_PASSWORD_AUTH',
  'SET_MODAL_FRAMES',
  'GET_INITIAL_QUERY_SETTING',
  'GET_COURSE_QUERY_PR_QN',
  'TOGGLE_MEDIA_LOADED',
  'TOGGLE_START_COURSE',
  'ONCHANGE_SEARCH_INPUT',
  'CHANGE_NUM_QUESTIONS_IN_SLIDE',
  'SELECT_LANGUAGE',
  'ONCHANGE_EMAIL_CC',
  'ONCHANGE_EMAIL_TO',
  'TOGGLE_IS_DOCUMENT_ADDED',
  'TOGGLE_LOADER_OVERLAY',
  'SET_QUESTION_SLIDE',
  'PLUS_QUESTION_SLIDE',
  'ONCHANGE_FIRST_NAME_MODAL',
  'ONCHANGE_MIDDLE_NAME_MODAL',
  'ONCHANGE_LAST_NAME_MODAL',
  'GET_ANSWERS_DEFAULT',
  'SELECT_COURSE_MODULE_CONTENTID',
  'SELECT_COURSE_MODULE',
  'CLICK_CHECK',
  'TOGGLE_SIDE_NAVIGATION',
]

export const actionSync: ICreateSyncAction = createSyncActions(ACTIONS_SYNC)
export const actionAsync: ICreateAsyncAction = createAsyncAction(ACTION_ASYNC)

// export const TEST_ACTION: Function = (data: any = true): IAction => ({
//   type: 'TEST_ACTION',
//   data,
// })
