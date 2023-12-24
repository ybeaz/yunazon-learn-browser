import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { FormInputNamesPropsType } from '../FormInputNames/FormInputNames'
import { ButtonYrlPropsType } from '../../ComponentsLibrary/'
import {
  CourseType,
  ModuleType,
  MetaCourseType,
} from '../../../@types/GraphqlTypes'
import { ResultType } from '../../../Shared/getAnswersChecked2'

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
}

export type QuestionScoresComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  stopVideoHandler: any
  storeStateSlice: {
    language: RootStoreType['language']
    documents: RootStoreType['documents']
    moduleIDActive: RootStoreType['scorm']['moduleIDActive']
    courses: RootStoreType['courses']
    isDocumentAdded: RootStoreType['componentsState']['isDocumentAdded']
    nameFirst: RootStoreType['forms']['user']['nameFirst']
    nameMiddle: RootStoreType['forms']['user']['nameMiddle']
    nameLast: RootStoreType['forms']['user']['nameLast']
    sub: RootStoreType['authAwsCognitoUserData']['sub']
  }
}

export type QuestionScoresPropsType = Omit<
  QuestionScoresComponentPropsType,
  'storeStateSlice'
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
