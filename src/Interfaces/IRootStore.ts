export interface IRootStore {
  isLoaded: {
    isLoadedGlobalVars: boolean
    isLoadedCourses: boolean
  }
  courses: any[]
  globalVars: any
  componentsState: {
    questionsSlideNumber: number
    isModalFrameVisible: boolean
    isSideNavVisible: boolean
    isLoaderOverlayVisible: boolean
    isDocumentAdded: boolean
  }
  forms: {
    userNameModal: {
      firstName: string
      middleName: string
      lastName: string
    }
    sendTo: string
    sendCc: string
  }
  documents: any[]
  language: string
}
