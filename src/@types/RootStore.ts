export interface RootStore {
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
  }
  forms: {
    nameModal: string
    emailModal: string
  }
}
