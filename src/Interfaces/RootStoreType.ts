import { UserType } from './UserType'
import {
  ModuleType,
  CourseType,
  DocumentType,
  ProfileType,
  TagType,
  CreateModuleStagesEnumType,
  CreateModuleStatusEnumType,
  CreateModuleStageType,
} from '../@types/'
import { PaginationType } from './PaginationType'
import { ArticleType } from '../@types/ArticleMockType'

export { CreateModuleStagesEnumType, CreateModuleStatusEnumType }
export type { CreateModuleStageType }

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
  pageModules = 'pageModules',
  pageDocuments = 'pageDocuments',
  pageTags = 'pageTags',
}

export type PaginationDict = Record<PaginationNameEnumType, PaginationType>

export type ComponentsStateType = {
  screenActive: string
  isObjections: boolean
  isSummary: boolean
  isConfetti: boolean
  isSepAdvancedSearch: boolean
  isShownPalette: boolean
  questionsSlideNumber: number
  isModalFrameVisible: boolean
  isSideNavLeftVisible: boolean
  isLoaderOverlayVisible: boolean
  isModuleStarted: boolean
  isOAuthFacebookScriptLoaded: boolean
  isOAuthVKontakteScriptLoaded: boolean
  isOAuthGoogleScriptLoaded: boolean
  isMobileSearchInput: boolean
  oAuthStage: string | null
  modalFrames: { childName: string; isActive: boolean; childProps: any }[]
  pagination: PaginationDict
  createModuleStages: Record<CreateModuleStagesEnumType, CreateModuleStageType>
}

export type FormsType = {
  sendTo: string
  sendCc: string
  userPrev: UserType
  user: UserType
  inputCourseCreate: string
  modulesSearch: string
  documentsSearch: string
  tagsSearch: string
  coursesSearch: string
  tagsPick: string[]
  tagsOmit: string[]
  profileActive: {
    nameFirst: string
    nameLast: string
    nameMiddle: string
  }
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

export type CourseCreateProgressType = {
  originUrl: string
  course: any
  metaData: any
  questions: any[]
  questionsChunks: any[]
  summary: any[]
  summaryChunks: any[]
  transcript: []
  transcriptChunks: any[]
}

export type RootStoreType = {
  analyticsID: string | null
  componentsState: ComponentsStateType
  modules: ModuleType[]
  courses: CourseType[]
  moduleCreateProgress: CourseCreateProgressType
  documents: DocumentType[]
  articles: ArticleType[]
  profiles: Pick<
    ProfileType,
    | 'profileID'
    | 'userID'
    | 'isActive'
    | 'nameFirst'
    | 'nameLast'
    | 'nameMiddle'
    | 'affiliation'
    | 'awards'
    | 'description'
    | 'jobTitle'
    | 'urls'
    | 'avatarSrc'
    | 'avatarSize'
  >[]
  tagsCloud: TagType[]
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
