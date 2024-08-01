import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Collapse } from 'antd'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { withPropsYrl, withStoreStateSelectedYrl, ButtonYrl } from '../../ComponentsLibrary/'
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
import { getSlug } from '../../../Shared/getSlug'

/**
 * @description Component to render MyDocumentsBody
 * @import import { MyDocumentsBody, MyDocumentsBodyPropsType, MyDocumentsBodyPropsOutType, MyDocumentsBodyType } 
             from '../Components/MyDocumentsBody/MyDocumentsBody'
 */
const MyDocumentsBodyComponent: MyDocumentsBodyComponentType = (
  props: MyDocumentsBodyComponentPropsType
) => {
  const {
    classAdded,
    handleEvents,
    documents,
    language,
    storeStateSlice: { pageDocuments },
  } = props

  const navigate = useNavigate()

  const getDocumentsTable = (documentsIn: DocumentType[]) => {
    const documentsRows: React.ReactElement[] = documentsIn.map((document: DocumentType) => {
      const {
        documentID,
        module: { moduleID, capture },
        dateCreated,
      } = document

      const dateString = getDateString({
        timestamp: dateCreated,
        style: 'US',
      })

      const pathnameModule = `/m/${moduleID}/${getSlug(capture)}`
      const pathnameDocument = `/d/${documentID}`

      const propsOut: DocumentsTablePropsOutType = {
        linkToModuleProps: {
          className: '__shield',
          to: { pathname: pathnameModule },
          children: capture,
          onClick: (event: any) => {
            handleEvents(event, {
              typeEvent: 'GO_LINK_PATH',
              data: { navigate, pathname: pathnameModule },
            })
          },
        },
        linkToDocumentProps: {
          className: '__shield',
          to: { pathname: pathnameDocument },
          children: 'Link',
          onClick: (event: any) => {
            handleEvents(event, {
              typeEvent: 'GO_LINK_PATH',
              data: { navigate, pathname: pathnameDocument },
            })
          },
        },
        buttonDeactivateDocumentProps: {
          icon: 'MdDeleteOutline',
          classAdded: 'Button_DeactivateModule',
          action: {
            typeEvent: 'SET_MODAL_FRAMES',
            data: [
              {
                childName: 'ConfirmationYesNoBodyYrl',
                isActive: true,
                childProps: {
                  message: [
                    `${DICTIONARY['Do_you_confirm_removing'][language]} ${DICTIONARY['document'][language]} No ${documentID}`,
                    `${capture}?`,
                  ],
                  captureButton4Yes: DICTIONARY['confirm'][language],
                  captureButton4No: DICTIONARY['cancel'][language],
                  action4Yes: {
                    typeEvent: 'CLICK_ON_DEACTIVATE_DOCUMENT',
                    data: { documentsIDs: [documentID] },
                  },
                  action4No: {
                    typeEvent: 'SET_MODAL_FRAMES',
                    data: {
                      childName: 'ConfirmationYesNoBodyYrl',
                      isActive: false,
                    },
                  },
                  buttonRight: 'NoCancel',
                },
              },
            ],
          },
        },
      }

      return (
        <div key={documentID} className='_row _row_weather'>
          <div className='_cell _date'>{dateString}</div>
          <div className='_cell _module_name'>
            <NavLink {...propsOut.linkToModuleProps} />
          </div>
          <div className='_cell _document_link'>
            <NavLink {...propsOut.linkToDocumentProps} />
          </div>
          <div className='_cell _remove'>
            <ButtonYrl {...propsOut.buttonDeactivateDocumentProps} />
          </div>
        </div>
      )
    })

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
      <Collapse
        className='_credits'
        collapsible='icon'
        defaultActiveKey={['1']}
        items={[
          {
            key: '1',
            label: <h2 className='_h2'>{DICTIONARY.Certificates_and_diplomas[language]}</h2>,
            children: (
              <div>
                {getDocumentsTable(documents)}
                {!(pageDocuments.first === 0 && pageDocuments.offset > documents.length) && (
                  <div className='_paginationNavigationWrapper'>
                    <PaginationNavigation {...propsOut.paginationNavigationProps} />
                  </div>
                )}
              </div>
            ),
          },
        ]}
      />
      <Collapse
        className='_credits'
        collapsible='icon'
        defaultActiveKey={['1']}
        items={[
          {
            key: '1',
            label: <h2 className='_h2'>{DICTIONARY.Credits[language]}</h2>,
            children: (
              <div>
                {getDocumentsTable(documents)}
                {!(pageDocuments.first === 0 && pageDocuments.offset > documents.length) && (
                  <div className='_paginationNavigationWrapper'>
                    <PaginationNavigation {...propsOut.paginationNavigationProps} />
                  </div>
                )}
              </div>
            ),
          },
        ]}
      />
    </div>
  )
}

const storeStateSliceProps: string[] = ['pageDocuments']
export const MyDocumentsBody = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(storeStateSliceProps, React.memo(MyDocumentsBodyComponent))
)

export type {
  MyDocumentsBodyPropsType,
  MyDocumentsBodyPropsOutType,
  MyDocumentsBodyComponentType,
  MyDocumentsBodyType,
}
