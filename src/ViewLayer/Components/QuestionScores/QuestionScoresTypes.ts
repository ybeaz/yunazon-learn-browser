import { InputYrlPropsType } from '../../ComponentsLibrary/'

export type QuestionScoresPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  stopVideoHandler: any
}

export type QuestionScoresPropsOutType = {
  inputFirstNameProps: InputYrlPropsType
  inputMiddleNameProps: InputYrlPropsType
  inputLastNameProps: InputYrlPropsType
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
