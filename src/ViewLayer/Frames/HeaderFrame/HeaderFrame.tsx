import React from 'react'
import { useNavigate } from 'react-router-dom'

import { SideNavigation } from '../../Components/SideNavigation/SideNavigation'
import { SCREENS_DICT } from 'yourails_common'
import { PageActionsGroup } from '../../Components/PageActionsGroup/PageActionsGroup'
import { ShareButtons } from '../../Components/ShareButtons'
import { getArrayItemByProp } from 'yourails_common'
import { LANGUAGES_APP } from 'yourails_common'
import { DICTIONARY } from 'yourails_common'
import { getClasses } from 'yourails_common'
import { SelectLanguage } from '../../Components/SelectLanguage'
import { ModalFrames } from '../../Frames/ModalFrames/ModalFrames'
import { AvatarPlusInfo } from '../../Components/AvatarPlusInfo/AvatarPlusInfo'
import { AbInCircle } from '../../Components/AbInCircle/AbInCircle'
import { YOURAILS_ORGANIZATION } from 'yourails_common'
import { SERVERS_MAIN } from 'yourails_common'
import { getTagLine } from 'yourails_common'
import { ScreensEnumType } from 'yourails_common'
import {
  withPropsYrl,
  InputGroupYrl,
  ButtonYrl,
  withStoreStateSelectedYrl,
  withConditionalWrapperYrl,
  NoSeoIndexingYrl,
} from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'

import {
  HeaderFrameComponentPropsType,
  HeaderFramePropsType,
  HeaderFramePropsOutType,
  HeaderFrameComponentType,
  HeaderFrameType,
} from './HeaderFrameTypes'

/**
 * @description Component to render HeaderFrame
 * @import import { HeaderFrame, HeaderFramePropsType, HeaderFramePropsOutType, HeaderFrameType } 
             from '../Components/HeaderFrame/HeaderFrame'
 */
