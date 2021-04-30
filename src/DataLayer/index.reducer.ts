import { IRootStore } from '../Interfaces/IRootStore'

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
import { TOGGLE_MODAL_FRAME } from './reducers/TOGGLE_MODAL_FRAME'
import { GET_ANSWERS_DEFAULT } from './reducers/GET_ANSWERS_DEFAULT'
import { SELECT_COURSE_MODULE_CONTENTID } from './reducers/SELECT_COURSE_MODULE_CONTENTID'
import { SELECT_COURSE_MODULE } from './reducers/SELECT_COURSE_MODULE'
import { CLICK_CHECK } from './reducers/CLICK_CHECK'
import { GET_CONTENT_DATA_SUCCESS } from './reducers/GET_CONTENT_DATA_SUCCESS'
import { TOGGLE_SIDE_NAVIGATION } from './reducers/TOGGLE_SIDE_NAVIGATION'
import { GET_GLOBAL_VARS_SUCCESS } from './reducers/GET_GLOBAL_VARS_SUCCESS'
import { TEMPLATE } from './reducers/TEMPLATE'

const rootStoreDefault = {
  isLoaded: {
    isLoadedGlobalVars: false,
    isLoadedCourses: false,
  },
  courses: [],
  globalVars: {
    numberQuestionsInSlide: 2,
  },
  componentsState: {
    questionsSlideNumber: 0,
    isModalFrameVisible: false,
    isSideNavVisible: false,
    isLoaderOverlayVisible: false,
    isDocumentAdded: false,
    isCourseStarted: false,
  },
  forms: {
    searchInput: '',
    firstName: '',
    middleName: '',
    lastName: '',
    sendTo: '',
    sendCc: '',
  },
  documents: [],
  language: 'ru',
}

export const rootReducer: Function = (
  store: IRootStore = rootStoreDefault,
  action: any
): any => {
  const { type, data } = action

  const output = {
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

    TOGGLE_MODAL_FRAME,

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
