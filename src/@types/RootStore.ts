export interface RootStore {
  isLoaded: {
    isLoadedGlobalVars: boolean
    isLoadedCourses: boolean
  }
  userName: string
  courses: any[]
  sideNavigationState: boolean
  globalVars: any
  modalsState: {
    modalGetScores: boolean
  }
  forms: {
    nameModal: string
    emailModal: string
  }
}