const HeaderFrameComponent: HeaderFrameComponentType = (props: HeaderFrameComponentPropsType) => {
  const {
    classAdded,
    contentID = '',
    moduleCapture = '',
    moduleID = '',
    documentID = '',
    isButtonAddCourse,
    isButtonAuthUser,
    isButtonBack,
    isButtonSideMenuLeft,
    isButtonsShare,
    isButtonThemeToggle,
    isLogoGroup,
    isPageActionsGroup,
    isSeachGroup,
    isSelectLanguage,
    storeStateSlice: {
      authAwsCognitoUserData: { sub, email },
      isSideNavLeftVisible,
      isMobileSearchInput,
      language,
      profiles,
      screenActive,
    },
    handleEvents,
  } = props

  const { brand: brandName } = YOURAILS_ORGANIZATION
  const moto = getTagLine()
  const logoPath = `${SERVERS_MAIN.remote}/images/logoYouRails.png`

  const navigate = useNavigate()

  const createCourseQuiz = DICTIONARY.createCourseQuiz[language]

  const toggleTheme = DICTIONARY['Toggle site theme'][language]

  const showQrCode = DICTIONARY.Show_QR_code[language]

  const profile = getArrayItemByProp({
    arr: profiles,
    propName: 'userID',
    propValue: sub,
  })
  const nameFirst = profile?.nameFirst || (email && email[0])
  const nameLast = profile?.nameLast || (email && email[1])
  const circleTextArr = nameFirst && nameLast ? [nameFirst, nameLast] : []

  const propsOut: HeaderFramePropsOutType = {
    selectLanguageProps: {
      LANGUAGES: LANGUAGES_APP,
      language,
      mode: null,
      typeEvent: 'SELECT_LANGUAGE_APP',
      classAdded: 'SelectLanguage__AppLanguage',
      languagesSelected: [{ value: language }],
    },
    buttonLeftSideNavigationMenuProps: {
      icon: 'MdMenu',
      classAdded: 'Button_MdMenu',
      handleEvents,
      action: {
        typeEvent: 'SET_SIDE_NAVIGATION_LEFT',
      },
    },
    buttonLeftSideNavigationAvatarProps: {
      classAdded: 'Button_buttonLeftSideNavigationAvatar',
      handleEvents,
      action: {
        typeEvent: 'SET_SIDE_NAVIGATION_LEFT',
      },
    },
    buttonLeftSideNavigationUnAuthorizedProps: {
      icon: 'FaUserCircle',
      classAdded: 'Button_buttonLeftSideNavigationAvatar',
      handleEvents,
      action: {
        typeEvent: 'SET_SIDE_NAVIGATION_LEFT',
      },
    },
    buttonBackProps: {
      icon: 'MdForward',
      classAdded: 'Button_MdBackward3',
      handleEvents,
      action: {
        typeEvent: 'GO_BACK_FROM_CERTIFICATE',
        data: { history: navigate, moduleCapture },
      },
      tooltipText: DICTIONARY['backToCourse'][language],
      tooltipPosition: 'bottom',
    },
    buttonAddCourseProps: {
      icon: 'MdQueue',
      classAdded: 'Button_AddCourse',
      tooltipText: createCourseQuiz,
      tooltipPosition: 'bottom',
      handleEvents,
      action: { typeEvent: 'CREATE_COURSE', data: { contentComponentName: 'searchFormSep' } },
      isDisplaying: false /* TODO: Not used so far */,
    },
    buttonQrCodeModalToggleProps: {
      icon: 'MdQrCode2',
      classAdded: 'Button_QrCodeModalToggle',
      tooltipText: showQrCode,
      tooltipPosition: 'bottom',
      handleEvents,
      action: { typeEvent: 'SET_QR_CODE_MODAL', data: { isActive: true } },
    },
    buttonThemeToggleProps: {
      icon: 'CgDarkMode',
      classAdded: 'Button_ThemeToggle',
      tooltipText: toggleTheme,
      tooltipPosition: 'bottom',
      handleEvents,
      action: { typeEvent: 'TOGGLE_THEME' },
    },
    pageActionsProps: {
      moduleCapture,
      documentID,
      moduleID,
      contentID,
    },
    avatarPlusInfoProps: {
      classProps: { _link: '_logoGroup' },
      typeEvent: 'GO_SCREEN',
      capture: brandName,
      text: moto,
      imgSrc: logoPath,
      pathname: '/',
      isTitle:
        screenActive === ScreensEnumType.AcademyMatrix ||
        screenActive === ScreensEnumType.ModulesPresent ||
        screenActive === ScreensEnumType.TagsCloud,
    },
    abInCircleProps: {
      classAdded: '',
      text: circleTextArr,
    },
    inputGroupProps: {
      inputProps: {
        classAdded: 'Input_search',
        type: 'text',
        placeholder: SCREENS_DICT[screenActive]?.placeholder,
        handleEvents,
        typeEvent: 'ONCHANGE_INPUT_SEARCH',
        typeEventOnEnter: 'CLICK_ON_SEARCH_BUTTON',
        storeFormProp: SCREENS_DICT[screenActive]?.storeFormProp,
      },
      buttonSubmitProps: {
        icon: 'MdSearch',
        classAdded: 'Button_MdSearch',
        handleEvents,
        action: { typeEvent: 'CLICK_ON_SEARCH_BUTTON' },
      },
    },
    buttonMobileSearchToggleProps: {
      icon: 'MdSearch',
      classAdded: 'Button_MobileSearchToggle',
      handleEvents,
      action: {
        typeEvent: 'TOGGLE_IS_MOBILE_SEARCH_INPUT',
        data: { isMobileSearchInput: !isMobileSearchInput },
      },
    },
  }

  let SideMenuLeft = null

  if (isSideNavLeftVisible) {
    SideMenuLeft = <ButtonYrl {...propsOut.buttonLeftSideNavigationMenuProps} />
  } else if (isButtonAuthUser && sub) {
    SideMenuLeft = (
      <ButtonYrl {...propsOut.buttonLeftSideNavigationAvatarProps}>
        <AbInCircle {...propsOut.abInCircleProps} />
      </ButtonYrl>
    )
  } else if (isButtonAuthUser && !sub)
    SideMenuLeft = <ButtonYrl {...propsOut.buttonLeftSideNavigationUnAuthorizedProps} />

  return (
    <div className={getClasses('HeaderFrame', classAdded)}>
      <div className='_content'>
        <div className='__left'>
          {isButtonSideMenuLeft && SideMenuLeft}
          {isLogoGroup && <AvatarPlusInfo {...propsOut.avatarPlusInfoProps} />}
          {isPageActionsGroup && <PageActionsGroup {...propsOut.pageActionsProps} />}
          {isButtonsShare && <ShareButtons />}

          <div className='_itemButtonMobileToggle'>
            {!isMobileSearchInput && isSeachGroup && (
              <ButtonYrl {...propsOut.buttonMobileSearchToggleProps} />
            )}
            <ButtonYrl {...propsOut.buttonQrCodeModalToggleProps} />
          </div>
        </div>
        <div className='__main'>
          {isSeachGroup && (
            <div className='_itemInputGroupYrl'>
              <InputGroupYrl {...propsOut.inputGroupProps} />
            </div>
          )}
        </div>
        <div className='__right'>
          {isButtonAddCourse && (
            <div className='_itemButtonAddCourse'>
              <ButtonYrl {...propsOut.buttonAddCourseProps} />
            </div>
          )}
          <div className='_itemButtonQrCodeModalToggle'>
            <ButtonYrl {...propsOut.buttonQrCodeModalToggleProps} />
          </div>
          {isSelectLanguage && (
            <div className='_itemLanguageSelect'>
              <SelectLanguage {...propsOut.selectLanguageProps} />
            </div>
          )}
          {isButtonThemeToggle && (
            <div className='_itemButtonThemeToggle'>
              <ButtonYrl {...propsOut.buttonThemeToggleProps} />
            </div>
          )}
        </div>
        {isMobileSearchInput && isSeachGroup ? (
          <div className='__rightMobile'>
            <InputGroupYrl {...propsOut.inputGroupProps} />
          </div>
        ) : null}
      </div>
      <SideNavigation />
      <ModalFrames />
    </div>
  )
}

const storeStateSliceProps: string[] = [
  'authAwsCognitoUserData',
  'isSideNavLeftVisible',
  'isMobileSearchInput',
  'language',
  'profiles',
  'screenActive',
]

export const HeaderFrame: HeaderFrameType = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(
    storeStateSliceProps,
    withConditionalWrapperYrl(
      (props: any) =>
        props?.storeStateSlice?.screenActive !== ScreensEnumType.AcademyMatrix &&
        props?.isNoSeoIndexing === undefined
          ? true
          : !!props.isNoSeoIndexing,
      NoSeoIndexingYrl
    )(React.memo(HeaderFrameComponent))
  )
)

export type {
  HeaderFramePropsType,
  HeaderFramePropsOutType,
  HeaderFrameComponentType,
  HeaderFrameType,
}
