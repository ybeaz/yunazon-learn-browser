import { IRootStore } from '../Interfaces/IRootStore'

import { TEMPLATE } from './reducers/TEMPLATE'
import { SET_OAUTH_STATE } from './reducers/SET_OAUTH_STATE'
import { SET_OAUTH_FB_SCRIPT_STATE } from './reducers/SET_OAUTH_FB_SCRIPT_STATE'
import { SET_OAUTH_VK_SCRIPT_STATE } from './reducers/SET_OAUTH_VK_SCRIPT_STATE'
import { SET_OAUTH_GOOGLE_SCRIPT_STATE } from './reducers/SET_OAUTH_GOOGLE_SCRIPT_STATE'
import { SET_USER } from './reducers/SET_USER'
import { ONCHANGE_USER_NAME_AUTH } from './reducers/ONCHANGE_USER_NAME_AUTH'
import { ONCHANGE_PASSWORD_AUTH_2 } from './reducers/ONCHANGE_PASSWORD_AUTH_2'
import { ONCHANGE_EMAIL_AUTH } from './reducers/ONCHANGE_EMAIL_AUTH'
import { ONCHANGE_PASSWORD_AUTH } from './reducers/ONCHANGE_PASSWORD_AUTH'
import { SET_MODAL_FRAMES } from './reducers/SET_MODAL_FRAMES'
import { GET_INITIAL_QUERY_SETTING } from './reducers/GET_INITIAL_QUERY_SETTING'
import { GET_COURSE_QUERY_PR_QN } from './reducers/GET_COURSE_QUERY_PR_QN'
import { SAVE_ANALYTICS_SUCCESS } from './reducers/SAVE_ANALYTICS_SUCCESS'
import { TOGGLE_MEDIA_LOADED } from './reducers/TOGGLE_MEDIA_LOADED'
import { TOGGLE_START_COURSE } from './reducers/TOGGLE_START_COURSE'
import { ONCHANGE_SEARCH_INPUT } from './reducers/ONCHANGE_SEARCH_INPUT'
import { CHANGE_NUM_QUESTIONS_IN_SLIDE } from './reducers/CHANGE_NUM_QUESTIONS_IN_SLIDE'
import { SELECT_LANGUAGE } from './reducers/SELECT_LANGUAGE'
import { TOGGLE_LOADER_OVERLAY } from './reducers/TOGGLE_LOADER_OVERLAY'
import { TOGGLE_IS_DOCUMENT_ADDED } from './reducers/TOGGLE_IS_DOCUMENT_ADDED'
import { ADD_DOCUMENT_SUCCESS } from './reducers/ADD_DOCUMENT_SUCCESS'
import { SET_QUESTION_SLIDE } from './reducers/SET_QUESTION_SLIDE'
import { PLUS_QUESTION_SLIDE } from './reducers/PLUS_QUESTION_SLIDE'
import { ONCHANGE_EMAIL_CC } from './reducers/ONCHANGE_EMAIL_CC'
import { ONCHANGE_EMAIL_TO } from './reducers/ONCHANGE_EMAIL_TO'
import { ONCHANGE_FIRST_NAME_MODAL } from './reducers/ONCHANGE_FIRST_NAME_MODAL'
import { ONCHANGE_MIDDLE_NAME_MODAL } from './reducers/ONCHANGE_MIDDLE_NAME_MODAL'
import { ONCHANGE_LAST_NAME_MODAL } from './reducers/ONCHANGE_LAST_NAME_MODAL'
import { GET_ANSWERS_DEFAULT } from './reducers/GET_ANSWERS_DEFAULT'
import { SELECT_COURSE_MODULE_CONTENTID } from './reducers/SELECT_COURSE_MODULE_CONTENTID'
import { SELECT_COURSE_MODULE } from './reducers/SELECT_COURSE_MODULE'
import { CLICK_CHECK } from './reducers/CLICK_CHECK'
import { GET_CONTENT_DATA_SUCCESS } from './reducers/GET_CONTENT_DATA_SUCCESS'
import { TOGGLE_SIDE_NAVIGATION } from './reducers/TOGGLE_SIDE_NAVIGATION'
import { GET_GLOBAL_VARS_SUCCESS } from './reducers/GET_GLOBAL_VARS_SUCCESS'
import { rootStoreDefault } from './rootStoreDefault'

export const rootReducer: Function = (
  store: IRootStore = rootStoreDefault,
  action: any
): any => {
  const { type, data } = action

  const output = {
    SET_OAUTH_STATE,
    SET_OAUTH_FB_SCRIPT_STATE,
    SET_OAUTH_VK_SCRIPT_STATE,
    SET_OAUTH_GOOGLE_SCRIPT_STATE,
    SET_USER,
    ONCHANGE_USER_NAME_AUTH,
    ONCHANGE_EMAIL_AUTH,
    ONCHANGE_PASSWORD_AUTH,
    ONCHANGE_PASSWORD_AUTH_2,
    SET_MODAL_FRAMES,
    GET_INITIAL_QUERY_SETTING,
    GET_COURSE_QUERY_PR_QN,
    SAVE_ANALYTICS_SUCCESS,
    TOGGLE_MEDIA_LOADED,
    TOGGLE_START_COURSE,
    ONCHANGE_SEARCH_INPUT,
    CHANGE_NUM_QUESTIONS_IN_SLIDE,
    SELECT_LANGUAGE,
    TOGGLE_LOADER_OVERLAY,
    TOGGLE_IS_DOCUMENT_ADDED,
    ADD_DOCUMENT_SUCCESS,
    SET_QUESTION_SLIDE,
    PLUS_QUESTION_SLIDE,
    ONCHANGE_EMAIL_CC,
    ONCHANGE_EMAIL_TO,
    ONCHANGE_FIRST_NAME_MODAL,
    ONCHANGE_MIDDLE_NAME_MODAL,
    ONCHANGE_LAST_NAME_MODAL,
    GET_ANSWERS_DEFAULT,
    SELECT_COURSE_MODULE_CONTENTID,
    SELECT_COURSE_MODULE,
    CLICK_CHECK,
    GET_CONTENT_DATA_SUCCESS,
    TOGGLE_SIDE_NAVIGATION,
    GET_GLOBAL_VARS_SUCCESS,
  }

  return output[type] ? output[type](store, data) : store
}
