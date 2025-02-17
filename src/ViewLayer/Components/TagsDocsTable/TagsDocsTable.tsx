import React from 'react'

import { withPropsYrl, IconYrl } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { TagType } from 'yourails_common'
import { getClasses } from 'yourails_common'
import { PaginationNavigation } from '../../Components/PaginationNavigation/PaginationNavigation'
import { getExpertiseInfo, GetExpertiseInfoResType } from 'yourails_common'
import { PaginationNameEnumType } from 'yourails_common'
import { NavLinkWithQuery } from '../../Components/NavLinkWithQuery/NavLinkWithQuery'
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

      const {
        level,
        name: levelName,
        iconName,
      }: GetExpertiseInfoResType = getExpertiseInfo({ completed })

      const valueEscaped = value.replace(/#/g, '%23')

      const pathnameDocument = `/q/${tagID}/${valueEscaped}`

      const propsOutItem: TagsDocsTableItemPropsOutType = {
        linkToAcademyMatrixTaggedProps: {
          className: '__shield',
          to: {
            pathname: `/`,
            search: {
              tagsPick: value,
              pageTags: 1,
              pageModules: 1,
            },

            // `tagsPick=${valueEscaped}&pageTags=1&pageModules=1`,
          },
          children: value,
        },
        iconTagMdCheckProps: {
          classAdded: 'Button_tagMdCheck',
          icon: 'MdCheck',
          isDisplaying: true,
        },
        iconTagExpertiseProps: {
          classAdded: 'Button_tagExpertise',
          icon: iconName,
          isDisplaying: true,
        },
        linkToDocumentProps: {
          className: '__shield',
          to: { pathname: pathnameDocument },
          target: '_blank',
          children: 'Link',
        },
      }

      return (
        <div key={tagID} className='_row _row_tagsCloud'>
          <div className='_cell _name'>
            <NavLinkWithQuery {...propsOutItem.linkToAcademyMatrixTaggedProps} />
          </div>
          <div className='_cell _completedTotal'>
            <span className='_span'>{completed}</span>/<span className='_span'>{count}</span>
          </div>
          <div className='_cell _level'>
            <>
              <span className='_span'>
                <IconYrl {...propsOutItem.iconTagExpertiseProps} />
              </span>
              <span className='_span'>{level}</span>
              <span className='_span'>{levelName}</span>
              {completed >= count && (
                <span className='_span'>
                  <IconYrl {...propsOutItem.iconTagMdCheckProps} />
                </span>
              )}
            </>
          </div>
          <div className='_cell _document_link'>
            <NavLinkWithQuery {...propsOutItem.linkToDocumentProps} />
          </div>
        </div>
      )
    })

    return (
      <section className={getClasses('_tagsCloudTable', classAdded)}>
        <header className='_row _row_header'>
          <div className='_cell _header_name'>Name</div>
          <div className='_cell _header_completedTotal'>Completed / Total</div>
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
