import { FormsType } from '../../../Interfaces/RootStoreType'

export type InputYrlComponentPropsType = {
  tagName?: string // input tag, may be 'input' or 'textarea'
  classAdded: string // class to add to customize the standard input class
  key?: string // key for the element
  type?: string // type of html tag, for example, <input type='text' >
  placeholder: string // placeholder text
  typeEvent: string // typeEvent to trigger the proper action
  storeFormGroup?: string // sub property in store.form to keep data
  storeFormProp?: string // name of the property in store.form that stores data
  accept?: string // accepted files' format for type='file', for example, 'image/png, image/jpeg, image/jpg'
  storeStateSlice: { forms: FormsType }
}

export type InputYrlPropsType = Omit<
  InputYrlComponentPropsType,
  'storeStateSlice'
>

export type InputYrlPropsOutType = Record<string, any>

/**
 * @import import { InputYrlType } from './InputYrlType'
 */
export interface InputYrlComponentType
  extends React.FunctionComponent<InputYrlComponentPropsType> {
  (props: InputYrlComponentPropsType): React.ReactElement
}

export type InputYrlType = React.FunctionComponent<InputYrlPropsType>
