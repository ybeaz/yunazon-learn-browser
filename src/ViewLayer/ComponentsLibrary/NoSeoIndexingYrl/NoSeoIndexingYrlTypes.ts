import { ReactNode } from 'react'

export type NoSeoIndexingYrlComponentPropsType = {
  children: ReactNode
}

export type NoSeoIndexingYrlPropsType = NoSeoIndexingYrlComponentPropsType

export type NoSeoIndexingYrlPropsOutType = Record<string, any>

/**
 * @import import { NoSeoIndexingYrlType } from './NoSeoIndexingYrlType'
 */
export interface NoSeoIndexingYrlComponentType
  extends React.FunctionComponent<NoSeoIndexingYrlComponentPropsType> {
  (props: NoSeoIndexingYrlComponentPropsType): React.ReactElement
}

export type NoSeoIndexingYrlType = React.FunctionComponent<NoSeoIndexingYrlPropsType>
