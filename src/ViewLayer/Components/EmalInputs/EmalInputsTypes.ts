import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { InputYrlPropsType, ButtonYrlPropsType } from 'yourails_common'
import { HandleEventType } from 'yourails_common'

export type EmalInputsComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  documentID: string
  storeStateSlice: {
    documents: RootStoreType['documents']
    sendTo: RootStoreType['forms']['sendTo']
    sendCc: RootStoreType['forms']['sendCc']
  }
  handleEvents: HandleEventType
}

export type EmalInputsPropsType = Omit<EmalInputsComponentPropsType, 'storeStateSlice'>

export type EmalInputsPropsOutType = {
  inputEmailToProps: InputYrlPropsType
  inputEmailCcProps: InputYrlPropsType
  buttonForwardProps: ButtonYrlPropsType
}

/**
 * @import import { EmalInputsType } from './EmalInputsType'
 */
export interface EmalInputsComponentType
  extends React.FunctionComponent<EmalInputsComponentPropsType> {
  (props: EmalInputsComponentPropsType): React.ReactElement
}

export type EmalInputsType = React.FunctionComponent<EmalInputsPropsType>
