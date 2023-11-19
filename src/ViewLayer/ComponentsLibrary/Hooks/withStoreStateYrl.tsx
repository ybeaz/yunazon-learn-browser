import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'

export type WithStoreStateYrlPropsType = FunctionComponent<any>

export interface WithStoreStateYrlType {
  (Component: WithStoreStateYrlPropsType): FunctionComponent
}

/**
 * @description Function decorator for React Functional Component
 *    to provide a component with state in a declarative way writing
 *    concise, reusable, and declarative code
 *    In a declarative approach, you would typically define what a component should do based on its props and state.
 *    In contrast, an imperative approach involves directly instructing the component to perform a specific action or behavior.
 * @import import { withStoreStateYrl } from './YrlNativeViewLibrary'
 */

export const mediaParamsDefault: any = {}

export const withStoreStateYrl: WithStoreStateYrlType = function (Component) {
  return function WrappedComponent(props: any) {
    const store = useSelector((store2: any) => store2)
    return <Component {...props} store={store} />
  }
}
