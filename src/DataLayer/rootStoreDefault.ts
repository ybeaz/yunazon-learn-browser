import {
  IComponentsState,
  ISearchFormSep,
  IUser,
  IForms,
  IRootStore,
} from '../Interfaces/IRootStore'

export const userStoreDefault: IUser = {
  uid: undefined,
  uidExternal: undefined,
  userLoginSource: undefined,
  webToken: null,
  passwordAuth: '',
  passwordAuth2: '',
  userPhone: undefined,
  userAvatar: '',
  userRoles: [],
  userStatus: undefined,
  userEmail: undefined,
  userName: '',
  userNameFirst: '',
  userNameLast: '',
  userNameMiddle: '',
  userSkillsExpertise: [],
  userInfoAbout: '',
  userLocaleCountry: '',
  userLanguages: [],
  userBirthYear: undefined,
  userGender: '',
  userMedia: [],
}

export const searchFormSepDefault: ISearchFormSep = {
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

export const componentsStateDefault: IComponentsState = {
  isSepAdvancedSearch: false,
  isShownPalette: false,
  questionsSlideNumber: 0,
  isModalFrameVisible: false,
  isSideNavVisible: false,
  isLoaderOverlayVisible: false,
  isDocumentAdded: false,
  isCourseStarted: false,
  isOAuthFacebookScriptLoaded: false,
  isOAuthVKontakteScriptLoaded: false,
  isOAuthGoogleScriptLoaded: false,
  oAuthStage: null,
  modalFrames: [
    {
      childName: 'SkillExchangeIntro',
      isActive: false,
      childProps: {},
    },
    {
      childName: 'AuthUser',
      isActive: false,
      childProps: {
        scenario: { branch: 'signInManually', step: '' }, // signInWithVkontakte signInWithFacebook signInWithGoogle signInManually
      },
    },
  ],
}

export const formsDefault: IForms = {
  searchInput: '',
  sendTo: '',
  sendCc: '',
  searchFormSep: searchFormSepDefault,
  user: userStoreDefault,
}

export const rootStoreDefault: IRootStore = {
  analyticsID: null,
  componentsState: componentsStateDefault,
  courses: [],
  documents: [],
  globalVars: {
    theme: 'Dark',
    numberQuestionsInSlide: 2,
    durationMultiplier: 1,
  },
  forms: formsDefault,
  isLoaded: {
    isLoadedGlobalVars: false,
    isLoadedCourses: false,
    mediaLoading: {},
  },
  language: localStorage.getItem('language') || 'ru',
}
