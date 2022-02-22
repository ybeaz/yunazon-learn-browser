import { DICTIONARY } from '../../Constants/dictionary.const'
import { IUser } from '../../Interfaces/IRootStore'
import { ButtonArgs } from '../Components/Button'

interface IGetButtonAuthUser {
  (user2: IUser, language: string, component: string): ButtonArgs
}

/**
 * @description Function returning properties for the Button component
 */

export const getButtonAuthUserProps: IGetButtonAuthUser = (
  user,
  language,
  component
) => {
  const { userStatus, userName } = user

  const { classAdded, tooltipText, captureRight, tooltipPosition } = {
    'sideMenu+': {
      classAdded: 'Button_sideMenuItems',
      tooltipText: '',
      captureRight: DICTIONARY.Login[language],
      tooltipPosition: 'right',
    },
    'sideMenu+failure': {
      classAdded: 'Button_sideMenuItems',
      tooltipText: '',
      captureRight: DICTIONARY.Login[language],
      tooltipPosition: 'right',
    },
    'sideMenu+success': {
      classAdded: 'Button_sideMenuItems Button_personalCabinet_authorized',
      tooltipText: userName,
      captureRight: DICTIONARY.Logout[language],
      tooltipPosition: 'right',
    },
    'header+': {
      classAdded: 'Button_personalCabinet',
      tooltipText: DICTIONARY.Login[language],
      tooltipPosition: 'bottom',
    },
    'header+failure': {
      classAdded: 'Button_personalCabinet',
      tooltipText: DICTIONARY.Logout[language],
      tooltipPosition: 'bottom',
    },
    'header+success': {
      classAdded: 'Button_personalCabinet Button_personalCabinet_authorized',
      tooltipText: userName,
      tooltipPosition: 'bottom',
    },
  }[`${component}+${userStatus}`]

  const childProps =
    userStatus === 'success'
      ? { scenario: { branch: 'signOut', step: '' } }
      : { scenario: { branch: 'signInManually', step: '' } }

  return {
    icon: 'MdPerson',
    captureRight,
    classAdded,
    tooltipText,
    isTooltipVisibleForced: false,
    tooltipPosition,
    action: {
      typeEvent: 'CLICK_SIDE_NAV_ITEM',
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
