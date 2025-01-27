import { DICTIONARY } from 'yourails_common'
import { UserType } from 'yourails_common'
import { ButtonYrlPropsType } from 'yourails_common'

interface IGetButtonAuthUser {
  (
    user2: UserType,
    language: string,
    componentFrom: string,
    history?: any
  ): Omit<ButtonYrlPropsType, 'handleEvents'>
}

/**
 * @description Function returning properties for the ButtonYrl component
 */

export const getButtonAuthUserProps: IGetButtonAuthUser = (
  user,
  language,
  componentFrom,
  navigate = {}
) => {
  // @ts-expect-error
  const { userAvatar, userStatus, userName } = user

  enum ButtonDictKeyType {
    'sideMenu+' = 'sideMenu+',
    'sideMenu+failure' = 'sideMenu+failure',
    'sideMenu+success' = 'sideMenu+success',
    'header+' = 'header+',
    'header+failure' = 'header+failure',
    'header+success' = 'header+success',
  }

  // @ts-expect-error
  const buttonDictKey: ButtonDictKeyType = `${componentFrom}+${userStatus || ''}`

  const buttonsDict: Record<string, any> = {
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
      imageAlt: 'user avatar',
      icon: userAvatar ? null : 'FaUserCircle',
      classAdded: userAvatar ? 'Button_authSideMenu' : 'Button_authSideMenu_authorized',
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
      imageAlt: 'user avatar',
      icon: userAvatar ? null : 'FaUserCircle',
      classAdded: userAvatar ? 'Button_authHeader' : 'Button_authHeader_authorized',
      tooltipText: userName,
      tooltipPosition: 'bottom',
      typeEvent: 'SET_MODAL_FRAMES',
      childProps: { scenario: { branch: 'signOut', step: '' } },
    },
  }[buttonDictKey]

  const {
    imageSrc = null,
    imageAlt = null,
    icon = null,
    classAdded,
    tooltipText,
    captureRight,
    tooltipPosition,
    typeEvent,
    childProps,
  } = buttonsDict

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
    data: { navigate, pathname: '/profile' },
  }

  const action = `${componentFrom}+${userStatus}` === 'header+success' ? actionProfile : actionMain

  return {
    imageSrc,
    imageAlt,
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
