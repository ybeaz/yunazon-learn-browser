import React from 'react'
import { Link } from 'react-router-dom'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import {
  withPropsYrl,
  withStoreStateSelectedYrl,
  ButtonYrl,
} from '../../ComponentsLibrary/'
import { getClasses, getDateString } from '../../../Shared/'
import {
  CoursesTablePropsOutType,
  CoursesBodyComponentPropsType,
  CoursesBodyPropsType,
  CoursesBodyPropsOutType,
  CoursesBodyComponentType,
  CoursesBodyType,
} from './CoursesBodyTypes'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { CourseType } from '../../../@types/'

/**
 * @description Component to render CoursesBody
 * @import import { CoursesBody, CoursesBodyPropsType, CoursesBodyPropsOutType, CoursesBodyType } 
             from '../Components/CoursesBody/CoursesBody'
 */
const CoursesBodyComponent: CoursesBodyComponentType = (
  props: CoursesBodyComponentPropsType
) => {
  const { classAdded, handleEvents, courses, language } = props

  const getCoursesTable = (coursesIn: CourseType[]) => {
    const coursesRows: React.ReactElement[] = coursesIn.map(
      (course: CourseType) => {
        const { courseID, modules, capture, dateCreated } = course

        const dateString = getDateString({
          timestamp: dateCreated,
          style: 'US',
        })

        const propsOut: CoursesTablePropsOutType = {
          linkToModuleProps: {
            className: '__shield',
            to: { pathname: `/m/${modules && modules[0].moduleID}/` },
            children: capture,
            onClick: (event: any) => {
              // handleEvents(event, {
              //   typeEvent: 'SELECT_COURSE_MODULE',
              //   data: {  },
              // })
            },
          },
          linkToCourseProps: {
            className: '__shield',
            to: { pathname: `/c/${courseID}/` },
            children: 'Link',
            onClick: (event: any) => {
              // handleEvents(event, {
              //   typeEvent: '',
              //   data: {  },
              // })
            },
            target: 'blank',
          },
          buttonDeactivateCourseProps: {
            icon: 'MdDeleteOutline',
            classAdded: 'Button_DeactivateCourse',
            action: {
              typeEvent: 'CLICK_ON_DEACTIVATE_COURSE',
              data: { coursesIDs: [courseID] },
            },
          },
        }

        return (
          <div key={courseID} className='_row _row_weather'>
            <div className='_cell _date'>{dateString}</div>
            <div className='_cell _module_name'>
              <Link {...propsOut.linkToModuleProps} />
            </div>
            <div className='_cell _course_button_edit'>
              {/* TODO: Add a button and implement edit feature */}
            </div>
            <div className='_cell _remove'>
              <ButtonYrl {...propsOut.buttonDeactivateCourseProps} />
            </div>
          </div>
        )
      }
    )

    return (
      <section className={getClasses('_coursesTable', classAdded)}>
        <header className='_row _row_header'>
          <div className='_cell _header_date'>Date</div>
          <div className='_cell _header_module_name'>Module name</div>
          <div className='_cell _header_course_link'>
            {/* TODO: Add a button and implement edit feature */}
            <div style={{ opacity: 0 }}>Edit</div>
          </div>
          <div className='_cell _header_remove'>Remove</div>
        </header>

        {coursesRows}
      </section>
    )
  }

  return (
    <div className={getClasses('CoursesBody', classAdded)}>
      <h2 className='_screenTitle'>{DICTIONARY.My_courses[language]}</h2>
      {getCoursesTable(courses)}
    </div>
  )
}

const storeStateSliceProps: string[] = []
export const CoursesBody = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(
    storeStateSliceProps,
    React.memo(CoursesBodyComponent)
  )
)

export type {
  CoursesBodyPropsType,
  CoursesBodyPropsOutType,
  CoursesBodyComponentType,
  CoursesBodyType,
}
