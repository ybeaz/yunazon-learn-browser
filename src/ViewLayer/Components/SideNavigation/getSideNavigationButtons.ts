import { ButtonYrlPropsType } from '../../ComponentsLibrary/'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import {
  GetSideNavigationButtonsProps,
  GetSideNavigationButtons,
} from './SideNavigationTypes'
import { isAwsCognitoAuth } from '../../../FeatureFlags'

/**
 * @description Function to getSideNavigationButtons
 * @run ts-node src/shared/utils/getSideNavigationButtons.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getSideNavigationButtons.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getSideNavigationButtons, GetSideNavigationButtonsParamsType } from './getSideNavigationButtons'
 */
export const getSideNavigationButtons: GetSideNavigationButtons = ({
  navigate,
  language,
  preferred_username,
}: GetSideNavigationButtonsProps): ButtonYrlPropsType[] => {
  const sideNavigationButtons: ButtonYrlPropsType[] = [
    {
      icon: 'MdLogin',
      captureRight: DICTIONARY.Login[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'CLICK_ON_SIGN_IN' },
      isDisplaying: isAwsCognitoAuth() && !preferred_username,
    },
    {
      icon: 'MdHome',
      captureRight: DICTIONARY.Home[language],
      classAdded: 'Button_sideMenuItems',
      action: {
        typeEvent: 'GO_SCREEN',
        data: { history: navigate, path: '/' },
      },
      isDisplaying: true,
    },
    {
      icon: 'MdAssignmentTurnedIn',
      captureRight: DICTIONARY.My_documents[language],
      classAdded: 'Button_sideMenuItems',
      action: {
        typeEvent: 'GO_SCREEN',
        data: { history: navigate, path: '/documents' },
      },
      isDisplaying: !!preferred_username,
    },
    {
      icon: 'MdAssignmentTurnedIn',
      captureRight: DICTIONARY.Create_course[language],
      classAdded: 'Button_sideMenuItems',
      action: {
        typeEvent: 'GO_SCREEN',
        data: { history: navigate, path: '/course-create' },
      },
      isDisplaying: !!preferred_username,
    },
    {
      icon: 'MdCastForEducation',
      captureRight: DICTIONARY.My_courses[language],
      classAdded: 'Button_sideMenuItems',
      action: {
        typeEvent: 'GO_SCREEN',
        data: { history: navigate, path: '/courses' },
      },
      isDisplaying: !!preferred_username, // TODO, component Courses.tsx !!preferred_username,
    },
    {
      icon: 'MdLightbulbOutline',
      captureRight: DICTIONARY.About[language],
      classAdded: 'Button_sideMenuItems',
      action: {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [
          {
            childName: 'AboutAcademyBody',
            isActive: true,
            childProps: {},
          },
        ],
      },
      isDisplaying: true,
    },
    {
      icon: 'MdPerson',
      captureRight: DICTIONARY.My_profile[language],
      classAdded: 'Button_sideMenuItems',
      action: {
        typeEvent: 'GO_SCREEN',
        data: { history: navigate, path: '/profiles' },
      },
      isDisplaying: false, // TODO, component Profiles.tsx !!preferred_username,
    },
    {
      icon: 'MdQueue',
      captureRight: DICTIONARY.createCourseQuiz[language],
      classAdded: 'Button_sideMenuItems',
      action: {
        typeEvent: 'CREATE_COURSE',
        data: { contentComponentName: 'SideNavigation' },
      },
      isDisplaying: false, // TODO,
    },
    {
      icon: 'MdFlag',
      captureRight: DICTIONARY.About[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'DEV_STAGE' },
      isDisplaying: false, // TODO, true,
    },
    {
      icon: 'MdAddShoppingCart',
      captureRight: DICTIONARY.Services[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'DEV_STAGE' },
      isDisplaying: false, // TODO, true,
    },
    {
      icon: 'MdContactMail',
      captureRight: DICTIONARY.Contacts[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'DEV_STAGE' },
      isDisplaying: false, // TODO, true,
    },
    {
      icon: 'MdLogout',
      captureRight: DICTIONARY.Logout[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'CLICK_ON_SIGN_OUT' },
      isDisplaying: isAwsCognitoAuth() && !!preferred_username,
    },
    {
      icon: 'HiOutlineAcademicCap',
      captureRight: DICTIONARY.Academy[language],
      classAdded: 'Button_sideMenuItems',
      action: { typeEvent: 'GO_ACADEMY_SCREEN', data: { history: navigate } },
      isDisplaying: false,
    },
    // {
    //   icon: 'MdHome',
    //   captureRight: DICTIONARY.Home[language],
    //   classAdded: 'Button_sideMenuItems',
    //   action: {
    //     typeEvent: 'GO_SCREEN',
    //     data: { history: navigate, path: '/sep' },
    //   },
    //   isDisplaying: false,
    // },
  ]

  return sideNavigationButtons
}
