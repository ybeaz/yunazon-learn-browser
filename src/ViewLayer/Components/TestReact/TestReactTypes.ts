import React from 'react'

export type TestReactComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  hrefOption?: string
  getHrefClub?: (articleID: string) => string
}

export type TestReactPropsType = Omit<TestReactComponentPropsType, 'storeStateSlice'>

export type TestReactPropsOutType = Record<string, any>

/**
 * @import import { TestReactComponentPropsType, TestReactPropsType, TestReactPropsOutType, TestReactComponentType, TestReactType } from './TestReactTypes'
 */
export interface TestReactComponentType
  extends React.FunctionComponent<TestReactComponentPropsType> {
  (props: TestReactComponentPropsType): React.ReactElement
}

export type TestReactType = React.FunctionComponent<TestReactPropsType>
