import { ButtonYrlPropsType } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import {
  GetSideNavigationItemsPropsArrPropsType,
  GetSideNavigationItemsPropsArrType,
  GetSideNavigationItemsResType,
} from './SideNavigationTypes'
import { isAwsCognitoAuth } from '../../../FeatureFlags'
import { isCourseCreateSectionFlag } from '../../../FeatureFlags'

/**
 * @description Function to getSideNavigationItemsPropsArr
 * @import import { getSideNavigationItemsPropsArr, GetSideNavigationItemsPropsArrParamsType } from './getSideNavigationItemsPropsArr'
 */
export const getSideNavigationItemsPropsArr: GetSideNavigationItemsPropsArrType = ({
  navigate,
  language,
  sub,
  handleEvents,
}: GetSideNavigationItemsPropsArrPropsType): GetSideNavigationItemsResType[] => {
  const sideNavigationButtons: GetSideNavigationItemsResType[] = [
    {
      navLinkProps: {},
      buttonYrlProps: {
        icon: 'MdLogin',
        captureRight: DICTIONARY.Login[language],
        classAdded: 'Button_sideMenuItems',
        handleEvents,
        action: { typeEvent: 'CLICK_ON_SIGN_IN' },
        isDisplaying: isAwsCognitoAuth() && !sub,
      },
    },
    {
      navLinkProps: {},
      buttonYrlProps: {
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
    },
    {
      navLinkProps: {},
      buttonYrlProps: {
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
    },
    {
      navLinkProps: {},
      buttonYrlProps: {
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
    },
    {
      navLinkProps: {},
      buttonYrlProps: {
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
    },
    {
      navLinkProps: {},
      buttonYrlProps: {
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
    },
    {
      navLinkProps: {},
      buttonYrlProps: {
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
    },
    {
      navLinkProps: {},
      buttonYrlProps: {
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
    },
    {
      navLinkProps: {},
      buttonYrlProps: {
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
    },
    {
      navLinkProps: {},
      buttonYrlProps: {
        icon: 'MdFlag',
        captureRight: DICTIONARY.About[language],
        classAdded: 'Button_sideMenuItems',
        handleEvents,
        action: { typeEvent: 'DEV_STAGE' },
        isDisplaying: false, // TODO, true,
      },
    },
    {
      navLinkProps: {},
      buttonYrlProps: {
        icon: 'MdAddShoppingCart',
        captureRight: DICTIONARY.Services[language],
        classAdded: 'Button_sideMenuItems',
        handleEvents,
        action: { typeEvent: 'DEV_STAGE' },
        isDisplaying: false, // TODO, true,
      },
    },
    {
      navLinkProps: {},
      buttonYrlProps: {
        icon: 'MdContactMail',
        captureRight: DICTIONARY.Contacts[language],
        classAdded: 'Button_sideMenuItems',
        handleEvents,
        action: { typeEvent: 'DEV_STAGE' },
        isDisplaying: false, // TODO, true,
      },
    },
    {
      navLinkProps: {},
      buttonYrlProps: {
        icon: 'MdLogout',
        captureRight: DICTIONARY.Logout[language],
        classAdded: 'Button_sideMenuItems',
        handleEvents,
        action: { typeEvent: 'CLICK_ON_SIGN_OUT' },
        isDisplaying: isAwsCognitoAuth() && !!sub,
      },
    },
    {
      navLinkProps: {},
      buttonYrlProps: {
        icon: 'HiOutlineAcademicCap',
        captureRight: DICTIONARY.Academy[language],
        classAdded: 'Button_sideMenuItems',
        handleEvents,
        action: { typeEvent: 'GO_SCREEN', data: { navigate } },
        isDisplaying: false,
      },
    },
  ]

  return sideNavigationButtons
}
