import React from 'react'

import { withPropsYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import { getSlug } from '../../../Shared/getSlug'
import { getDateString } from '../../../Shared/getDateString'
import {
  Certificate2BodyComponentPropsType,
  Certificate2BodyPropsType,
  Certificate2BodyPropsOutType,
  Certificate2BodyComponentType,
  Certificate2BodyType,
} from './Certificate2BodyTypes'

/**
 * @description Component to render Certificate2Body
 * @import import { Certificate2Body, Certificate2BodyPropsType, Certificate2BodyPropsOutType, Certificate2BodyType } 
             from '../Components/Certificate2Body/Certificate2Body'
 */
const Certificate2BodyComponent: Certificate2BodyComponentType = (
  props: Certificate2BodyComponentPropsType
) => {
  const {
    classAdded,
    document,
    storeStateSlice: { language },
  } = props

  const {
    documentID,
    dateCreated,
    module: { moduleID, capture: moduleCapture, language: languageDoc },
    creator: {
      affiliation,
      jobTitle,
      nameFirst: nameFirstCreator,
      nameLast: nameLastCreator,
      nameMiddle: nameMiddleCreator,
    },
    learner: {
      nameFirst: nameFirstLearner,
      nameLast: nameLastLearner,
      nameMiddle: nameMiddleLearner,
    },
  } = document

  const moduleSlug = getSlug(moduleCapture)
  const modulePathName = `/m/${moduleID}/${moduleSlug}`

  const documentSlug = getSlug(moduleCapture)
  const documentPathName = `/d/${documentID}/${documentSlug}`

  const dateStyle = language === 'en' ? 'US' : language === 'ru' ? 'EU' : 'EU'

  const dateCreatedReadable = getDateString({
    timestamp: dateCreated,
    style: dateStyle,
    hours: false,
    minutes: false,
    seconds: false,
  })

  const nameCreator = nameMiddleCreator
    ? `${nameFirstCreator} ${nameMiddleCreator} ${nameLastCreator}`
    : `${nameFirstCreator} ${nameLastCreator}`

  const nameLearner = nameMiddleLearner
    ? `${nameFirstLearner} ${nameMiddleLearner} ${nameLastLearner}`
    : `${nameFirstLearner} ${nameLastLearner}`

  const propsOut: Certificate2BodyPropsOutType = {}

  console.info('Certificate2Body [51]', {
    moduleCapture,
    modulePathName,
    affiliation,
    nameCreator,
    nameLearner,
  })

  return (
    <div className={getClasses('Certificate2Body', classAdded)}>
      <h4>{affiliation}</h4>
      <h2>Certificate of Completion</h2>
      <div>{nameLearner}</div>
      <div>has earned 1.0 Credit Hours</div>
      <div>while completing the training module entitled</div>
      <div>{moduleCapture}</div>
      <div>Module No</div>
      <div>
        <a className='_moduleLink' href={modulePathName} target='_blank'>
          {moduleID}
        </a>
      </div>
      <div>"Open Internet Academy"</div>
      <div>in partnership with "YouRails.com"</div>
      <div>Completed {dateCreatedReadable}</div>
      <div>
        <a className='_documentLink' href={documentPathName} target='_blank'>
          {documentID}
        </a>
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = []
export const Certificate2Body: Certificate2BodyType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(Certificate2BodyComponent)
)

export type {
  Certificate2BodyPropsType,
  Certificate2BodyPropsOutType,
  Certificate2BodyComponentType,
  Certificate2BodyType,
}
