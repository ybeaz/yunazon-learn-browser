import { GetQuestionScoresPropsOutResType } from '../Components/QuestionScores/getQuestionScoresPropsOut'

const handleEvents = () => {}

export const expected01: GetQuestionScoresPropsOutResType = {
  navLinkNextTaskProps: {
    to: {
      pathname: '/m/ZC9oQ3X37KQi/How-do-animals-experience-pain---Robyn-J-Crook',
      search: {
        pageModules: '1',
        pageTags: '1',
        pageDocuments: '1',
        modulesSearch: 'animal testing',
        tagsSearch: 'animal testing',
      },
    },
  },
  buttonNextTaskProps: {
    icon: 'MdForward',
    classAdded: 'Button_NextTask',
    handleEvents,
    action: { typeEvent: 'TEST', data: {} },
    captureLeft: 'Next task',
    isDisplaying: true,
  },
  navLinkCreditProps: { to: { pathname: '/' } },
  buttonCreditProps: {
    icon: 'MdForward',
    classAdded: 'Button_Credit',
    handleEvents,
    action: {},
    tooltipText: 'View reward',
    tooltipPosition: 'top',
    captureLeft: 'View reward',
    isDisplaying: true,
  },
  buttonEditNameProps: {
    icon: 'MdForward',
    classAdded: 'Button_EditName',
    handleEvents,
    action: {
      typeEvent: 'SET_EDIT_NAME_VISIBILITY',
      data: { isEditNameVisible: true },
    },
    tooltipText: 'Open edit name',
    tooltipPosition: 'top',
    captureLeft: 'Open edit name',
    isDisplaying: true,
  },
  buttonConfirmEditNameProps: {
    icon: 'MdForward',
    classAdded: 'Button_ConfirmEditName',
    handleEvents,
    action: { typeEvent: 'CLICK_ON_CONFIRM_NAMES', data: {} },
    tooltipText: 'Confirm',
    tooltipPosition: 'top',
    captureLeft: 'Confirm',
    isDisplaying: true,
  },
  navLinkAchievementsProps: { to: { pathname: '/my-documents' } },
  buttonAchievementsProps: {
    icon: 'MdForward',
    classAdded: 'Button_Achievements',
    handleEvents,
    action: {},
    tooltipText: 'Achievements',
    tooltipPosition: 'top',
    captureLeft: 'Achievements',
    isDisplaying: true,
  },
  navLinkAllMissionsProps: {
    to: {
      pathname: '/',
      search: {
        pageModules: '1',
        pageTags: '1',
        pageDocuments: '1',
        modulesSearch: 'animal testing',
        tagsSearch: 'animal testing',
      },
    },
  },
  buttonAllMissionsProps: {
    icon: 'MdForward',
    classAdded: 'Button_BackToTopic',
    handleEvents,
    action: {},
    tooltipText: 'Back to topic',
    tooltipPosition: 'top',
    captureLeft: 'Back to topic',
    isDisplaying: true,
  },
  formInputNamesProps: { language: 'en', handleEvents },
}
