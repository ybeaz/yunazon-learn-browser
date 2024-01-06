import React from 'react'

export type TemplateReactComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: any
}

export type TemplateReactPropsType = Omit<
  TemplateReactComponentPropsType,
  'storeStateSlice'
>

export type TemplateReactPropsOutType = Record<string, any>

/**
 * @import import { TemplateReactComponentPropsType, TemplateReactPropsType, TemplateReactPropsOutType, TemplateReactComponentType, TemplateReactType } from './TemplateReactTypes'
 */
export interface TemplateReactComponentType
  extends React.FunctionComponent<TemplateReactComponentPropsType> {
  (props: TemplateReactComponentPropsType): React.ReactElement
}

export type TemplateReactType = React.FunctionComponent<TemplateReactPropsType>
