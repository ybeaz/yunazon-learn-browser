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
  MyCoursesTableComponentPropsType,
  MyCoursesTablePropsType,
  MyCoursesTablePropsOutType,
  MyCoursesTableComponentType,
  MyCoursesTableType,
} from './MyCoursesTableTypes'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { CourseType } from '../../../@types/'

/**
 * @description Component to render MyCoursesTable
 * @import import { MyCoursesTable, MyCoursesTablePropsType, MyCoursesTablePropsOutType, MyCoursesTableType } 
             from '../Components/MyCoursesTable/MyCoursesTable'
 */
const MyCoursesTableComponent: MyCoursesTableComponentType = (
  props: MyCoursesTableComponentPropsType
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
    <div className={getClasses('MyCoursesTable', classAdded)}>
      <h2 className='_screenTitle'>{DICTIONARY.My_courses[language]}</h2>
      {getCoursesTable(courses)}
    </div>
  )
}

const storeStateSliceProps: string[] = []
export const MyCoursesTable = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(
    storeStateSliceProps,
    React.memo(MyCoursesTableComponent)
  )
)

export type {
  MyCoursesTablePropsType,
  MyCoursesTablePropsOutType,
  MyCoursesTableComponentType,
  MyCoursesTableType,
}
