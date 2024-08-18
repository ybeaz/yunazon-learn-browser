import { SelectLanguagePropsType } from '../../Components/SelectLanguage'
import { AvatarPlusInfoPropsType } from '../../Components/AvatarPlusInfo/AvatarPlusInfo'
import { AbInCirclePropsType } from '../../Components/AbInCircle/AbInCircle'
import { ButtonYrlPropsType, InputGroupYrlPropsType } from '../../ComponentsLibrary/'
import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type HeaderFrameComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  brandName: string
  moto: string
  logoPath: string
  contentComponentName: string
  moduleCapture?: string
  documentID?: string
  moduleID?: string
  contentID?: string
  tagID?: string
  isButtonSideMenuLeft: boolean
  isLogoGroup: boolean
  isButtonAddCourse: boolean
  isButtonAuthUser: boolean
  isSelectLanguage: boolean
  isButtonThemeToggle: boolean
  isSeachGroup: boolean
  isButtonBack: boolean
  isPageActionsGroup: boolean
  isButtonsShare: boolean
  children?: React.ReactElement
  storeStateSlice: {
    authAwsCognitoUserData: RootStoreType['authAwsCognitoUserData']
    isSideNavLeftVisible: RootStoreType['componentsState']['isSideNavLeftVisible']
    isMobileSearchInput: RootStoreType['componentsState']['isMobileSearchInput']
    language: RootStoreType['language']
    profiles: RootStoreType['profiles']
    screenActive: RootStoreType['componentsState']['screenActive']
  }
}

export type HeaderFramePropsType = Omit<HeaderFrameComponentPropsType, 'storeStateSlice'>

export type HeaderFramePropsOutType = {
  selectLanguageProps: SelectLanguagePropsType
  buttonLeftSideNavigationMenuProps: ButtonYrlPropsType
  buttonLeftSideNavigationAvatarProps: ButtonYrlPropsType
  buttonLeftSideNavigationUnAuthorizedProps: ButtonYrlPropsType
  buttonBackProps: ButtonYrlPropsType
  buttonAddCourseProps: ButtonYrlPropsType
  buttonThemeToggleProps: ButtonYrlPropsType
  pageActionsProps: any
  logoGroupProps: any
  avatarPlusInfoProps: AvatarPlusInfoPropsType
  abInCircleProps: AbInCirclePropsType
  inputGroupProps: InputGroupYrlPropsType
  buttonMobileSearchToggleProps: ButtonYrlPropsType
}

/**
 * @import import { HeaderFrameType } from './HeaderFrameType'
 */
export interface HeaderFrameComponentType
  extends React.FunctionComponent<HeaderFrameComponentPropsType> {
  (props: HeaderFrameComponentPropsType): React.ReactElement
}

export type HeaderFrameType = React.FunctionComponent<HeaderFramePropsType>
