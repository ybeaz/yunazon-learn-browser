import { IRootStore } from '../Interfaces/IRootStore'

import { TEMPLATE } from './reducers/TEMPLATE'
import { ADD_DOCUMENT_SUCCESS } from './reducers/ADD_DOCUMENT_SUCCESS'
import { CHANGE_NUM_QUESTIONS_IN_SLIDE } from './reducers/CHANGE_NUM_QUESTIONS_IN_SLIDE'
import { CLICK_CHECK } from './reducers/CLICK_CHECK'
import { GET_ANSWERS_DEFAULT } from './reducers/GET_ANSWERS_DEFAULT'
import { GET_CONTENT_DATA_SUCCESS } from './reducers/GET_CONTENT_DATA_SUCCESS'
import { GET_COURSE_QUERY_PR_QN } from './reducers/GET_COURSE_QUERY_PR_QN'
import { GET_GLOBAL_VARS_SUCCESS } from './reducers/GET_GLOBAL_VARS_SUCCESS'
import { GET_INITIAL_QUERY_SETTING } from './reducers/GET_INITIAL_QUERY_SETTING'
import { ONCHANGE_EMAIL_AUTH } from './reducers/ONCHANGE_EMAIL_AUTH'
import { ONCHANGE_EMAIL_CC } from './reducers/ONCHANGE_EMAIL_CC'
import { ONCHANGE_EMAIL_TO } from './reducers/ONCHANGE_EMAIL_TO'
import { ONCHANGE_FIRST_NAME_MODAL } from './reducers/ONCHANGE_FIRST_NAME_MODAL'
import { ONCHANGE_LAST_NAME_MODAL } from './reducers/ONCHANGE_LAST_NAME_MODAL'
import { ONCHANGE_MIDDLE_NAME_MODAL } from './reducers/ONCHANGE_MIDDLE_NAME_MODAL'
import { ONCHANGE_PASSWORD_AUTH } from './reducers/ONCHANGE_PASSWORD_AUTH'
import { ONCHANGE_PASSWORD_AUTH_2 } from './reducers/ONCHANGE_PASSWORD_AUTH_2'
import { ONCHANGE_SEARCH_INPUT } from './reducers/ONCHANGE_SEARCH_INPUT'
import { ONCHANGE_USER_NAME_AUTH } from './reducers/ONCHANGE_USER_NAME_AUTH'
import { PLUS_QUESTION_SLIDE } from './reducers/PLUS_QUESTION_SLIDE'
import { rootStoreDefault } from './rootStoreDefault'
import { SAVE_ANALYTICS_SUCCESS } from './reducers/SAVE_ANALYTICS_SUCCESS'
import { SELECT_COURSE_MODULE } from './reducers/SELECT_COURSE_MODULE'
import { SELECT_COURSE_MODULE_CONTENTID } from './reducers/SELECT_COURSE_MODULE_CONTENTID'
import { SELECT_LANGUAGE } from './reducers/SELECT_LANGUAGE'
import { SET_MODAL_FRAMES } from './reducers/SET_MODAL_FRAMES'
import { SET_OAUTH_FB_SCRIPT_STATE } from './reducers/SET_OAUTH_FB_SCRIPT_STATE'
import { SET_OAUTH_GOOGLE_SCRIPT_STATE } from './reducers/SET_OAUTH_GOOGLE_SCRIPT_STATE'
import { SET_OAUTH_STAGE } from './reducers/SET_OAUTH_STAGE'
import { SET_OAUTH_VK_SCRIPT_STATE } from './reducers/SET_OAUTH_VK_SCRIPT_STATE'
import { SET_QUESTION_SLIDE } from './reducers/SET_QUESTION_SLIDE'
import { SET_THEME } from './reducers/SET_THEME'
import { SET_USER } from './reducers/SET_USER'
import { TOGGLE_IS_DOCUMENT_ADDED } from './reducers/TOGGLE_IS_DOCUMENT_ADDED'
import { TOGGLE_LOADER_OVERLAY } from './reducers/TOGGLE_LOADER_OVERLAY'
import { TOGGLE_MEDIA_LOADED } from './reducers/TOGGLE_MEDIA_LOADED'
import { TOGGLE_SIDE_NAVIGATION } from './reducers/TOGGLE_SIDE_NAVIGATION'
import { TOGGLE_START_COURSE } from './reducers/TOGGLE_START_COURSE'

export const rootReducer: Function = (
  store: IRootStore = rootStoreDefault,
  action: any = { type: 'DEFAULT' }
): any => {
  const { type, data } = action

  const output = {
    ADD_DOCUMENT_SUCCESS,
    CHANGE_NUM_QUESTIONS_IN_SLIDE,
    CLICK_CHECK,
    GET_ANSWERS_DEFAULT,
    GET_CONTENT_DATA_SUCCESS,
    GET_COURSE_QUERY_PR_QN,
    GET_GLOBAL_VARS_SUCCESS,
    GET_INITIAL_QUERY_SETTING,
    ONCHANGE_EMAIL_AUTH,
    ONCHANGE_EMAIL_CC,
    ONCHANGE_EMAIL_TO,
    ONCHANGE_FIRST_NAME_MODAL,
    ONCHANGE_LAST_NAME_MODAL,
    ONCHANGE_MIDDLE_NAME_MODAL,
    ONCHANGE_PASSWORD_AUTH_2,
    ONCHANGE_PASSWORD_AUTH,
    ONCHANGE_SEARCH_INPUT,
    ONCHANGE_USER_NAME_AUTH,
    PLUS_QUESTION_SLIDE,
    SAVE_ANALYTICS_SUCCESS,
    SELECT_COURSE_MODULE_CONTENTID,
    SELECT_COURSE_MODULE,
    SELECT_LANGUAGE,
    SET_MODAL_FRAMES,
    SET_OAUTH_FB_SCRIPT_STATE,
    SET_OAUTH_GOOGLE_SCRIPT_STATE,
    SET_OAUTH_STAGE,
    SET_OAUTH_VK_SCRIPT_STATE,
    SET_QUESTION_SLIDE,
    SET_THEME,
    SET_USER,
    TOGGLE_IS_DOCUMENT_ADDED,
    TOGGLE_LOADER_OVERLAY,
    TOGGLE_MEDIA_LOADED,
    TOGGLE_SIDE_NAVIGATION,
    TOGGLE_START_COURSE,
  }

  return output[type] ? output[type](store, data) : store
}
