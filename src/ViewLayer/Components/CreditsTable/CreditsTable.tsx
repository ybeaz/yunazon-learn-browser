import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { withPropsYrl, ButtonYrl } from '../../ComponentsLibrary/'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { DocumentType } from '../../../@types/'
import { getClasses, getDateString, getSlug } from '../../../Shared/'
import { PaginationNavigation } from '../../Components/PaginationNavigation/PaginationNavigation'
import { PaginationNameEnumType } from '../../../Interfaces'
import {
  CreditsTableItemPropsOutType,
  CreditsTableComponentPropsType,
  CreditsTablePropsType,
  CreditsTablePropsOutType,
  CreditsTableComponentType,
  CreditsTableType,
} from './CreditsTableTypes'

/**
 * @description Component to render CreditsTable
 * @import import { CreditsTable, CreditsTablePropsType, CreditsTablePropsOutType, CreditsTableType } 
             from '../Components/CreditsTable/CreditsTable'
 */
const CreditsTableComponent: CreditsTableComponentType = (
  props: CreditsTableComponentPropsType
) => {
  const { classAdded, handleEvents, documents, pageDocuments, language } = props

  const navigate = useNavigate()

  const getCreditsTable = (documentsIn: DocumentType[]) => {
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

      const propsOutItem: CreditsTableItemPropsOutType = {
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
          target: '_blank',
          children: 'Link',
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
        <div key={documentID} className='_row _row_credits'>
          <div className='_cell _date'>{dateString}</div>
          <div className='_cell _module_name'>
            <NavLink {...propsOutItem.linkToModuleProps} />
          </div>
          <div className='_cell _document_link'>
            <NavLink {...propsOutItem.linkToDocumentProps} />
          </div>
          <div className='_cell _remove'>
            <ButtonYrl {...propsOutItem.buttonDeactivateDocumentProps} />
          </div>
        </div>
      )
    })

    return (
      <section className={getClasses('_creditsTable', classAdded)}>
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

  const propsOut: CreditsTablePropsOutType = {
    paginationNavigationProps: {
      paginationName: PaginationNameEnumType['pageDocuments'],
    },
  }

  return (
    <div className={getClasses('CreditsTable', classAdded)}>
      {getCreditsTable(documents)}
      {!(pageDocuments.first === 0 && pageDocuments.offset > documents.length) && (
        <div className='_paginationNavigationWrapper'>
          <PaginationNavigation {...propsOut.paginationNavigationProps} />
        </div>
      )}
    </div>
  )
}

export const CreditsTable: CreditsTableType = withPropsYrl({ handleEvents: handleEventsIn })(
  React.memo(CreditsTableComponent)
)

export type {
  CreditsTablePropsType,
  CreditsTablePropsOutType,
  CreditsTableComponentType,
  CreditsTableType,
}
