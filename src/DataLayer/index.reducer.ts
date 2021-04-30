import { IRootStore } from '../Interfaces/IRootStore'
import { getChunkedArray } from '../Shared/getChunkedArray'
import { getActiveCourseData } from '../Shared/getActiveCourseData'
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
  globalVars: {
    numberQuestionsInSlide: 2,
  },
  componentsState: {
    questionsSlideNumber: 0,
    isModalFrameVisible: false,
    isSideNavVisible: false,
    isLoaderOverlayVisible: false,
    isDocumentAdded: false,
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
    ONCHANGE_SEARCH_INPUT: () => {
      const { forms } = store
      const nextForms = {
        ...forms,
        searchInput: data,
      }
      return { ...store, forms: nextForms }
    },

    CHANGE_NUM_QUESTIONS_IN_SLIDE: () => {
      const { globalVars } = store
      const globalVarsNext = { ...globalVars, numberQuestionsInSlide: data }
      const storeNext = { ...store, globalVars: globalVarsNext }
      return storeNext
    },

    SELECT_LANGUAGE: () => {
      return { ...store, language: data }
    },

    TOGGLE_LOADER_OVERLAY: () => {
      const { componentsState } = store
      const componentsStateNext = {
        ...componentsState,
        isLoaderOverlayVisible: data,
      }
      return { ...store, componentsState: componentsStateNext }
    },

    TOGGLE_IS_DOCUMENT_ADDED: () => {
      const { componentsState } = store
      const componentsStateNext = {
        ...componentsState,
        isDocumentAdded: data,
      }
      return {
        ...store,
        componentsState: componentsStateNext,
      }
    },

    ADD_DOCUMENT_SUCCESS: () => {
      const { documents, componentsState } = store
      const documentsNext = [...documents, data]
      const componentsStateNext = {
        ...componentsState,
        isDocumentAdded: true,
      }
      return {
        ...store,
        documents: documentsNext,
        componentsState: componentsStateNext,
      }
    },

    SET_QUESTION_SLIDE: () => {
      const { componentsState } = store
      const componentsStateNext = {
        ...componentsState,
        questionsSlideNumber: data,
      }
      return { ...store, componentsState: componentsStateNext }
    },

    PLUS_QUESTION_SLIDE: () => {
      const { componentsState, courses, globalVars } = store
      const numberQuestionsInSlide = globalVars?.numberQuestionsInSlide
      const { questionsSlideNumber } = componentsState

      const { questionsActive } = getActiveCourseData(courses)
      const questionsChunked = getChunkedArray(
        questionsActive,
        numberQuestionsInSlide
      )

      let questionSlideNumberNext = 0
      const questionSlideNumberPlus = questionsSlideNumber + data
      if (questionSlideNumberPlus > questionsChunked.length - 1) {
        questionSlideNumberNext = questionsChunked.length - 1
      } else if (questionSlideNumberPlus < 0) {
        questionSlideNumberNext
      } else {
        questionSlideNumberNext = questionSlideNumberPlus
      }
      const componentsStateNext = {
        ...componentsState,
        questionsSlideNumber: questionSlideNumberNext,
      }
      return { ...store, componentsState: componentsStateNext }
    },

    ONCHANGE_EMAIL_CC: () => {
      const { forms } = store
      const nextForms = {
        ...forms,
        sendCc: data,
      }
      return { ...store, forms: nextForms }
    },

    ONCHANGE_EMAIL_TO: () => {
      const { forms } = store
      const nextForms = {
        ...forms,
        sendTo: data,
      }
      return { ...store, forms: nextForms }
    },

    ONCHANGE_FIRST_NAME_MODAL: () => {
      const { forms } = store
      const nextForms = {
        ...forms,
        firstName: data,
      }
      return { ...store, forms: nextForms }
    },

    ONCHANGE_MIDDLE_NAME_MODAL: () => {
      const { forms } = store
      const nextForms = {
        ...forms,
        middleName: data,
      }
      return { ...store, forms: nextForms }
    },

    ONCHANGE_LAST_NAME_MODAL: () => {
      const { forms } = store
      const nextForms = {
        ...forms,
        lastName: data,
      }
      return { ...store, forms: nextForms }
    },

    TOGGLE_MODAL_FRAME: () => {
      const { componentsState } = store
      const componentsStateNext = {
        ...componentsState,
        isModalFrameVisible: data,
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
      const { contentID } = data
      const { courses } = store
      let coursesNext = getProvidedActiveDefault(courses)
      coursesNext = getModuleActiveByContentID(courses, contentID)
      return { ...store, courses: coursesNext }
    },

    SELECT_COURSE_MODULE: () => {
      const { courseID, moduleID } = data
      const { courses } = store
      let coursesNext = getProvidedActiveDefault(courses)
      coursesNext = getCourseModuleActive(courses, courseID, moduleID)
      return { ...store, courses: coursesNext }
    },

    CLICK_CHECK: () => {
      const { optionID, multi } = data
      const { courses } = store
      const coursesNext = getOptionsClickedByID(courses, optionID, multi)
      const storeNext = { ...store, courses: coursesNext }
      return storeNext
    },

    GET_CONTENT_DATA_SUCCESS: () => {
      const { isLoaded } = store
      const isLoadedNext = { ...isLoaded, isLoadedCourses: true }
      const storeNext = { ...store, courses: data, isLoaded: isLoadedNext }
      return storeNext
    },

    TOGGLE_SIDE_NAVIGATION: () => {
      const { componentsState } = store
      const { isSideNavVisible } = componentsState
      const componentsStateNext = {
        ...componentsState,
        isSideNavVisible: !isSideNavVisible,
      }
      return { ...store, componentsState: componentsStateNext }
    },

    GET_GLOBAL_VARS_SUCCESS: () => {
      const { globalVars, isLoaded } = store
      const globalVarsNext = { ...globalVars, ...data }
      const isLoadedNext = { ...isLoaded, isLoadedGlobalVars: true }
      const storeNext = {
        ...store,
        globalVars: globalVarsNext,
        isLoaded: isLoadedNext,
      }
      return storeNext
    },
  }

  return output[type] ? output[type]() : store
}
