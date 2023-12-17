import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { FormInputNamesPropsType } from '../FormInputNames/FormInputNames'

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
  }
}

export type QuestionScoresPropsType = Omit<
  QuestionScoresComponentPropsType,
  'storeStateSlice'
>

export type QuestionScoresPropsOutType = {
  formInputNamesProps: FormInputNamesPropsType
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
