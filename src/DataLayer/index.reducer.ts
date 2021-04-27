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
  globalVars: {},
  componentsState: {
    questionsSlideNumber: 0,
    isModalFrameVisible: false,
    isSideNavVisible: false,
    isLoaderOverlayVisible: false,
    isDocumentAdded: false,
  },
  forms: {
    userNameModal: {
      firstName: '',
      middleName: '',
      lastName: '',
    },
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
  const { type } = action

  const output = {
    SELECT_LANGUAGE: () => {
      const { data } = action
      return { ...store, language: data }
    },

    TOGGLE_LOADER_OVERLAY: () => {
      const { data } = action
      const { componentsState } = store
      const componentsStateNext = {
        ...componentsState,
        isLoaderOverlayVisible: data,
      }
      return { ...store, componentsState: componentsStateNext }
    },

    TOGGLE_IS_DOCUMENT_ADDED: () => {
      const { data } = action
      const { componentsState } = store
      const componentsStateNext = {
        ...componentsState,
        isDocumentAdded: data,
      }
      // console.info('index.reducer [40]', { data, documentsNext })
      return {
        ...store,
        componentsState: componentsStateNext,
      }
    },

    ADD_DOCUMENT_SUCCESS: () => {
      const { data } = action
      const { documents, componentsState } = store
      const documentsNext = [...documents, data]
      const componentsStateNext = {
        ...componentsState,
        isDocumentAdded: true,
      }
      // console.info('index.reducer [40]', { data, documentsNext })
      return {
        ...store,
        documents: documentsNext,
        componentsState: componentsStateNext,
      }
    },

    SET_QUESTION_SLIDE: () => {
      const { data } = action
      const { componentsState } = store
      const componentsStateNext = {
        ...componentsState,
        questionsSlideNumber: data,
      }
      return { ...store, componentsState: componentsStateNext }
    },

    PLUS_QUESTION_SLIDE: () => {
      const { data } = action
      const { componentsState, courses, globalVars } = store
      const numberQuestionsInSlide =
        globalVars?.configuration?.numberQuestionsInSlide || 2
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
      const { data } = action
      const { forms } = store
      const nextForms = {
        ...forms,
        sendCc: data,
      }
      return { ...store, forms: nextForms }
    },

    ONCHANGE_EMAIL_TO: () => {
      const { data } = action
      const { forms } = store
      const nextForms = {
        ...forms,
        sendTo: data,
      }
      return { ...store, forms: nextForms }
    },

    ONCHANGE_FIRST_NAME_MODAL: () => {
      const { data } = action
      const { forms } = store
      const { userNameModal } = forms
      const userNameModalNext = {
        ...userNameModal,
        firstName: data,
      }
      const nextForms = {
        ...forms,
        userNameModal: userNameModalNext,
      }
      return { ...store, forms: nextForms }
    },

    ONCHANGE_MIDDLE_NAME_MODAL: () => {
      const { data } = action
      const { forms } = store
      const { userNameModal } = forms
      const userNameModalNext = {
        ...userNameModal,
        middleName: data,
      }
      const nextForms = {
        ...forms,
        userNameModal: userNameModalNext,
      }
      return { ...store, forms: nextForms }
    },

    ONCHANGE_LAST_NAME_MODAL: () => {
      const { data } = action
      const { forms } = store
      const { userNameModal } = forms
      const userNameModalNext = {
        ...userNameModal,
        lastName: data,
      }
      const nextForms = {
        ...forms,
        userNameModal: userNameModalNext,
      }
      return { ...store, forms: nextForms }
    },

    TOGGLE_MODAL_FRAME: () => {
      const { data } = action
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
      const { isSideNavVisible } = componentsState
      const componentsStateNext = {
        ...componentsState,
        isSideNavVisible: !isSideNavVisible,
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
