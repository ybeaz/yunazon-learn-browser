import React from 'react'

import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import { buildData } from '../../../Constants/buildData.const'
import {
  AboutAcademyBodyComponentPropsType,
  AboutAcademyBodyPropsType,
  AboutAcademyBodyPropsOutType,
  AboutAcademyBodyComponentType,
  AboutAcademyBodyType,
} from './AboutAcademyBodyTypes'

/**
 * @description Component to render AboutAcademyBody
 * @import import { AboutAcademyBody, AboutAcademyBodyPropsType, AboutAcademyBodyPropsOutType, AboutAcademyBodyType } 
             from '../Components/AboutAcademyBody/AboutAcademyBody'
 */
const AboutAcademyBodyComponent: AboutAcademyBodyComponentType = (
  props: AboutAcademyBodyComponentPropsType
) => {
  const { classAdded, buildData, storeStateSlice } = props
  const {
    commit,
    author: { name, email },
    date,
    message,
    branchCurrent,
    copyright,
  } = buildData

  const propsOut: AboutAcademyBodyPropsOutType = {}

  return (
    <div className={getClasses('AboutAcademyBody', classAdded)}>
      <h1 className='_titleBodyAbout'>About Academy YouRails</h1>
      <div className='_aboutAcademyContent'>
        <div className='_paragraph'>
          YouRails Academy offers a service that converts YouTube videos (texts,
          audio) into learning content with modules, quizzes and certification
          helping teaches, businesses and common users to increase engagement
          through a separation of content and a course itself, fast adding
          learning features with AI assistance and gamification from the very
          beginning.
        </div>
      </div>
      <div className='_sectionBuildData'>
        <h3 className='_titleTableBuild'>Current build</h3>
        <section className='_tableBuild'>
          <div className='_row _row_branchCurrent'>
            <div className='_cell _cell_capture'>Current branch</div>
            <div className='_cell _cell_branchCurrent'>{branchCurrent}</div>
          </div>
          <div className='_row _row_date'>
            <div className='_cell _cell_capture'>Date</div>
            <div className='_cell _cell_date'>{date}</div>
          </div>
          <div className='_row _row_author'>
            <div className='_cell _cell_capture'>Authors</div>
            <div className='_cell _cell_date'>{`${name}, ${email}`}</div>
          </div>
          <div className='_row _row_commit'>
            <div className='_cell _cell_capture'>Message</div>
            <div className='_cell _cell_commit'>{message}</div>
          </div>
          <div className='_row _row_message'>
            <div className='_cell _cell_capture'>Commit</div>
            <div className='_cell _cell_message'>{commit}</div>
          </div>
          <div className='_row _row_copyright'>
            <div className='_cell _cell_capture'>Copyright</div>
            <div className='_cell _cell_copyright'>{copyright}</div>
          </div>
        </section>
      </div>
      {/* Current build 
      branchCurrent B-0.64.0 
      date 2023-12-15 11:41 
      commit
      3109babec7d11586d76ae77a64957c687f86cb3f 
      message
      perf-develop-refactor-communication-layer-VII 
      © 2023 Roman Ches */}
    </div>
  )
}

const storeStateSliceProps: string[] = []
export const AboutAcademyBody = withPropsYrl({ buildData })(
  withStoreStateSelectedYrl(
    storeStateSliceProps,
    React.memo(AboutAcademyBodyComponent)
  )
)

export type {
  AboutAcademyBodyPropsType,
  AboutAcademyBodyPropsOutType,
  AboutAcademyBodyComponentType,
  AboutAcademyBodyType,
}
