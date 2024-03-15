import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type LoaderOverlayYrlComponentPropsType = {
  classMain?: 'LoaderOverlayYrl' | 'LoaderOverlay2Yrl' | 'LoaderOverlay3Yrl'
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
