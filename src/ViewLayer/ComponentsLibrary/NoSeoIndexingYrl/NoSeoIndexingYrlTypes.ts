import { RootStoreType } from '../../../Interfaces/RootStoreType'

export type NoSeoIndexingYrlComponentPropsType = {
  classMain?: 'NoSeoIndexingYrl' | 'LoaderOverlay2Yrl' | 'LoaderOverlay3Yrl'
  storeStateSlice: {
    isLoaderOverlayVisible: RootStoreType['componentsState']['isLoaderOverlayVisible']
  }
}

export type NoSeoIndexingYrlPropsType = Omit<NoSeoIndexingYrlComponentPropsType, 'storeStateSlice'>

export type NoSeoIndexingYrlPropsOutType = Record<string, any>

/**
 * @import import { NoSeoIndexingYrlType } from './NoSeoIndexingYrlType'
 */
export interface NoSeoIndexingYrlComponentType
  extends React.FunctionComponent<NoSeoIndexingYrlComponentPropsType> {
  (props: NoSeoIndexingYrlComponentPropsType): React.ReactElement
}

export type NoSeoIndexingYrlType = React.FunctionComponent<NoSeoIndexingYrlPropsType>
