import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { FormInputNamesPropsType } from '../FormInputNames/FormInputNames'
import { ButtonYrlPropsType } from 'yourails_common'
import { CourseType, ModuleType, MetaCourseType } from 'yourails_common'
import { ResultType } from 'yourails_common'
import { HandleEventType } from 'yourails_common'

export type GetScenarioDictPropsType = {
  result: ResultType
  language: RootStoreType['language']
  capture: string
  right: number
  total: number
  nameFirst: RootStoreType['forms']['user']['nameFirst']
  nameMiddle: RootStoreType['forms']['user']['nameMiddle']
  nameLast: RootStoreType['forms']['user']['nameLast']
  meta?: MetaCourseType | {}
  description: string
  moduleID: ModuleType['moduleID']
  contentID: ModuleType['contentID']
  creatorID: ModuleType['creatorID']
  sub: RootStoreType['authAwsCognitoUserData']['sub']
  navigate: any
  handleEvents: HandleEventType
}

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
  }
  handleEvents: HandleEventType
}

export type QuestionScoresPropsType = Omit<
  QuestionScoresComponentPropsType,
  'storeStateSlice' | 'handleEvents'
>

export type QuestionScoresPropsOutType = {
  formInputNamesProps: FormInputNamesPropsType
  buttonForwardProps: ButtonYrlPropsType
}

/**
 * @import import { QuestionScoresType } from './QuestionScoresType'
 */
export interface QuestionScoresComponentType
  extends React.FunctionComponent<QuestionScoresComponentPropsType> {
  (props: QuestionScoresComponentPropsType): React.ReactElement
}

export type QuestionScoresType = React.FunctionComponent<QuestionScoresPropsType>
