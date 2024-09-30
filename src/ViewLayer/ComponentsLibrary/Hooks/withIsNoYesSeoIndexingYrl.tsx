import React, { ComponentType, FunctionComponent } from 'react'

import { withConditionalWrapperYrl } from './withConditionalWrapperYrl'
import { NoSeoIndexingYrl } from '../NoSeoIndexingYrl/NoSeoIndexingYrl'

type WithIsNoSeoIndexingYrlPropsType = { isNoSeoIndexing?: boolean }

interface WithIsNoSeoIndexingYrlType {
  <P extends WithIsNoSeoIndexingYrlPropsType>(Component: ComponentType<P>): FunctionComponent<P>
}

/**
 * @description Function decorator for React Functional Component
 *    to provide a conditional wrapper in a declarative way writing
 * @import import { withIsNoSeoIndexingYrlYrl } from './YrlNativeViewLibrary'
 */

const withIsNoYesSeoIndexingYrl: WithIsNoSeoIndexingYrlType = <
  P extends WithIsNoSeoIndexingYrlPropsType,
>(
  Component: ComponentType<P>
) =>
  withConditionalWrapperYrl(
    (props: P) => props.isNoSeoIndexing || false,
    ({ children }) => <NoSeoIndexingYrl>{children}</NoSeoIndexingYrl>
  )(Component)

export { withIsNoYesSeoIndexingYrl, WithIsNoSeoIndexingYrlType, WithIsNoSeoIndexingYrlPropsType }
