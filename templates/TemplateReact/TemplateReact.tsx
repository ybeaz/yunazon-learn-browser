import React from 'react'

// @ts-expect-error
import { withPropsYrl } from '../../ComponentsLibrary'
// @ts-expect-error
import { getClasses } from '../../../Shared/getClasses'

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
  const { classAdded } = props

  const propsOut: TemplateReactPropsOutType = {}

  return (
    <div className={getClasses('TemplateReact', classAdded)}>TemplateReact</div>
  )
}

export const TemplateReact = withPropsYrl({})(
  React.memo(TemplateReactComponent)
)

export type {
  TemplateReactPropsType,
  TemplateReactPropsOutType,
  TemplateReactComponentType,
  TemplateReactType,
}
