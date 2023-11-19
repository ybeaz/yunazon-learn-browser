import { DICTIONARY } from '../../Constants/dictionary.const'
import { UserType } from '../../Interfaces/UserType'
import { IButtonArgs } from '../ComponentsLibrary/ButtonYrl/ButtonYrl'

interface IGetButtonAuthUser {
  (
    user2: UserType,
    language: string,
    componentFrom: string,
    history?: any
  ): IButtonArgs
}

/**
 * @description Function returning properties for the ButtonYrl component
 */

export const getButtonAuthUserProps: IGetButtonAuthUser = (
  user,
  language,
  componentFrom,
  history = {}
) => {
  const { userAvatar, userStatus, userName } = user

  const {
    imageSrc = null,
    icon = null,
    classAdded,
    tooltipText,
    captureRight,
    tooltipPosition,
    typeEvent,
    childProps,
  } = {
    'sideMenu+': {
      icon: 'FaUserCircle',
      classAdded: 'Button_authSideMenu',
      tooltipText: '',
      captureRight: DICTIONARY.Login[language],
      tooltipPosition: 'right',
      typeEvent: 'CLICK_SIDE_NAV_ITEM',
      childProps: { scenario: { branch: 'signInManually', step: '' } },
    },
    'sideMenu+failure': {
      icon: 'FaUserCircle',
      classAdded: 'Button_authSideMenu',
      tooltipText: '',
      captureRight: DICTIONARY.Login[language],
      tooltipPosition: 'right',
      typeEvent: 'CLICK_SIDE_NAV_ITEM',
      childProps: { scenario: { branch: 'signInManually', step: '' } },
    },
    'sideMenu+success': {
      imageSrc: userAvatar,
      icon: userAvatar ? null : 'FaUserCircle',
      classAdded: userAvatar
        ? 'Button_authSideMenu'
        : 'Button_authSideMenu_authorized',
      tooltipText: userName,
      captureRight: DICTIONARY.Logout[language],
      tooltipPosition: 'right',
      typeEvent: 'CLICK_SIDE_NAV_ITEM',
      childProps: { scenario: { branch: 'signOut', step: '' } },
    },
    'header+': {
      icon: 'FaUserCircle',
      classAdded: 'Button_authHeader',
      tooltipText: DICTIONARY.Login[language],
      tooltipPosition: 'bottom',
      typeEvent: 'SET_MODAL_FRAMES',
      childProps: { scenario: { branch: 'signInManually', step: '' } },
    },
    'header+failure': {
      icon: 'FaUserCircle',
      classAdded: 'Button_authHeader',
      tooltipText: DICTIONARY.Logout[language],
      tooltipPosition: 'bottom',
      typeEvent: 'SET_MODAL_FRAMES',
      childProps: { scenario: { branch: 'signInManually', step: '' } },
    },
    'header+success': {
      imageSrc: userAvatar,
      icon: userAvatar ? null : 'FaUserCircle',
      classAdded: userAvatar
        ? 'Button_authHeader'
        : 'Button_authHeader_authorized',
      tooltipText: userName,
      tooltipPosition: 'bottom',
      typeEvent: 'SET_MODAL_FRAMES',
      childProps: { scenario: { branch: 'signOut', step: '' } },
    },
  }[`${componentFrom}+${userStatus}`]

  const actionMain = {
    typeEvent,
    data: [
      {
        childName: 'AuthUser',
        isActive: true,
        childProps,
      },
    ],
  }

  const actionProfile = {
    typeEvent: 'GO_SCREEN',
    data: { history, path: '/profile' },
  }

  const action =
    `${componentFrom}+${userStatus}` === 'header+success'
      ? actionProfile
      : actionMain

  return {
    imageSrc,
    icon,
    captureRight,
    classAdded,
    tooltipText,
    isTooltipVisibleForced: false,
    tooltipPosition,
    action,
    isDisplaying: true,
  }
}
