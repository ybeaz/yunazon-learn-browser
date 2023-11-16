import { UserType } from './UserType'
import { ModuleType, CourseType } from '../@types/GraphqlTypes'

export type SearchFormSepType = {
  selectSkillsOffered: string[]
  selectSkillsRequired: string
  selectCountryRequired: string[]
  selectLanguageRequired: string[]
  inputAgeFromRequired: number
  inputAgeToRequired: number
  selectGenderRequired: string[]
  selectMediaRequired: string[]
  inputDescriptionRequired: string
  selectSortBy: string
}

export type ComponentsStateType = {
  isSepAdvancedSearch: boolean
  isShownPalette: boolean
  questionsSlideNumber: number
  isModalFrameVisible: boolean
  isSideNavVisible: boolean
  isLoaderOverlayVisible: boolean
  isDocumentAdded: boolean
  isCourseStarted: boolean
  isOAuthFacebookScriptLoaded: boolean
  isOAuthVKontakteScriptLoaded: boolean
  isOAuthGoogleScriptLoaded: boolean
  oAuthStage: string | null
  modalFrames: { childName: string; isActive: boolean; childProps: any }[]
}

export type FormsType = {
  searchInput: string
  sendTo: string
  sendCc: string
  searchFormSep: SearchFormSepType
  userPrev: UserType
  user: UserType
}

export type ScormType = {
  courseIDActive: undefined
  moduleIDActive: undefined
  numberQuestionsInSlide: number
  durationMultiplier: number
}

export type GlobalVarsType = {
  titleSite: string
  descriptionSite: string
  canonicalUrlSite: string
  langSite: string
  theme: string
}

export type RootStoreType = {
  analyticsID: string | null
  componentsState: ComponentsStateType
  courses: CourseType[]
  documents: any[]
  users: UserType[]
  scorm: ScormType
  globalVars: GlobalVarsType
  forms: FormsType
  isLoaded: {
    isLoadedGlobalVars: boolean
    isLoadedCourses: boolean
    mediaLoaded: any
  }
  language: string
}
