import { UserType } from './UserType'
import { ModuleType, CourseType } from '../@types/GraphqlTypes'
import { PaginationType } from './PaginationType'

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

export enum PaginationNameEnumType {
  pagesCourses = 'pagesCourses',
}

export type PaginationDict = Record<PaginationNameEnumType, PaginationType>

export type ComponentsStateType = {
  isLoadedLocalStorageStoreState: boolean
  isSepAdvancedSearch: boolean
  isShownPalette: boolean
  questionsSlideNumber: number
  isModalFrameVisible: boolean
  isSideNavLeftVisible: boolean
  isLoaderOverlayVisible: boolean
  isDocumentAdded: boolean
  isCourseStarted: boolean
  isOAuthFacebookScriptLoaded: boolean
  isOAuthVKontakteScriptLoaded: boolean
  isOAuthGoogleScriptLoaded: boolean
  oAuthStage: string | null
  modalFrames: { childName: string; isActive: boolean; childProps: any }[]
  pagination: PaginationDict
}

export type FormsType = {
  searchInput: string
  sendTo: string
  sendCc: string
  searchFormSep: SearchFormSepType
  userPrev: UserType
  user: UserType
  tagsPick: string[]
  tagsOmit: string[]
}

export type ScormType = {
  courseIDActive: undefined
  moduleIDActive: undefined
  numberQuestionsInSlide: number
  durationMultiplier: number
}

export type UserIdDataAwsCognito = {
  cognito_groups: string[]
  email: string | null
  exp: number | null
  message: string | null
  preferred_username: string | null
  refresh_token: string | null
  sub: string | null
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
  forms: FormsType
  isLoaded: {
    isLoadedGlobalVars: boolean
    isLoadedCourses: boolean
    mediaLoaded: any
  }
  language: string
  authAwsCognitoUserData: UserIdDataAwsCognito
  globalVars: GlobalVarsType
}
