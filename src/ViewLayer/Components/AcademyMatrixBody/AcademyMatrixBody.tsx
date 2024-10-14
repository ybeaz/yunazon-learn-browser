import React from 'react'

import { TagsCloudBody } from '../TagsCloudBody/TagsCloudBody'
import { ModulesBody } from '../ModulesBody/ModulesBody'

import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { getClasses } from 'yourails_common'
import { DICTIONARY } from '../../../Constants/dictionary.const'

import {
  AcademyMatrixBodyComponentPropsType,
  AcademyMatrixBodyPropsType,
  AcademyMatrixBodyPropsOutType,
  AcademyMatrixBodyComponentType,
  AcademyMatrixBodyType,
} from './AcademyMatrixBodyTypes'

/**
 * @description Component to render AcademyMatrixBody
 * @import import { AcademyMatrixBody, AcademyMatrixBodyPropsType, AcademyMatrixBodyPropsOutType, AcademyMatrixBodyType } 
             from '../Components/AcademyMatrixBody/AcademyMatrixBody'
 */
const AcademyMatrixBodyComponent: AcademyMatrixBodyComponentType = (
  props: AcademyMatrixBodyComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: { language },
  } = props

  const propsOut: AcademyMatrixBodyPropsOutType = {
    tagsCloudBodyProps: {
      classAdded: 'TagsCloudBody_AcademyMatrixBody',
      headline: DICTIONARY.All_tags[language],
    },
    modulesBodyProps: {
      classAdded: 'ModulesBody_AcademyMatrixBody',
      headline: DICTIONARY['All_interactive_videos'][language],
    },
  }

  return (
    <div className={getClasses('AcademyMatrixBody', classAdded)}>
      <div className='_tagsCloudBodyWrapper'>
        <TagsCloudBody {...propsOut.tagsCloudBodyProps} />
      </div>
      <div className='_modulesBodyWrapper'>
        <ModulesBody {...propsOut.modulesBodyProps} />
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = ['language']
export const AcademyMatrixBody: AcademyMatrixBodyType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(AcademyMatrixBodyComponent)
)

export type {
  AcademyMatrixBodyPropsType,
  AcademyMatrixBodyPropsOutType,
  AcademyMatrixBodyComponentType,
  AcademyMatrixBodyType,
}
