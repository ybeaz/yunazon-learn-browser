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
  const sideNavigationItemsProps: GetSideNavigationItemsResType[] = [
    {
      navLinkProps: undefined,
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
      navLinkProps: { to: { pathname: '/' } },
      buttonYrlProps: {
        icon: 'MdHome',
        captureRight: DICTIONARY.Home[language],
        classAdded: 'Button_sideMenuItems',
        handleEvents,
        action: {
          typeEvent: 'GO_SCREEN',
          data: {},
        },
        isDisplaying: true,
      },
    },
    {
      navLinkProps: { to: { pathname: '/m' } },
      buttonYrlProps: {
        icon: 'MdOutlineVideocam',
        captureRight: DICTIONARY.See_all[language],
        classAdded: 'Button_sideMenuItems',
        handleEvents,
        action: {
          typeEvent: 'GO_SCREEN',
          data: {},
        },
        isDisplaying: true,
      },
    },
    {
      navLinkProps: { to: { pathname: '/t' } },
      buttonYrlProps: {
        icon: 'MdOutlineTag',
        captureRight: DICTIONARY.All_tags[language],
        classAdded: 'Button_sideMenuItems',
        handleEvents,
        action: {
          typeEvent: 'GO_SCREEN',
          data: {},
        },
        isDisplaying: true,
      },
    },
    {
      navLinkProps: { to: { pathname: '/my-documents' } },
      buttonYrlProps: {
        icon: 'MdAssignmentTurnedIn',
        captureRight: DICTIONARY.My_documents[language],
        classAdded: 'Button_sideMenuItems',
        handleEvents,
        action: {
          typeEvent: 'GO_SCREEN',
          data: {},
        },
        isDisplaying: !!sub,
      },
    },
    {
      navLinkProps: { to: { pathname: '/my-modules' } },
      buttonYrlProps: {
        icon: 'MdCastForEducation',
        captureRight: DICTIONARY.My_courses[language],
        classAdded: 'Button_sideMenuItems',
        handleEvents,
        action: {
          typeEvent: 'GO_SCREEN',
          data: {},
        },
        isDisplaying: !!sub && isCourseCreateSectionFlag(),
      },
    },
    {
      navLinkProps: undefined,
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
      navLinkProps: { to: { pathname: '/profiles' } },
      buttonYrlProps: {
        icon: 'MdPerson',
        captureRight: DICTIONARY.My_profile[language],
        classAdded: 'Button_sideMenuItems',
        handleEvents,
        action: {
          typeEvent: 'GO_SCREEN',
          data: {},
        },
        isDisplaying: false, // TODO, component Profiles.tsx !!sub,
      },
    },
    {
      navLinkProps: undefined,
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
      navLinkProps: undefined,
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
      navLinkProps: undefined,
      buttonYrlProps: {
        icon: 'MdContactMail',
        captureRight: DICTIONARY.Contacts[language],
        classAdded: 'Button_sideMenuItems',
        handleEvents,
        action: { typeEvent: 'DEV_STAGE' },
        isDisplaying: false, // TODO, true,
      },
    },
  ]

  return sideNavigationItemsProps
}
