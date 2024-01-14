import { UserType } from '../Interfaces/UserType'
import {
  CourseCreateProgressType,
  CreateCourseStatusEnumType,
  ComponentsStateType,
  SearchFormSepType,
  FormsType,
  RootStoreType,
} from '../Interfaces/RootStoreType'

import { paginationOffset } from '../Constants/pagination.const'

import { courseCreateProgress01 } from './__mocks__/courseCreateProgress'

export const userStoreDefault: UserType = {
  userAvatar: '',
  userBirthYear: null,
  userDateCreated: '',
  userDateDeleted: '',
  userDateUpdated: '',
  userEmail: '',
  userGender: '',
  userIdProfile: '',
  userIdAuth: '',
  userIdExternal: '',
  userInfoAbout: '',
  userLanguages: [],
  userLocaleCity: '',
  userLocaleCountry: '',
  userLoginSource: '',
  userMedia: [],
  userName: '',
  userNameNick: '',
  nameFirst: '',
  nameLast: '',
  nameMiddle: '',
  userPasswordAuth: '',
  userPasswordAuth2: '',
  userPhone: null,
  userRoles: [],
  userSkillsExpertise: [],
  userStatus: '',
  userWebLink: '',
  userWebTokenAuth: '',
  userZoneInfo: '',
  userAwsCognitoAuth: {
    id_token: '',
    access_token: '',
    refresh_token: '',
    expires_in: 0,
    token_type: '',
  },
}

export const searchFormSepDefault: SearchFormSepType = {
  selectSkillsOffered: [],
  selectSkillsRequired: '',
  selectCountryRequired: [],
  selectLanguageRequired: [],
  inputAgeFromRequired: 0,
  inputAgeToRequired: 100,
  selectGenderRequired: [],
  selectMediaRequired: [],
  inputDescriptionRequired: '',
  selectSortBy: '',
}

export const componentsStateDefault: ComponentsStateType = {
  screenActive: 'AcademyMatrix',
  isObjections: false,
  isSummary: true,
  isConfetti: false,
  isSepAdvancedSearch: false,
  isShownPalette: false,
  questionsSlideNumber: 0,
  isModalFrameVisible: false,
  isSideNavLeftVisible: false,
  isLoaderOverlayVisible: false,
  isCourseStarted: false,
  isOAuthFacebookScriptLoaded: false,
  isOAuthVKontakteScriptLoaded: false,
  isOAuthGoogleScriptLoaded: false,
  oAuthStage: null,
  modalFrames: [
    {
      childName: 'AuthUser',
      isActive: false,
      childProps: {
        scenario: { branch: 'signInManually', step: '' }, // signInWithVkontakte signInWithFacebook signInWithGoogle signInManually
      },
    },
  ],
  pagination: {
    pagesCourses: {
      first: 0,
      offset: paginationOffset,
      hasNextPage: true,
      endCursor: '',
    },
    pagesDocuments: {
      first: 0,
      offset: paginationOffset,
      hasNextPage: true,
      endCursor: '',
    },
  },
  createModuleStages: {
    metaData: {
      isActive: true,
      status: CreateCourseStatusEnumType['todo'],
      timeCalculated: null,
    },
    transcript: {
      isActive: true,
      status: CreateCourseStatusEnumType['todo'],
      timeCalculated: null,
    },
    summary: {
      isActive: true,
      status: CreateCourseStatusEnumType['todo'],
      timeCalculated: null,
    },
    questions: {
      isActive: true,
      status: CreateCourseStatusEnumType['todo'],
      timeCalculated: null,
    },
    objections: {
      isActive: false,
      status: CreateCourseStatusEnumType['todo'],
      timeCalculated: null,
    },
    courseModule: {
      isActive: true,
      status: CreateCourseStatusEnumType['todo'],
      timeCalculated: null,
    },
  },
}

export const formsDefault: FormsType = {
  inputCourseCreate: '',
  inputSearch: '',
  sendTo: '',
  sendCc: '',
  searchFormSep: searchFormSepDefault,
  userPrev: userStoreDefault,
  user: userStoreDefault,
  tagsPick: [],
  tagsOmit: [],
}

export const courseCreateProgressDefault: CourseCreateProgressType = {
  originUrl: '',
  course: {},
  metaData: {},
  questions: [],
  questionsChunks: [],
  summary: [],
  summaryChunks: [],
  transcript: [],
  transcriptChunks: [],
}

export const rootStoreDefault: RootStoreType = {
  analyticsID: null,
  componentsState: componentsStateDefault,
  courses: [],
  courseCreateProgress: courseCreateProgressDefault,
  documents: [],
  articles: [],
  users: [],
  scorm: {
    // coursesInProgress: [],
    courseIDActive: null,
    moduleIDActive: null,
    numberQuestionsInSlide: 2,
    durationMultiplier: 1,
  },
  forms: formsDefault,
  isLoaded: {
    isLoadedGlobalVars: true,
    isLoadedCourses: false,
    mediaLoaded: {},
  },
  language: 'en',
  authAwsCognitoUserData: {
    cognito_groups: [],
    email: null,
    exp: 0,
    message: null,
    preferred_username: null,
    refresh_token: null,
    sub: null,
  },
  globalVars: {
    titleSite: 'Academy YouRails - Teach curious; Learn from inspired',
    descriptionSite:
      'Behind every great human achievement there are teachers who helped to get on top. Courses, tests, certificates',
    canonicalUrlSite: 'https://academy.yourails.com',
    langSite: 'en',
    theme: 'Dark',
  },
}
