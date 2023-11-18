import React, { FunctionComponent, ReactNode } from 'react'

export type WithPropsYrlPropsType = Record<string, any>

export interface WithPropsM1YrlType {
  (Component: FunctionComponent<any>): FunctionComponent<any>
}

export interface WithPropsYrlType {
  (extraProps: WithPropsYrlPropsType): WithPropsM1YrlType
}

/**
 * @description Function decorator for React Functional Component
 *    to add arbitrary extra props to the component in a declarative style through props
 * @import import { withPropsYrl } from './YrlNativeViewLibrary'
 */

export const withPropsYrl: WithPropsYrlType = (
  extraProps: WithPropsYrlPropsType
) =>
  function (Component: FunctionComponent<any>) {
    console.info('withPropsYrl [23]', { extraProps })

    return function WrappedComponent(props: any) {
      const propsNext = { ...props, ...extraProps }
      return <Component {...propsNext} />
    }
  }
