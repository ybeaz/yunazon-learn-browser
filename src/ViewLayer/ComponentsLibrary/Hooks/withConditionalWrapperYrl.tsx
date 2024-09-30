import React, { ReactNode, ComponentType, FunctionComponent } from 'react'

type WrapperPropsType = {
  children: ReactNode
  [key: string]: any
}

type ConditionFunctionType<P> = (props: P) => boolean

interface WithConditionalWrapperYrlType {
  <P extends object>(
    condition: ConditionFunctionType<P>,
    Wrapper: ComponentType<WrapperPropsType>
  ): (Component: ComponentType<P>) => FunctionComponent<P>
}

/**
 * @description Function decorator for React Functional Component
 *    to provide a conditional wrapper in a declarative way writing
 * @import import { withConditionalWrapperYrl } from './YrlNativeViewLibrary'
 */

const withConditionalWrapperYrl: WithConditionalWrapperYrlType =
  <P extends object>(
    condition: ConditionFunctionType<P>,
    Wrapper: ComponentType<WrapperPropsType>
  ) =>
  (Component: ComponentType<P>) => {
    const WithConditionalWrapper = (props: P) =>
      condition(props) ? (
        <Wrapper {...props}>
          <Component {...props} />
        </Wrapper>
      ) : (
        <Component {...props} />
      )

    WithConditionalWrapper.displayName = `WithConditionalWrapper(${Component.displayName || Component.name || 'Component'})`

    return WithConditionalWrapper
  }

export {
  ConditionFunctionType,
  WrapperPropsType,
  WithConditionalWrapperYrlType,
  withConditionalWrapperYrl,
}
