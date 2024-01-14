import React from 'react'
import { Link } from 'react-router-dom'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import {
  withPropsYrl,
  withStoreStateSelectedYrl,
  ButtonYrl,
} from '../../ComponentsLibrary/'
import { getClasses, getDateString } from '../../../Shared/'
import {
  DocumentsTablePropsOutType,
  MyDocumentsBodyComponentPropsType,
  MyDocumentsBodyPropsType,
  MyDocumentsBodyPropsOutType,
  MyDocumentsBodyComponentType,
  MyDocumentsBodyType,
} from './MyDocumentsBodyTypes'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { PaginationNameEnumType } from '../../../Interfaces'
import { DocumentType } from '../../../@types/'
import { PaginationNavigation } from '../../Components/PaginationNavigation/PaginationNavigation'

/**
 * @description Component to render MyDocumentsBody
 * @import import { MyDocumentsBody, MyDocumentsBodyPropsType, MyDocumentsBodyPropsOutType, MyDocumentsBodyType } 
             from '../Components/MyDocumentsBody/MyDocumentsBody'
 */
const MyDocumentsBodyComponent: MyDocumentsBodyComponentType = (
  props: MyDocumentsBodyComponentPropsType
) => {
  const { classAdded, handleEvents, documents, language } = props

  const getDocumentsTable = (documentsIn: DocumentType[]) => {
    const documentsRows: React.ReactElement[] = documentsIn.map(
      (document: DocumentType) => {
        const { documentID, moduleIDs, capture, dateCreated, pathName } =
          document

        const dateString = getDateString({
          timestamp: dateCreated,
          style: 'US',
        })

        const propsOut: DocumentsTablePropsOutType = {
          linkToModuleProps: {
            className: '__shield',
            to: { pathname: `/m/${moduleIDs[0]}/` },
            children: capture,
            onClick: (event: any) => {
              // handleEvents(event, {
              //   typeEvent: 'SELECT_COURSE_MODULE',
              //   data: {  },
              // })
            },
          },
          linkToDocumentProps: {
            className: '__shield',
            to: { pathname: `/d/${documentID}/` },
            children: 'Link',
            onClick: (event: any) => {
              // handleEvents(event, {
              //   typeEvent: '',
              //   data: {  },
              // })
            },
            target: 'blank',
          },
          buttonDeactivateDocumentProps: {
            icon: 'MdDeleteOutline',
            classAdded: 'Button_DeactivateDocument',
            action: {
              typeEvent: 'CLICK_ON_DEACTIVATE_DOCUMENT',
              data: { documentsIDs: [documentID] },
            },
          },
        }

        return (
          <div key={documentID} className='_row _row_weather'>
            <div className='_cell _date'>{dateString}</div>
            <div className='_cell _module_name'>
              <Link {...propsOut.linkToModuleProps} />
            </div>
            <div className='_cell _document_link'>
              <Link {...propsOut.linkToDocumentProps} />
            </div>
            <div className='_cell _remove'>
              <ButtonYrl {...propsOut.buttonDeactivateDocumentProps} />
            </div>
          </div>
        )
      }
    )

    return (
      <section className={getClasses('_documentsTable', classAdded)}>
        <header className='_row _row_header'>
          <div className='_cell _header_date'>Date</div>
          <div className='_cell _header_module_name'>Module name</div>
          <div className='_cell _header_document_link'>Document</div>
          <div className='_cell _header_remove'>Remove</div>
        </header>

        {documentsRows}
      </section>
    )
  }

  const propsOut = {
    paginationNavigationProps: {
      paginationName: PaginationNameEnumType['pageDocuments'],
    },
  }

  return (
    <div className={getClasses('MyDocumentsBody', classAdded)}>
      <h2 className='_screenTitle'>
        {DICTIONARY.Certificates_Credits_and_diplomas[language]}
      </h2>
      {getDocumentsTable(documents)}

      <div className='_paginationNavigationWrapper'>
        <PaginationNavigation {...propsOut.paginationNavigationProps} />
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = []
export const MyDocumentsBody = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(
    storeStateSliceProps,
    React.memo(MyDocumentsBodyComponent)
  )
)

export type {
  MyDocumentsBodyPropsType,
  MyDocumentsBodyPropsOutType,
  MyDocumentsBodyComponentType,
  MyDocumentsBodyType,
}
