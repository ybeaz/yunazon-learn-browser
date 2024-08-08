import React from 'react'

import { withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
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
  const { classAdded, language, profile, tagCloud } = props

  const documentID = tagCloud.tagID
  const dateCreated = tagCloud.dateCreated
  const affiliation = 'Open Internet Academy'
  const moduleID = tagCloud.tagID
  const moduleCapture = tagCloud.value
  const languageDoc = language

  const nameFirstLearner = profile.nameFirst
  const nameLastLearner = profile.nameLast
  const nameMiddleLearner = profile.nameMiddle

  const nameFirstCreator = 'Alex'
  const nameLastCreator = 'Polus'
  const nameMiddleCreator = ''

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
    tagCloud,
    moduleCapture,
    modulePathName,
    // affiliation,
    nameCreator,
    nameLearner,
  })

  return (
    <div className={getClasses('Certificate2Body', classAdded)}>
      <div className='_sectionWrapper'>
        <h4 className='_affiliation'>{affiliation}</h4>
        <h2 className='_title'>Certificate of Completion</h2>
      </div>

      <div className='_sectionWrapperUnderlined'>
        <div className='_nameLearner'>{nameLearner}</div>
      </div>

      <div className='_sectionWrapper'>
        <div className='_labelAchievement'>has earned</div>
        <div className='_achievement'>1.0 Credit Hours</div>
        <div className='_labelDescription'>while completing the training module entitled</div>
      </div>

      <div className='_sectionWrapperUnderlined'>
        <div className='_courseCapture'>{moduleCapture}</div>
      </div>

      <div className='_sectionWrapperRow'>
        <div className='_labelCourse'>Module No </div>
        <a className='_moduleLinks' href={modulePathName} target='_blank'>
          {moduleID}
        </a>
      </div>

      <div className='_sectionWrapperGapNone'>
        <div className='_institution'>"Open Internet Academy"</div>
        <div className='_nameServiceProvider'>in partnership with "YouRails.com"</div>
      </div>

      <div className='_sectionWrapperUnderlined'></div>

      <div className='_sectionWrapperRow'>
        <div className='_dateCompleted'>Completed {dateCreatedReadable} </div>
        <div className='_labelDocument'>Certificate No </div>
        <a className='_documentLink' href={documentPathName} target='_blank'>
          {documentID}
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
