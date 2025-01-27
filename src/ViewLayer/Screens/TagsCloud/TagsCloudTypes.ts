import React from 'react'
import { HandleEventType } from 'yourails_common'
import { RootStoreType } from '../../../Interfaces/RootStoreType'
import { HeaderFramePropsType } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFramePropsType } from '../../Frames/MainFrame/MainFrame'
import { TagsCloudBodyPropsType } from '../../Components/TagsCloudBody/TagsCloudBody'

export type TagsCloudComponentPropsType = {
  classAdded?: string | string[] | Record<string, string | string[]>
  storeStateSlice: {
    language: RootStoreType['language']
  }
  handleEvents: HandleEventType
}

export type TagsCloudPropsType = Omit<TagsCloudComponentPropsType, 'storeStateSlice'>

export type TagsCloudPropsOutType = {
  headerFrameProps: HeaderFramePropsType
  mainFrameProps: MainFramePropsType
  tagsCloudBodyProps: TagsCloudBodyPropsType
}

/**
 * @import import { TagsCloudComponentPropsType, TagsCloudPropsType, TagsCloudPropsOutType, TagsCloudComponentType, TagsCloudType } from './TagsCloudTypes'
 */
export interface TagsCloudComponentType
  extends React.FunctionComponent<TagsCloudComponentPropsType> {
  (props: TagsCloudComponentPropsType): React.ReactElement
}

export type TagsCloudType = React.FunctionComponent<TagsCloudPropsType>
