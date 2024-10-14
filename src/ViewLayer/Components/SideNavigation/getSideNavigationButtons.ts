import { ButtonYrlPropsType } from 'yourails_common'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { GetSideNavigationButtonsProps, GetSideNavigationButtons } from './SideNavigationTypes'
import { isAwsCognitoAuth } from '../../../FeatureFlags'
import { isCourseCreateSectionFlag } from '../../../FeatureFlags'

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
  sub,
  handleEvents,
}: GetSideNavigationButtonsProps): ButtonYrlPropsType[] => {
  const sideNavigationButtons: ButtonYrlPropsType[] = [
    {
      icon: 'MdLogin',
      captureRight: DICTIONARY.Login[language],
      classAdded: 'Button_sideMenuItems',
      handleEvents,
      action: { typeEvent: 'CLICK_ON_SIGN_IN' },
      isDisplaying: isAwsCognitoAuth() && !sub,
    },
    {
      icon: 'MdHome',
      captureRight: DICTIONARY.Home[language],
      classAdded: 'Button_sideMenuItems',
      handleEvents,
      action: {
        typeEvent: 'GO_SCREEN',
        data: { navigate, pathname: '/' },
      },
      isDisplaying: true,
    },
    {
      icon: 'MdOutlineVideocam',
      captureRight: DICTIONARY.All_interactive_videos[language],
      classAdded: 'Button_sideMenuItems',
      handleEvents,
      action: {
        typeEvent: 'GO_SCREEN',
        data: { navigate, pathname: '/m' },
      },
      isDisplaying: true,
    },
    {
      icon: 'MdOutlineTag',
      captureRight: DICTIONARY.All_tags[language],
      classAdded: 'Button_sideMenuItems',
      handleEvents,
      action: {
        typeEvent: 'GO_SCREEN',
        data: { navigate, pathname: '/t' },
      },
      isDisplaying: true,
    },
    {
      icon: 'MdAssignmentTurnedIn',
      captureRight: DICTIONARY.My_documents[language],
      classAdded: 'Button_sideMenuItems',
      handleEvents,
      action: {
        typeEvent: 'GO_SCREEN',
        data: { navigate, pathname: '/my-documents' },
      },
      isDisplaying: !!sub,
    },
    {
      icon: 'MdCastForEducation',
      captureRight: DICTIONARY.My_courses[language],
      classAdded: 'Button_sideMenuItems',
      handleEvents,
      action: {
        typeEvent: 'GO_SCREEN',
        data: { navigate, pathname: '/my-modules' },
      },
      isDisplaying: !!sub && isCourseCreateSectionFlag(),
    },
    {
      icon: 'MdLightbulbOutline',
      captureRight: DICTIONARY.About[language],
      classAdded: 'Button_sideMenuItems',
      handleEvents,
      action: {
        typeEvent: 'SET_MODAL_FRAMES',
        data: [
          {
            childName: 'AcademyAboutBody',
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
      handleEvents,
      action: {
        typeEvent: 'GO_SCREEN',
        data: { navigate, pathname: '/profiles' },
      },
      isDisplaying: false, // TODO, component Profiles.tsx !!sub,
    },
    {
      icon: 'MdQueue',
      captureRight: DICTIONARY.createCourseQuiz[language],
      classAdded: 'Button_sideMenuItems',
      handleEvents,
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
      handleEvents,
      action: { typeEvent: 'DEV_STAGE' },
      isDisplaying: false, // TODO, true,
    },
    {
      icon: 'MdAddShoppingCart',
      captureRight: DICTIONARY.Services[language],
      classAdded: 'Button_sideMenuItems',
      handleEvents,
      action: { typeEvent: 'DEV_STAGE' },
      isDisplaying: false, // TODO, true,
    },
    {
      icon: 'MdContactMail',
      captureRight: DICTIONARY.Contacts[language],
      classAdded: 'Button_sideMenuItems',
      handleEvents,
      action: { typeEvent: 'DEV_STAGE' },
      isDisplaying: false, // TODO, true,
    },
    {
      icon: 'MdLogout',
      captureRight: DICTIONARY.Logout[language],
      classAdded: 'Button_sideMenuItems',
      handleEvents,
      action: { typeEvent: 'CLICK_ON_SIGN_OUT' },
      isDisplaying: isAwsCognitoAuth() && !!sub,
    },
    {
      icon: 'HiOutlineAcademicCap',
      captureRight: DICTIONARY.Academy[language],
      classAdded: 'Button_sideMenuItems',
      handleEvents,
      action: { typeEvent: 'GO_SCREEN', data: { navigate } },
      isDisplaying: false,
    },
    // {
    //   icon: 'MdHome',
    //   captureRight: DICTIONARY.Home[language],
    //   classAdded: 'Button_sideMenuItems',
    //   action: {
    //     typeEvent: 'GO_SCREEN',
    //     data: { navigate, pathname: '/sep' },
    //   },
    //   isDisplaying: false,
    // },
  ]

  return sideNavigationButtons
}
