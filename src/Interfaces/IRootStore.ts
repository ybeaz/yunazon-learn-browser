export interface IUser {
  email: undefined | string
  roles: undefined | string
  uid: undefined | string
  status: undefined | string
  userName: undefined | string
  webToken: undefined | string
  phone?: undefined | number
}

export interface IRootStore {
  analyticsID: string
  componentsState: {
    questionsSlideNumber: number
    isModalFrameVisible: boolean
    isSideNavVisible: boolean
    isLoaderOverlayVisible: boolean
    isDocumentAdded: boolean
    isCourseStarted: boolean
    modalFrames: { childName: string; isActive: boolean; childProps: any }[]
  }
  courses: any[]
  documents: any[]
  globalVars: any
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
  }
  isLoaded: {
    isLoadedGlobalVars: boolean
    isLoadedCourses: boolean
    mediaLoading: any
  }
  language: string
  user: IUser
}
