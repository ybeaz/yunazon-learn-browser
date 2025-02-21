import { UserType } from 'yourails_common'
import {
  ModuleType,
  CourseType,
  DocumentType,
  ProfileType,
  TagType,
  CreateModuleStagesEnumType,
  CreateModuleStatusEnumType,
  CreateModuleStageType,
} from 'yourails_common'
import { PaginationType } from 'yourails_common'
import { PaginationNameEnumType } from 'yourails_common'
import { ArticleItemType } from 'yourails_common'
import { ScreensEnumType } from 'yourails_common'

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

export type PaginationDict = Record<PaginationNameEnumType, PaginationType>

export type ComponentsStateType = {
  screenActive: ScreensEnumType
  isSendBccInputVisible: boolean
  modulesSearchApplied: string | null
  tagsSearchApplied: string | null
  documentsSearchApplied: string | null
  tagsPick: string[]
  tagsOmit: string[]
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
  isEditNameVisible: boolean
  oAuthStage: string | null
  modalFrames: { childName: string; isActive: boolean; childProps: any }[]
  pagination: PaginationDict
  createModuleStages: Record<CreateModuleStagesEnumType, CreateModuleStageType>
}

export type FormsType = {
  sendTo: string
  sendCc: string
  sendBcc: string
  userPrev: UserType
  user: UserType
  inputCourseCreate: string
  modulesSearch: string
  documentsSearch: string
  searchFormSep: any
  tagsSearch: string
  coursesSearch: string
  profileActive: {
    nameFirst: string
    nameLast: string
    nameMiddle: string
  }
}

export type UrlParamsQueryType = { sendCc: string; sendBcc: string }

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
  articles: ArticleItemType[]
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
  urlParamsQuery: UrlParamsQueryType
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
