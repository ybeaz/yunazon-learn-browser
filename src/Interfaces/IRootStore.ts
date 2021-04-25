export interface IRootStore {
  isLoaded: {
    isLoadedGlobalVars: boolean
    isLoadedCourses: boolean
  }
  courses: any[]
  globalVars: any
  componentsState: {
    questionsSlideNumber: number
    modalGetScores: boolean
    sideNavigationState: boolean
    loaderOverlayState: boolean
    isDocumentAdded: boolean
  }
  forms: {
    userNameModal: {
      firstName: string
      middleName: string
      lastName: string
    }
    emailModal: string
  }
  documents: any[]
}
