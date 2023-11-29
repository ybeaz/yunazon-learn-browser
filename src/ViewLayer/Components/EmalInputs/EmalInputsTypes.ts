import { InputYrlPropsType, ButtonYrlPropsType } from '../../ComponentsLibrary/'

export type EmalInputsPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  documentID: string
}

export type EmalInputsPropsOutType = {
  inputEmailToProps: InputYrlPropsType
  inputEmailCcProps: InputYrlPropsType
  buttonForwardProps: ButtonYrlPropsType
}

/**
 * @import import { EmalInputsType } from './EmalInputsType'
 */
export interface EmalInputsComponentType
  extends React.FunctionComponent<EmalInputsPropsType> {
  (props: EmalInputsPropsType): React.ReactElement
}

export type EmalInputsType = React.FunctionComponent<EmalInputsPropsType>
