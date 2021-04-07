import { RootStore } from '../@types/RootStore'
import { getOptionsShuffled } from '../Shared/getOptionsShuffled'
import { getProdidevAnswerDefault } from '../Shared/getProdidevAnswerDefault'
import { getOptionsClickedByID } from '../Shared/getOptionsClickedByID'
import { getModuleActiveByContentID } from '../Shared/getModuleActiveByContentID'
import { getCourseModuleActive } from '../Shared/getCourseModuleActive'
import { getProvidedActiveDefault } from '../Shared/getProvidedActiveDefault'

const rootStoreDefault = {
  isLoaded: {
    isLoadedGlobalVars: false,
    isLoadedCourses: false,
  },
  courses: [],
  globalVars: {},
  componentsState: {
    questionSlideNumber: 0,
    modalGetScores: false,
    sideNavigationState: false,
  },
  forms: {
    nameModal: '',
    emailModal: '',
  },
}

export const rootReducer: Function = (
  store: RootStore = rootStoreDefault,
  action: any
): any => {
  const { type } = action

  const output = {
    SET_QUESTION_SLIDE: () => {},

    PLUS_QUESTION_SLIDE: () => {},

    ONCHANGE_EMAIL_MODAL: () => {
      const { data } = action
      const { forms } = store
      const nextForms = {
        ...forms,
        emailModal: data,
      }
      return { ...store, forms: nextForms }
    },

    ONCHANGE_NAME_MODAL: () => {
      const { data } = action
      const { forms } = store
      const nextForms = {
        ...forms,
        nameModal: data,
      }
      return { ...store, forms: nextForms }
    },

    TOGGLE_MODAL_GET_SCORES: () => {
      const { data } = action
      const { componentsState } = store
      const componentsStateNext = {
        ...componentsState,
        modalGetScores: data,
      }
      return { ...store, componentsState: componentsStateNext }
    },

    GET_ANSWERS_DEFAULT: () => {
      const { courses } = store
      let coursesNext = getProdidevAnswerDefault(courses)
      coursesNext = getOptionsShuffled(coursesNext)
      return { ...store, courses: coursesNext }
    },

    SELECT_COURSE_MODULE_CONTENTID: () => {
      const { data } = action
      const { contentID } = data
      const { courses } = store
      let coursesNext = getProvidedActiveDefault(courses)
      coursesNext = getModuleActiveByContentID(courses, contentID)
      return { ...store, courses: coursesNext }
    },

    SELECT_COURSE_MODULE: () => {
      const { data } = action
      const { courseID, moduleID } = data
      const { courses } = store
      let coursesNext = getProvidedActiveDefault(courses)
      coursesNext = getCourseModuleActive(courses, courseID, moduleID)
      return { ...store, courses: coursesNext }
    },

    CLICK_CHECK: () => {
      const { data } = action
      const { optionID, multi } = data
      const { courses } = store
      const coursesNext = getOptionsClickedByID(courses, optionID, multi)
      const storeNext = { ...store, courses: coursesNext }
      return storeNext
    },

    GET_CONTENT_DATA_SUCCESS: () => {
      const { data } = action
      const { isLoaded } = store
      const isLoadedNext = { ...isLoaded, isLoadedCourses: true }
      const storeNext = { ...store, courses: data, isLoaded: isLoadedNext }
      return storeNext
    },

    TOGGLE_SIDE_NAVIGATION: () => {
      const { componentsState } = store
      const { sideNavigationState } = componentsState
      const componentsStateNext = {
        ...componentsState,
        sideNavigationState: !sideNavigationState,
      }
      return { ...store, componentsState: componentsStateNext }
    },

    GET_GLOBAL_VARS_SUCCESS: () => {
      const { data } = action
      const { isLoaded } = store
      const isLoadedNext = { ...isLoaded, isLoadedGlobalVars: true }
      const storeNext = { ...store, globalVars: data, isLoaded: isLoadedNext }
      return storeNext
    },
  }

  return output[type] ? output[type]() : store
}
