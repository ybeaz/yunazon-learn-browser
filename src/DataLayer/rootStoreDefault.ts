export const rootStoreDefault = {
  isLoaded: {
    isLoadedGlobalVars: false,
    isLoadedCourses: false,
    mediaLoading: {},
  },
  courses: [],
  globalVars: {
    numberQuestionsInSlide: 2,
  },
  componentsState: {
    questionsSlideNumber: 0,
    isModalFrameVisible: false,
    isSideNavVisible: false,
    isLoaderOverlayVisible: false,
    isDocumentAdded: false,
    isCourseStarted: false,
    modalFrames: [],
  },
  forms: {
    searchInput: '',
    firstName: '',
    middleName: '',
    lastName: '',
    sendTo: '',
    sendCc: '',
  },
  documents: [],
  language: 'ru',
  analyticsID: null,
}
