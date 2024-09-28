import React, { ReactNode, ComponentType, FunctionComponent } from 'react'

type WrapperPropsType = {
  children: ReactNode
  [key: string]: any
}

type ConditionFunctionType<P> = (props: P) => boolean

interface WithIsNoSeoIndexingYrlYrlType {
  <P extends object>(
    condition: ConditionFunctionType<P>,
    Wrapper: ComponentType<WrapperPropsType>
  ): (Component: ComponentType<P>) => FunctionComponent<P>
}

/**
 * @description Function decorator for React Functional Component
 *    to provide a conditional wrapper in a declarative way writing
 * @import import { withIsNoSeoIndexingYrlYrl } from './YrlNativeViewLibrary'
 */

const withIsNoSeoIndexingYrlYrl: WithIsNoSeoIndexingYrlYrlType =
  <P extends object>(
    condition: ConditionFunctionType<P>,
    Wrapper: ComponentType<WrapperPropsType>
  ) =>
  (Component: ComponentType<P>) => {
    const WithIsNoSeoIndexingYrl = (props: P) =>
      condition(props) ? (
        <Wrapper {...props}>
          <Component {...props} />
        </Wrapper>
      ) : (
        <Component {...props} />
      )

    WithIsNoSeoIndexingYrl.displayName = `WithIsNoSeoIndexingYrl(${Component.displayName || Component.name || 'Component'})`

    return WithIsNoSeoIndexingYrl
  }

export {
  ConditionFunctionType,
  WrapperPropsType,
  WithIsNoSeoIndexingYrlYrlType,
  withIsNoSeoIndexingYrlYrl,
}
