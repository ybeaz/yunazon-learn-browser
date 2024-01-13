import { SelectLanguagePropsType } from '../../Components/SelectLanguage'
import { AvatarPlusInfoPropsType } from '../../Components/AvatarPlusInfo/AvatarPlusInfo'
import { AbInCirclePropsType } from '../../Components/AbInCircle/AbInCircle'
import {
  ButtonYrlPropsType,
  InputGroupYrlPropsType,
} from '../../ComponentsLibrary/'

export type HeaderFrameComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  brandName: string
  moto: string
  logoPath: string
  contentComponentName: string
  courseCapture?: string
  documentID?: string
  courseID?: string
  contentID?: string
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
    preferred_username: any
    isSideNavLeftVisible: any
    user: any
    language: any
  }
}

export type HeaderFramePropsType = Omit<
  HeaderFrameComponentPropsType,
  'storeStateSlice'
>

export type HeaderFramePropsOutType = {
  selectLanguageProps: SelectLanguagePropsType
  buttonLeftSideNavigationMenuProps: ButtonYrlPropsType
  buttonLeftSideNavigationAvatarProps: ButtonYrlPropsType
  buttonLeftSideNavigationUnAuthorizedProps: ButtonYrlPropsType
  buttonBackProps: ButtonYrlPropsType
  buttonAddCourseProps: ButtonYrlPropsType
  buttonAuthUserProps: ButtonYrlPropsType
  buttonThemeToggleProps: ButtonYrlPropsType
  pageActionsProps: any
  logoGroupProps: any
  avatarPlusInfoProps: AvatarPlusInfoPropsType
  abInCircleProps: AbInCirclePropsType
  inputGroupProps: InputGroupYrlPropsType
}

/**
 * @import import { HeaderFrameType } from './HeaderFrameType'
 */
export interface HeaderFrameComponentType
  extends React.FunctionComponent<HeaderFrameComponentPropsType> {
  (props: HeaderFrameComponentPropsType): React.ReactElement
}

export type HeaderFrameType = React.FunctionComponent<HeaderFramePropsType>
