import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { FormInputNamesPropsType } from '../FormInputNames/FormInputNames'
import { ButtonYrlPropsType } from '../../ComponentsLibrary/'
import {
  CourseType,
  ModuleType,
  MetaCourseType,
} from '../../../@types/GraphqlTypes'
import { ResultType } from '../../../Shared/getAnswersChecked2'
import { HandleEventType } from '../../../Interfaces/HandleEventType'

export type GetScenarioDictPropsType = {
  result: ResultType
  language: RootStoreType['language']
  courseCapture: string
  right: number
  total: number
  nameFirst: RootStoreType['forms']['user']['nameFirst']
  nameMiddle: RootStoreType['forms']['user']['nameMiddle']
  nameLast: RootStoreType['forms']['user']['nameLast']
  meta?: MetaCourseType | {}
  description: string
  courseID: CourseType['courseID']
  moduleID: ModuleType['moduleID']
  contentID: ModuleType['contentID']
  sub: RootStoreType['authAwsCognitoUserData']['sub']
  navigate: any
}

export type QuestionScoresComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  stopVideoHandler: any
  storeStateSlice: {
    language: RootStoreType['language']
    documents: RootStoreType['documents']
    moduleIDActive: RootStoreType['scorm']['moduleIDActive']
    courses: RootStoreType['courses']
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

export type QuestionScoresType =
  React.FunctionComponent<QuestionScoresPropsType>
