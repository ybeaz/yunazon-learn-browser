import React from 'react'
import { Link } from 'react-router-dom'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'
import { ButtonYrl } from '../../ComponentsLibrary/ButtonYrl/ButtonYrl'
import { getClasses, getDateString } from '../../../Shared/'
import {
  CoursesTablePropsOutType,
  MyModulesTableComponentPropsType,
  MyModulesTablePropsType,
  MyModulesTablePropsOutType,
  MyModulesTableComponentType,
  MyModulesTableType,
} from './MyModulesTableTypes'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { ModuleType } from '../../../@types/'

/**
 * @description Component to render MyModulesTable
 * @import import { MyModulesTable, MyModulesTablePropsType, MyModulesTablePropsOutType, MyModulesTableType } 
             from '../Components/MyModulesTable/MyModulesTable'
 */
const MyModulesTableComponent: MyModulesTableComponentType = (
  props: MyModulesTableComponentPropsType
) => {
  const { classAdded, handleEvents, modules, language } = props

  const getModulesTable = (modulesIn: ModuleType[]) => {
    const modulesRows: React.ReactElement[] = modulesIn.map(
      (module: ModuleType) => {
        const { moduleID, capture, dateCreated } = module

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
              //   typeEvent: 'SELECT_MODULE',
              //   data: {  },
              // })
            },
          },
          linkToCourseProps: {
            className: '__shield',
            to: { pathname: `/m/${moduleID}/` },
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
              typeEvent: 'SET_MODAL_FRAMES',
              data: [
                {
                  childName: 'ConfirmationYesNoBodyYrl',
                  isActive: true,
                  childProps: {
                    message: [
                      `${DICTIONARY['Do_you_confirm_removing'][language]} ${DICTIONARY['module'][language]}`,
                      `${capture}?`,
                    ],
                    captureButton4Yes: DICTIONARY['confirm'][language],
                    captureButton4No: DICTIONARY['cancel'][language],
                    action4Yes: {
                      typeEvent: 'CLICK_ON_DEACTIVATE_MODULE',
                      data: { moduleIDs: [moduleID] },
                    },
                    action4No: {
                      typeEvent: 'SET_MODAL_FRAMES',
                      data: {
                        childName: 'ConfirmationYesNoBodyYrl',
                        isActive: false,
                      },
                    },
                    buttonRight: 'NoCancel',
                  },
                },
              ],
            },
          },
        }

        return (
          <div key={moduleID} className='_row _row_weather'>
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

        {modulesRows}
      </section>
    )
  }

  return (
    <div className={getClasses('MyModulesTable', classAdded)}>
      <h2 className='_screenTitle'>{DICTIONARY.My_courses[language]}</h2>
      {getModulesTable(modules)}
    </div>
  )
}

const storeStateSliceProps: string[] = []
export const MyModulesTable = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(
    storeStateSliceProps,
    React.memo(MyModulesTableComponent)
  )
)

export type {
  MyModulesTablePropsType,
  MyModulesTablePropsOutType,
  MyModulesTableComponentType,
  MyModulesTableType,
}
