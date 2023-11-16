import React from 'react'

import {
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
  props: TemplateReactPropsType
) => {
  const {} = props

  const propsOut: TemplateReactPropsOutType = {}

  return <div className='TemplateReact'>TemplateReact</div>
}

export const TemplateReact: TemplateReactType = React.memo(
  TemplateReactComponent
)

export type {
  TemplateReactPropsType,
  TemplateReactPropsOutType,
  TemplateReactComponentType,
  TemplateReactType,
}
