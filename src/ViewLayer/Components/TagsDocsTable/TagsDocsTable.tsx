import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { withPropsYrl, ButtonYrl } from '../../ComponentsLibrary/'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { TagType } from '../../../@types/'
import { getClasses, getDateString, getSlug } from '../../../Shared/'
import { PaginationNavigation } from '../../Components/PaginationNavigation/PaginationNavigation'
import { PaginationNameEnumType } from '../../../Interfaces'
import {
  TagsDocsTableItemPropsOutType,
  TagsDocsTableComponentPropsType,
  TagsDocsTablePropsType,
  TagsDocsTablePropsOutType,
  TagsDocsTableComponentType,
  TagsDocsTableType,
} from './TagsDocsTableTypes'

/**
 * @description Component to render TagsDocsTable
 * @import import { TagsDocsTable, TagsDocsTablePropsType, TagsDocsTablePropsOutType, TagsDocsTableType } 
             from '../Components/TagsDocsTable/TagsDocsTable'
 */
const TagsDocsTableComponent: TagsDocsTableComponentType = (
  props: TagsDocsTableComponentPropsType
) => {
  const { classAdded, handleEvents, tagsCloud, pageTags, language } = props

  const navigate = useNavigate()

  const getTagsDocsTable = (tagsCloudIn: TagType[]) => {
    const documentsRows: React.ReactElement[] = tagsCloudIn.map((tagCloud: TagType) => {
      const {
        tagID,
        isActive,
        dateCreated,
        dateUpdated,
        dateDeactivated,
        value,
        count,
        completed,
        moduleIDs,
      } = tagCloud

      // const dateString = getDateString({
      //   timestamp: dateCreated,
      //   style: 'US',
      // })

      // const pathnameModule = `/m/${moduleID}/${getSlug(capture)}`
      // const pathnameDocument = `/d/${documentID}`

      const propsOutItem: TagsDocsTableItemPropsOutType = {
        // linkToModuleProps: {
        //   className: '__shield',
        //   to: { pathname: pathnameModule },
        //   children: capture,
        //   onClick: (event: any) => {
        //     handleEvents(event, {
        //       typeEvent: 'GO_LINK_PATH',
        //       data: { navigate, pathname: pathnameModule },
        //     })
        //   },
        // },
        // linkToDocumentProps: {
        //   className: '__shield',
        //   to: { pathname: pathnameDocument },
        //   children: 'Link',
        //   onClick: (event: any) => {
        //     handleEvents(event, {
        //       typeEvent: 'GO_LINK_PATH',
        //       data: { navigate, pathname: pathnameDocument },
        //     })
        //   },
        // },
        // buttonDeactivateDocumentProps: {
        //   icon: 'MdDeleteOutline',
        //   classAdded: 'Button_DeactivateModule',
        //   action: {
        //     typeEvent: 'SET_MODAL_FRAMES',
        //     data: [
        //       {
        //         childName: 'ConfirmationYesNoBodyYrl',
        //         isActive: true,
        //         childProps: {
        //           message: [
        //             `${DICTIONARY['Do_you_confirm_removing'][language]} ${DICTIONARY['document'][language]} No ${documentID}`,
        //             `${capture}?`,
        //           ],
        //           captureButton4Yes: DICTIONARY['confirm'][language],
        //           captureButton4No: DICTIONARY['cancel'][language],
        //           action4Yes: {
        //             typeEvent: 'CLICK_ON_DEACTIVATE_DOCUMENT',
        //             data: { documentsIDs: [documentID] },
        //           },
        //           action4No: {
        //             typeEvent: 'SET_MODAL_FRAMES',
        //             data: {
        //               childName: 'ConfirmationYesNoBodyYrl',
        //               isActive: false,
        //             },
        //           },
        //           buttonRight: 'NoCancel',
        //         },
        //       },
        //     ],
        //   },
        // },
      }

      return (
        <div key={tagID} className='_row _row_tagsCloud'>
          <div className='_cell _name'>{value}</div>
          <div className='_cell _completed'>{completed}</div>
          <div className='_cell _level'>Advanced</div>
          <div className='_cell _document_link'>
            doc_link
            {/* <NavLink {...propsOut.linkToDocumentProps} /> */}
          </div>
          {/* <div className='_cell _module_name'>
            <NavLink {...propsOut.linkToModuleProps} />
          </div>
          <div className='_cell _document_link'>
            <NavLink {...propsOut.linkToDocumentProps} />
          </div>
          <div className='_cell _remove'>
            <ButtonYrl {...propsOut.buttonDeactivateDocumentProps} />
          </div> */}
        </div>
      )
    })

    return (
      <section className={getClasses('_tagsCloudTable', classAdded)}>
        <header className='_row _row_header'>
          <div className='_cell _header_name'>Name</div>
          <div className='_cell _header_completed'>Completed</div>
          <div className='_cell _header_level'>Level</div>
          <div className='_cell _header_document_link'>Document</div>
        </header>

        {documentsRows}
      </section>
    )
  }

  const propsOut: TagsDocsTablePropsOutType = {
    paginationNavigationProps: {
      paginationName: PaginationNameEnumType['pageTags'],
    },
  }

  return (
    <div className={getClasses('TagsDocsTable', classAdded)}>
      {getTagsDocsTable(tagsCloud)}
      {!(pageTags.first === 0 && pageTags.offset > tagsCloud.length) && (
        <div className='_paginationNavigationWrapper'>
          <PaginationNavigation {...propsOut.paginationNavigationProps} />
        </div>
      )}
    </div>
  )
}

export const TagsDocsTable: TagsDocsTableType = withPropsYrl({ handleEvents: handleEventsIn })(
  React.memo(TagsDocsTableComponent)
)

export type {
  TagsDocsTablePropsType,
  TagsDocsTablePropsOutType,
  TagsDocsTableComponentType,
  TagsDocsTableType,
}
