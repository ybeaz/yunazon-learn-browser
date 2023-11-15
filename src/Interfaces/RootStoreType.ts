import { UserType } from './UserType'
import { ModuleType, CourseType } from '../@types/GraphqlTypes'

export interface SearchFormSepType {
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

export interface ComponentsStateType {
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

export interface FormsType {
  searchInput: string
  sendTo: string
  sendCc: string
  searchFormSep: SearchFormSepType
  userPrev: UserType
  user: UserType
}

export interface RootStoreType {
  analyticsID: string | null
  componentsState: ComponentsStateType
  courses: CourseType[]
  documents: any[]
  users: UserType[]
  globalVars: {
    titleSite: string
    descriptionSite: string
    canonicalUrlSite: string
    langSite: string
    theme: string
    numberQuestionsInSlide: number
    durationMultiplier: number
  }
  forms: FormsType
  isLoaded: {
    isLoadedGlobalVars: boolean
    isLoadedCourses: boolean
    mediaLoading: any
  }
  language: string
}
