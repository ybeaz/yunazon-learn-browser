import { InputYrlPropsType } from '../../ComponentsLibrary/'
import { FormInputNamesPropsType } from '../FormInputNames/FormInputNames'

export type QuestionScoresPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  stopVideoHandler: any
}

export type QuestionScoresPropsOutType = {
  formInputNamesProps: FormInputNamesPropsType
}

/**
 * @import import { QuestionScoresType } from './QuestionScoresType'
 */
export interface QuestionScoresComponentType
  extends React.FunctionComponent<QuestionScoresPropsType> {
  (props: QuestionScoresPropsType): React.ReactElement
}

export type QuestionScoresType =
  React.FunctionComponent<QuestionScoresPropsType>
