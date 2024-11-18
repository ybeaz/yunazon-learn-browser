import React, { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'

import { getClasses } from 'yourails_common'
import {
  TestReactComponentPropsType,
  TestReactPropsType,
  TestReactPropsOutType,
  TestReactComponentType,
  TestReactType,
} from './TestReactTypes'

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

export const withPropsYrl: WithPropsYrlType = (extraProps: WithPropsYrlPropsType = {}) =>
  function (Component: FunctionComponent<any>) {
    return function WrappedComponent(props: any) {
      const propsNext = { ...props, ...extraProps }
      return <Component {...propsNext} />
    }
  }

/**
 * @description Component to render TestReact
 * @import import { TestReact, TestReactPropsType, TestReactPropsOutType, TestReactType } 
             from '../Components/TestReact/TestReact'
 */
const TestReactComponent: TestReactComponentType = (props: TestReactComponentPropsType) => {
  const { classAdded, getHrefClub, hrefOption = 'walmart' } = props
  const params = useParams()
  const articleID = params?.articleID || ''

  const HREF_DICT: Record<string, string> = {
    walmart: `/a/${articleID}`,
    samsclub: `/b/${articleID}`,
  }

  const getHrefStore = (articleID: string): string => `/a/${articleID}`

  const getHref = (getHrefClub || getHrefStore)(articleID)

  console.info('TestReact [23]', {
    articleID,
    getHref,
    'HREF_DICT[hrefOption]': HREF_DICT[hrefOption],
    params,
  })
  return (
    <div className={getClasses('TestReact', classAdded)}>
      <a href={getHref}>TestReact</a>
    </div>
  )
}

// @ts-ignore
export const TestReact: TestReactType = withPropsYrl({
  hrefOption: 'samsclub',
  getHrefClub: (articleID: string): string => `/b/${articleID}`,
})(TestReactComponent)

export type { TestReactPropsType, TestReactPropsOutType, TestReactComponentType, TestReactType }

/*
const TestReactComponent: TestReactComponentType = (props: TestReactComponentPropsType) => {
  const { classAdded, hrefOption = 'walmart' } = props
  const params = useParams()
  const articleID = params?.articleID

  const HREF_DICT: Record<string, string> = {
    walmart: `/a/${articleID}`,
    samsclub: `/b/${articleID}`,
  }

  console.info('TestReact [23]', {
    articleID,
    'HREF_DICT[hrefOption]': HREF_DICT[hrefOption],
    params,
  })
  return (
    <div className={getClasses('TestReact', classAdded)}>
      <a href={HREF_DICT[hrefOption]}>TestReact</a>
    </div>
  )
}
*/
