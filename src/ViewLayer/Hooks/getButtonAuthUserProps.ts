import { DICTIONARY } from '../../Constants/dictionary.const'
import { IUser } from '../../Interfaces/IRootStore'
import { ButtonArgs } from '../Components/Button'

interface IGetButtonAuthUser {
  (user2: IUser, language: string, componentFrom: string): ButtonArgs
}

/**
 * @description Function returning properties for the Button component
 */

export const getButtonAuthUserProps: IGetButtonAuthUser = (
  user,
  language,
  componentFrom
) => {
  const { userStatus, userName } = user

  const {
    icon,
    classAdded,
    tooltipText,
    captureRight,
    tooltipPosition,
    typeEvent,
    childProps,
  } = {
    'sideMenu+': {
      icon: 'BiLogInCircle',
      classAdded: 'Button_sideMenuItems',
      tooltipText: '',
      captureRight: DICTIONARY.Login[language],
      tooltipPosition: 'right',
      typeEvent: 'CLICK_SIDE_NAV_ITEM',
      childProps: { scenario: { branch: 'signInManually', step: '' } },
    },
    'sideMenu+failure': {
      icon: 'BiLogInCircle',
      classAdded: 'Button_sideMenuItems',
      tooltipText: '',
      captureRight: DICTIONARY.Login[language],
      tooltipPosition: 'right',
      typeEvent: 'CLICK_SIDE_NAV_ITEM',
      childProps: { scenario: { branch: 'signInManually', step: '' } },
    },
    'sideMenu+success': {
      icon: 'BiLogOutCircle',
      classAdded: 'Button_sideMenuItems',
      tooltipText: userName,
      captureRight: DICTIONARY.Logout[language],
      tooltipPosition: 'right',
      typeEvent: 'CLICK_SIDE_NAV_ITEM',
      childProps: { scenario: { branch: 'signOut', step: '' } },
    },
    'header+': {
      icon: 'BiLogInCircle',
      classAdded: 'Button_personalCabinet',
      tooltipText: DICTIONARY.Login[language],
      tooltipPosition: 'bottom',
      typeEvent: 'SET_MODAL_FRAMES',
      childProps: { scenario: { branch: 'signInManually', step: '' } },
    },
    'header+failure': {
      icon: 'BiLogInCircle',
      classAdded: 'Button_personalCabinet',
      tooltipText: DICTIONARY.Logout[language],
      tooltipPosition: 'bottom',
      typeEvent: 'SET_MODAL_FRAMES',
      childProps: { scenario: { branch: 'signInManually', step: '' } },
    },
    'header+success': {
      icon: 'MdPerson',
      classAdded: 'Button_personalCabinet Button_personalCabinet_authorized',
      tooltipText: userName,
      tooltipPosition: 'bottom',
      typeEvent: 'SET_MODAL_FRAMES',
      childProps: { scenario: { branch: 'signOut', step: '' } },
    },
  }[`${componentFrom}+${userStatus}`]

  return {
    icon,
    captureRight,
    classAdded,
    tooltipText,
    isTooltipVisibleForced: false,
    tooltipPosition,
    action: {
      typeEvent,
      data: [
        {
          childName: 'AuthUser',
          isActive: true,
          childProps,
        },
      ],
    },
  }
}
