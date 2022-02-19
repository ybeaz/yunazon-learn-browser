export interface IUser {
  loginSource: string
  passwordAuth: string
  passwordAuth2: string
  phone: number
  userAvatar: string
  roles: string[]
  status: string
  uid: string
  uidExternal: string
  userEmail: string
  userNameFirst: string
  userNameLast: string
  userNameMiddle: string
  webToken: null | string
  userSkillsExpertise: string[]
  userInfoAbout: string
  userCountry: string[]
  userLanguages: string[]
  userBirthYear: number
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
  user: IUser
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
