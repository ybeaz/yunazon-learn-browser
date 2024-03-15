import React from 'react'

import { ProfileType } from '../../../src/types/GraphqlTypes.d'
import { OrganizationType } from '../../../src/contentMock/organizationsMock'
import { ThumbnailsStructuredPropsType } from '../ThumbnailsStructured/ThumbnailsStructured'

export type MetaContentServerComponentPropsType = {
  creator?: ProfileType
  organization?: OrganizationType
}

export type MetaContentServerPropsType = MetaContentServerComponentPropsType

export type MetaContentServerPropsOutType = {
  thumbnailsStructuredProps: ThumbnailsStructuredPropsType
}

/**
 * @import import { MetaContentServerComponentPropsType, MetaContentServerPropsType, MetaContentServerPropsOutType, MetaContentServerComponentType, MetaContentServerType } from './MetaContentServerTypes'
 */
export interface MetaContentServerComponentType
  extends React.FunctionComponent<MetaContentServerComponentPropsType> {
  (props: MetaContentServerComponentPropsType): React.ReactElement
}

export type MetaContentServerType = React.FunctionComponent<MetaContentServerPropsType>
