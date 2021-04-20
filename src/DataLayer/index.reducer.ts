import { RootStore } from '../@types/RootStore'
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
    modalGetScores: true,
    sideNavigationState: false,
    loaderOverlayState: false,
  },
  forms: {
    nameModal: '',
    emailModal: '',
  },
  documents: [],
}

export const rootReducer: Function = (
  store: RootStore = rootStoreDefault,
  action: any
): any => {
  const { type } = action

  const output = {
    TOGGLE_LOADER_OVERLAY: () => {
      const { data } = action
      const { componentsState } = store
      const componentsStateNext = {
        ...componentsState,
        loaderOverlayState: data,
      }
      return { ...store, componentsState: componentsStateNext }
    },

    ADD_DOCUMENT_SUCCESS: () => {
      const { data } = action
      const { documents } = store
      const documentsNext = [...documents, data]
      // console.info('index.reducer [40]', { data, documentsNext })
      return { ...store, documents: documentsNext }
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
