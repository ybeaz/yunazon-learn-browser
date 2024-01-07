import { UserType } from './UserType'
import { CourseType, DocumentType } from '../@types/'
import { PaginationType } from './PaginationType'
import { ArticleType } from '../@types/ArticleMockType'

export enum CreateCourseStatusEnumType {
  todo = 'todo',
  pending = 'pending',
  success = 'success',
  failure = 'failure',
}

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
  pagesDocuments = 'pagesDocuments',
}

export type PaginationDict = Record<PaginationNameEnumType, PaginationType>

export type ComponentsStateType = {
  isObjections: boolean
  isSummary: boolean
  isConfetti: boolean
  isSepAdvancedSearch: boolean
  isShownPalette: boolean
  questionsSlideNumber: number
  isModalFrameVisible: boolean
  isSideNavLeftVisible: boolean
  isLoaderOverlayVisible: boolean
  isCourseStarted: boolean
  isOAuthFacebookScriptLoaded: boolean
  isOAuthVKontakteScriptLoaded: boolean
  isOAuthGoogleScriptLoaded: boolean
  oAuthStage: string | null
  modalFrames: { childName: string; isActive: boolean; childProps: any }[]
  pagination: PaginationDict
  createModuleStages: {
    metaData: CreateCourseStatusEnumType
    transcript: CreateCourseStatusEnumType
    summary: CreateCourseStatusEnumType
    questions: CreateCourseStatusEnumType
    objections: CreateCourseStatusEnumType
    finalization: CreateCourseStatusEnumType
  }
}

export type FormsType = {
  sendTo: string
  sendCc: string
  searchFormSep: SearchFormSepType
  userPrev: UserType
  user: UserType
  searchInput: string
  tagsPick: string[]
  tagsOmit: string[]
}

export type ScormType = {
  courseIDActive: string | null
  moduleIDActive: string | null
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
  courseCreateProgress: any
  documents: DocumentType[]
  articles: ArticleType[]
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
