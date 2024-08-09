import React from 'react'

import { withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import { getSlug } from '../../../Shared/getSlug'
import { getDateString } from '../../../Shared/getDateString'
import { getExpertiseInfo } from '../../../Shared/getExpertiseInfo'
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
  const { classAdded, language, profile, tagCloud } = props

  const completed = tagCloud.completed

  const expertiseInfo = getExpertiseInfo({ completed })

  const documentName = expertiseInfo.documentName
  const tagID = tagCloud.tagID
  const dateCreated = tagCloud.dateCreated
  const affiliation = 'Open Internet Academy'
  const tagValue = tagCloud.value
  const languageDoc = language

  const nameFirstLearner = profile.nameFirst
  const nameLastLearner = profile.nameLast
  const nameMiddleLearner = profile.nameMiddle

  const nameFirstCreator = 'Alex'
  const nameLastCreator = 'Polus'
  const nameMiddleCreator = ''

  const documentSlug = getSlug(tagValue)
  const documentPathName = `/q/${tagID}/${documentSlug}`

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
    documentName,
    tagCloud,
    tagValue,
    // affiliation,
    nameCreator,
    nameLearner,
  })

  /*

by successfully completing a comprehensive training program consisting of 6 modules.

Through dedication and hard work, John has mastered the skills and knowledge required, showing a high level of proficiency and commitment.

Awarded this [Day] day of [Month], [Year], this certificate recognizes your remarkable accomplishments and the significant effort invested in achieving this milestone.
  */

  return (
    <div className={getClasses('Certificate2Body', classAdded)}>
      <div className='_sectionWrapper'>
        <h2 className='_title'>{documentName}</h2>
      </div>

      <div className='_sectionWrapperUnderlined'>
        <div className='_awardedTo'>Awarded to</div>
        <div className='_nameLearner'>{nameLearner}</div>
      </div>

      <div className='_sectionWrapper'>
        <div className='_labelAchievement'>
          in recognition of achievements and excellence in the following subject
        </div>
        {/* <div className='_achievement'>training consisted of {completed} modules</div>
        <div className='_labelDescription'>while completing the training module entitled</div> */}
      </div>

      <div className='_sectionWrapperUnderlined'>
        <div className='_courseCapture'>{tagValue}</div>
      </div>

      <div className='_sectionWrapper'>
        <div className='_labelAchievement'>
          for successfully completing the comprehensive training programs consisting of {completed}{' '}
          modules.
        </div>
        <div className='_labelDescription'>
          Through dedication and hard work, {nameLearner} has mastered the skills and knowledge
          required, showing a high level of proficiency and commitment.
        </div>
      </div>

      <div className='_sectionWrapperGapNone'>
        <div className='_institution'>{affiliation}</div>
        <div className='_nameServiceProvider'>in partnership with YouRails.com</div>
      </div>

      <div className='_sectionWrapperUnderlined'></div>

      <div className='_sectionWrapperRow'>
        <div className='_dateCompleted'>Completed {dateCreatedReadable} </div>
        <div className='_labelDocument'>Certificate No </div>
        <a className='_documentLink' href={documentPathName} target='_blank'>
          {tagID}
        </a>
      </div>

      <div className='_stamp'></div>
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
