import { RootStore } from '../@types/RootStore'
import { getOptionsShuffled } from '../Shared/getOptionsShuffled'
import { getProdidevAnswerDefault } from '../Shared/getProdidevAnswerDefault'
import { getOptionsClickedByID } from '../Shared/getOptionsClickedByID'
import { getModuleActiveByContentID } from '../Shared/getModuleActiveByContentID'
import { getCourseModuleActive } from '../Shared/getCourseModuleActive'
import { getProvidedActiveDefault } from '../Shared/getProvidedActiveDefault'

const rootStoreDefault = {
  userName: 'Вася Пупкин',
  courses: [],
  sideNavigationState: false,
  globalVars: {},
}

export const rootReducer: Function = (
  store: RootStore = rootStoreDefault,
  action: any
): any => {
  const { type } = action

  const output = {
    GET_ANSWERS_DEFAULT: () => {
      const { courses } = store
      let coursesNext = getProdidevAnswerDefault(courses)
      coursesNext = getOptionsShuffled(coursesNext)
      console.info('index.reducer [24]', { coursesNext, courses })
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
      const storeNext = { ...store, courses: data }
      return storeNext
    },

    TOGGLE_SIDE_NAVIGATION: () => {
      const { sideNavigationState } = store
      // console.info('rootReducer [11]', { action })
      return { ...store, sideNavigationState: !sideNavigationState }
    },

    GET_GLOBAL_VARS_SUCCESS: () => {
      const { data } = action
      const storeNext = { ...store, globalVars: data }
      return storeNext
    },
  }

  return output[type] ? output[type]() : store
}
