export interface IUser {
  loginSource: undefined | string
  passwordAuth: string
  passwordAuth2: string
  phone: undefined | number
  avatar: undefined | string
  roles: undefined | string[]
  status: undefined | string
  uid: undefined | string
  uidExternal: undefined | string
  userEmail: undefined | string
  userNameFirst: string
  userNameLast: string
  userNameMiddle: string
  webToken: null | string
  userSkillsExpertise: string[]
  userInfoAbout: string
  userCountry: string[]
  userLanguages: string[]
  userYearOfBirth: string
  userGender: string[]
  userMedia: string[]
}

export interface ISearchFormSep {
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

export interface IComponentsState {
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

export interface IForms {
  searchInput: string
  sendTo: string
  sendCc: string
  searchFormSep: ISearchFormSep
  profile: IUser
}

export interface IRootStore {
  analyticsID: string
  componentsState: IComponentsState
  courses: any[]
  documents: any[]
  globalVars: {
    theme: string
    numberQuestionsInSlide: number
    durationMultiplier: number
  }
  forms: IForms
  isLoaded: {
    isLoadedGlobalVars: boolean
    isLoadedCourses: boolean
    mediaLoading: any
  }
  language: string
}
