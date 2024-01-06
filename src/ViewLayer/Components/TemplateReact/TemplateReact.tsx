import React from 'react'

// @ts-expect-error
import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'
// @ts-expect-error
import { getClasses } from '../../../Shared/getClasses'
import {
  TemplateReactComponentPropsType,
  TemplateReactPropsType,
  TemplateReactPropsOutType,
  TemplateReactComponentType,
  TemplateReactType,
} from './TemplateReactTypes'

/**
 * @description Component to render TemplateReact
 * @import import { TemplateReact, TemplateReactPropsType, TemplateReactPropsOutType, TemplateReactType } 
             from '../Components/TemplateReact/TemplateReact'
 */
const TemplateReactComponent: TemplateReactComponentType = (
  props: TemplateReactComponentPropsType
) => {
  const { classAdded, storeStateSlice } = props

  const propsOut: TemplateReactPropsOutType = {}

  return (
    <div className={getClasses('TemplateReact', classAdded)}>TemplateReact</div>
  )
}

const storeStateSliceProps: string[] = []
export const TemplateReact: TemplateReactType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(TemplateReactComponent)
)

export type {
  TemplateReactPropsType,
  TemplateReactPropsOutType,
  TemplateReactComponentType,
  TemplateReactType,
}
