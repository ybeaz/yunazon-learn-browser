import React, { ComponentType, FunctionComponent } from 'react'

import { withConditionalWrapperYrl } from './withConditionalWrapperYrl'

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
    ({ children }) => (
      <div data-nosnippet>
        <div>{`<!--googleoff: all-->`}</div>
        <noindex>{children}</noindex>
        <div>{`<!--googleon: all-->`}</div>
      </div>
    )
  )(Component)

export { withIsNoYesSeoIndexingYrl, WithIsNoSeoIndexingYrlType, WithIsNoSeoIndexingYrlPropsType }
