import { SelectLanguagePropsType } from '../../Components/SelectLanguage'
import { ModalFrames } from '../../Frames/ModalFrames/ModalFrames'
import { AvatarPlusInfoPropsType } from '../../Components/AvatarPlusInfo/AvatarPlusInfo'

export type HeaderFramePropsType = {
  brandName: string
  moto: string
  logoPath: string
  contentComponentName: string
  courseCapture?: string
  documentID?: string
  courseID?: string
  contentID?: string
  isButtonSideMenu: boolean
  isLogoGroup: boolean
  isButtonAddCourse: boolean
  isButtonAuthUser: boolean
  isSelectLanguage: boolean
  isButtonThemeToggle: boolean
  isSeachGroup: boolean
  isButtonBack: boolean
  isPageActionsGroup: boolean
  isButtonsShare: boolean
  isInstallMobileAppGroup: boolean
  children?: React.ReactElement
}

export type HeaderFramePropsOutType = {
  selectLanguageProps: SelectLanguagePropsType
  buttonLeftSideNavigationMenuProps: any
  buttonBackProps: any
  buttonAddCourseProps: any
  buttonAuthUserProps: any
  buttonThemeToggleProps: any
  pageActionsProps: any
  logoGroupProps: any
  avatarPlusInfoProps: AvatarPlusInfoPropsType
}

/**
 * @import import { HeaderFrameType } from './HeaderFrameType'
 */
export interface HeaderFrameComponentType
  extends React.FunctionComponent<HeaderFramePropsType> {
  (props: HeaderFramePropsType): React.ReactElement
}

export type HeaderFrameType = React.FunctionComponent<HeaderFramePropsType>
