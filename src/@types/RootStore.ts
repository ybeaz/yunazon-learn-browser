export interface RootStore {
  isLoaded: {
    isLoadedGlobalVars: boolean
    isLoadedCourses: boolean
  }
  courses: any[]
  globalVars: any
  componentsState: {
    questionSlideNumber: number
    modalGetScores: boolean
    sideNavigationState: boolean
  }
  forms: {
    nameModal: string
    emailModal: string
  }
}
