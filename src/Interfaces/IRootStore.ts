export interface IUser {
  email: undefined | string
  familyName: undefined | string
  givenName: undefined | string
  loginSource: undefined | string
  phone: undefined | number
  picture: undefined | string
  roles: undefined | string
  status: undefined | string
  uid: undefined | string
  uidExternal: undefined | string
  userName: undefined | string
  webToken: null | string
}

export interface IRootStore {
  analyticsID: string
  componentsState: {
    isSepAdvancedSearch: boolean
    isShownSkillExchangeIntro: boolean
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
  courses: any[]
  documents: any[]
  globalVars: {
    theme: string
    numberQuestionsInSlide: number
    durationMultiplier: number
  }
  forms: {
    userNameAuth: string
    emailAuth: string
    passwordAuth: string
    passwordAuth2: string
    searchInput: string
    firstName: string
    middleName: string
    lastName: string
    sendTo: string
    sendCc: string
    catalogSep: {
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
  }
  isLoaded: {
    isLoadedGlobalVars: boolean
    isLoadedCourses: boolean
    mediaLoading: any
  }
  language: string
  user: IUser
}
