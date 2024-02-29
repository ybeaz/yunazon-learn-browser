import React from 'react'

import { getFullName } from '../../../Shared/getFullName'
import { ThumbnailsStructured } from '../ThumbnailsStructured/ThumbnailsStructured'

import {
  MetaContentServerComponentPropsType,
  MetaContentServerPropsType,
  MetaContentServerPropsOutType,
  MetaContentServerComponentType,
  MetaContentServerType,
} from './MetaContentServerTypes'

const propsDefault: Partial<MetaContentServerComponentPropsType | any> = {
  creator: {
    affiliation: '',
    jobTitle: '',
    nameFirst: '',
    nameMiddle: '',
    nameLast: '',
  },
  organization: {
    name: '',
    brand: '',
    description: '',
    language: '',
    email: '',
    url: '',
    thumbnails: {},
  },
}

/**
 * @description Component to render MetaContentServer
 * @import import { MetaContentServer, MetaContentServerPropsType, MetaContentServerPropsOutType, MetaContentServerType } 
             from '../Components/MetaContentServer/MetaContentServer'
 */
const MetaContentServerComponent: MetaContentServerComponentType = (
  props: MetaContentServerComponentPropsType
) => {
  const {
    creator: {
      profileID,
      affiliation,
      jobTitle,
      nameFirst: nameFirstCreator,
      nameMiddle: nameMiddleCreator,
      nameLast: nameLastCreator,
    },
    organization: {
      organizationID,
      name: nameOrg,
      brand: brandOrg,
      description: descriptionOrg,
      tags: tagsOrg,
      language: languageOrg,
      email: emailOrg,
      url: urlOrg,
      thumbnails: thumbnailsOrg = {},
    },
  } = { ...propsDefault, ...props }

  const nameFull = getFullName({
    nameFirst: nameFirstCreator,
    nameLast: nameMiddleCreator,
    nameMiddle: nameLastCreator,
  })

  const propsOut = {
    thumbnailsStructuredProps: {
      thumbnails: thumbnailsOrg,
      nameEntity: nameOrg,
      itemPropName: 'logo',
    },
  }

  return (
    <div>
      {nameFull ? (
        <div itemScope itemType='https://schema.org/Person' itemProp='author'>
          <br />
          <div>
            <span>Creator: </span>
            <span itemProp='name'>{nameFull}</span>
          </div>
          {profileID ? (
            <meta itemProp='identifier' content={profileID} />
          ) : null}
          {jobTitle ? (
            <div>
              <span>Job title: </span>
              <span itemProp='jobTitle'>{jobTitle}</span>
            </div>
          ) : null}
          {affiliation ? (
            <div>
              <span>Affiliation: </span>
              <span itemProp='affiliation'>{affiliation}</span>
            </div>
          ) : null}
        </div>
      ) : null}
      {nameOrg ? (
        <div
          itemScope
          itemType='https://schema.org/Organization'
          itemProp='publisher'
        >
          <br />
          {nameOrg ? (
            <div>
              <span>Publisher: </span>
              <span itemProp='name'>{nameOrg}</span>
            </div>
          ) : null}
          {organizationID ? (
            <meta itemProp='identifier' content={organizationID} />
          ) : null}
          {brandOrg ? (
            <div>
              <span>Brand: </span>
              <span itemProp='brand'>{brandOrg}</span>
            </div>
          ) : null}
          {emailOrg ? (
            <div>
              <span>Email: </span>
              <span itemProp='email'>{emailOrg}</span>
            </div>
          ) : null}
          {descriptionOrg ? (
            <div>
              <span>Description: </span>
              <span itemProp='description'>{descriptionOrg}</span>
            </div>
          ) : null}
          {descriptionOrg ? (
            <div>
              <span>Tags: </span>
              <span itemProp='keywords'>{tagsOrg.join(', ')}</span>
            </div>
          ) : null}
          {urlOrg ? (
            <div>
              <span>Links: </span>
              <a itemProp='url' href={urlOrg} target={'_blank'}>
                link to {nameOrg}
              </a>
            </div>
          ) : null}
          {thumbnailsOrg && Object.keys(thumbnailsOrg).length ? (
            <div>
              <div>Logos:</div>
              <ThumbnailsStructured {...propsOut.thumbnailsStructuredProps} />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export const MetaContentServer = React.memo(MetaContentServerComponent)

export type {
  MetaContentServerPropsType,
  MetaContentServerPropsOutType,
  MetaContentServerComponentType,
  MetaContentServerType,
}
