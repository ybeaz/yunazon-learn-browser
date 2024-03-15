import React, { FunctionComponent } from 'react'
import { selectStoreSlice } from '../../ComponentsLibrary/'

export type WithStoreStateSelectedYrlPropsType = FunctionComponent<any>

export interface WithStoreStateSelectedYrlType {
  (
    arrProps: string[],
    Component: WithStoreStateSelectedYrlPropsType
  ): FunctionComponent
}

/**
 * @description Function decorator for React Functional Component
 *    to provide a component with state in a declarative way writing
 *    concise, reusable, and declarative code
 *    In a declarative approach, you would typically define what a component should do based on its props and state.
 *    In contrast, an imperative approach involves directly instructing the component to perform a specific action or behavior.
 * @import import { withStoreStateSelectedYrl } from './YrlNativeViewLibrary'
 */

export const mediaParamsDefault: any = {}

export const withStoreStateSelectedYrl: WithStoreStateSelectedYrlType =
  function (arrProps, Component) {
    return function WrappedComponent(props: any) {
      const storeStateSlice = selectStoreSlice(arrProps)
      return <Component {...props} storeStateSlice={storeStateSlice} />
    }
  }
