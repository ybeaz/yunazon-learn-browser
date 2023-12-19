import React from 'react'

import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import {
  DocumentsBodyComponentPropsType,
  DocumentsBodyPropsType,
  DocumentsBodyPropsOutType,
  DocumentsBodyComponentType,
  DocumentsBodyType,
} from './DocumentsBodyTypes'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'

/**
 * @description Component to render DocumentsBody
 * @import import { DocumentsBody, DocumentsBodyPropsType, DocumentsBodyPropsOutType, DocumentsBodyType } 
             from '../Components/DocumentsBody/DocumentsBody'
 */
const DocumentsBodyComponent: DocumentsBodyComponentType = (
  props: DocumentsBodyComponentPropsType
) => {
  const { classAdded, handleEvents } = props

  const propsOut: DocumentsBodyPropsOutType = {}

  return (
    <div className={getClasses('DocumentsBody', classAdded)}>DocumentsBody</div>
  )
}

const storeStateSliceProps: string[] = []
export const DocumentsBody = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(
    storeStateSliceProps,
    React.memo(DocumentsBodyComponent)
  )
)

export type {
  DocumentsBodyPropsType,
  DocumentsBodyPropsOutType,
  DocumentsBodyComponentType,
  DocumentsBodyType,
}
