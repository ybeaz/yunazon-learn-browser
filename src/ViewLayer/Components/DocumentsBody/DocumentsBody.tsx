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
  const { classAdded, handleEvents, documents } = props

  const propsOut: DocumentsBodyPropsOutType = {
    buttonDeactivateDocumentProps: {
      icon: 'MdDeleteOutline',
      classAdded: 'Button_DeactivateDocument',
      action: { typeEvent: 'CLICK_ON_DEACTIVATE_DOCUMENT' },
    },
  }

  console.info('DocumentsBody [35]', { documents })

  return (
    <div className={getClasses('DocumentsBody', classAdded)}>
      <section className={getClasses('CitiesWeatherList', classAdded)}>
        <header className='_row _row_header'>
          <div className='_cell _header_date'>Date</div>
          <div className='_cell _header_module_name'>Module name</div>
          <div className='_cell _header_module_link'>Module</div>
          <div className='_cell _header_document_link'>Document</div>
          <div className='_cell _header_remove'>Remove</div>
        </header>

        <div key={'key'} className='_row _row_weather'>
          <div className='_cell _date'>{'date'}</div>
          <div className='_cell _module_name'>{'module_name'}</div>
          <div className='_cell _module_link'>Link</div>
          <div className='_cell _document_link'>Link</div>
          <div className='_cell _remove'>Busket</div>
        </div>
      </section>
    </div>
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
