import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type LoaderOverlayYrlComponentPropsType = {
  storeStateSlice: {
    isLoaderOverlayVisible: RootStoreType['componentsState']['isLoaderOverlayVisible']
  }
}

export type LoaderOverlayYrlPropsType = Omit<
  LoaderOverlayYrlComponentPropsType,
  'storeStateSlice'
>

export type LoaderOverlayYrlPropsOutType = Record<string, any>

/**
 * @import import { LoaderOverlayYrlType } from './LoaderOverlayYrlType'
 */
export interface LoaderOverlayYrlComponentType
  extends React.FunctionComponent<LoaderOverlayYrlComponentPropsType> {
  (props: LoaderOverlayYrlComponentPropsType): React.ReactElement
}

export type LoaderOverlayYrlType =
  React.FunctionComponent<LoaderOverlayYrlPropsType>
