import { RootStoreType } from '../../../Interfaces/RootStoreType'
import {
  FormInputNamesWithButtonsPropsType,
  FormInputNamesWithButtonsType,
} from '../FormInputNamesWithButtons/FormInputNamesWithButtons'

import { FormInputNamesPropsType } from '../FormInputNames/FormInputNames'
import { ButtonYrlPropsType } from 'yourails_common'
import { HandleEventType } from 'yourails_common'
import { NavLinkWithQueryPropsType } from '../../Components/NavLinkWithQuery/NavLinkWithQuery'
import { from } from '@apollo/client'

export type QuestionScoresComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  stopVideoHandler: any
  storeStateSlice: {
    language: RootStoreType['language']
    moduleIDActive: RootStoreType['scorm']['moduleIDActive']
    modules: RootStoreType['modules']
    nameFirst: RootStoreType['forms']['user']['nameFirst']
    nameMiddle: RootStoreType['forms']['user']['nameMiddle']
    nameLast: RootStoreType['forms']['user']['nameLast']
    sub: RootStoreType['authAwsCognitoUserData']['sub']
    profiles: RootStoreType['profiles']
    isEditNameVisible: RootStoreType['componentsState']['isEditNameVisible']
  }
  handleEvents: HandleEventType
}

export type QuestionScoresPropsType = Omit<
  QuestionScoresComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type QuestionScoresPropsOutType = {
  message: { greeting: string; line1: string; line2: string; line3: string }
  navLinkNextTaskProps: NavLinkWithQueryPropsType
  navLinkCreditProps: NavLinkWithQueryPropsType
  navLinkAchievementsProps: NavLinkWithQueryPropsType
  navLinkAllMissionsProps: NavLinkWithQueryPropsType
  buttonNextTaskProps: ButtonYrlPropsType
  buttonCreditProps: ButtonYrlPropsType
  buttonIsEditNameVisibleProps: ButtonYrlPropsType
  buttonAchievementsProps: ButtonYrlPropsType
  buttonAllMissionsProps: ButtonYrlPropsType
  formInputNamesProps: FormInputNamesPropsType
  formInputNamesWithButtonsProps: FormInputNamesWithButtonsPropsType
}

/**
 * @import import { QuestionScoresType } from './QuestionScoresType'
 */
export interface QuestionScoresComponentType
  extends React.FunctionComponent<QuestionScoresComponentPropsType> {
  (props: QuestionScoresComponentPropsType): React.ReactElement
}

export type QuestionScoresType = React.FunctionComponent<QuestionScoresPropsType>
