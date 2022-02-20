export interface IUser {
  userAvatar: string
  userBirthYear: number
  userDateCreated: string
  userDateDeleted: string
  userDateUpdated: string
  userEmail: string
  userGender: string
  userId: string
  userIdExternal: string
  userInfoAbout: string
  userLanguages: string[]
  userLocaleCity: string
  userLocaleCountry: string
  userLoginSource: string
  userMedia: string[]
  userName: string
  userNameFirst: string
  userNameLast: string
  userNameMiddle: string
  userPasswordAuth: string
  userPasswordAuth2: string
  userPhone: number
  userRoles: string[]
  userSkillsExpertise: string[]
  userStatus: string
  userWebLink: string
  userWebTokenAuth: string
  userZoneInfo: string
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
