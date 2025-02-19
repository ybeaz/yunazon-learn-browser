import React from 'react'
import { useNavigate } from 'react-router-dom'

import { DICTIONARY } from 'yourails_common'
import { withPropsYrl, ButtonYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { getClasses, getDateString } from 'yourails_common'
import {
  ModulesTablePropsOutType,
  MyModulesTableComponentPropsType,
  MyModulesTablePropsType,
  MyModulesTablePropsOutType,
  MyModulesTableComponentType,
  MyModulesTableType,
} from './MyModulesTableTypes'
import { ModuleType } from 'yourails_common'
import { getSlug } from 'yourails_common'
import { getDurationFromYoutubeSnippet } from 'yourails_common'
import { NavLinkWithQuery } from '../../Components/NavLinkWithQuery/NavLinkWithQuery'

/**
 * @description Component to render MyModulesTable
 * @import import { MyModulesTable, MyModulesTablePropsType, MyModulesTablePropsOutType, MyModulesTableType } 
             from '../Components/MyModulesTable/MyModulesTable'
 */
const MyModulesTableComponent: MyModulesTableComponentType = (
  props: MyModulesTableComponentPropsType
) => {
  const { classAdded, handleEvents, modules, language } = props
  const navigate = useNavigate()

  const getModulesTable = (modulesIn: ModuleType[]) => {
    const modulesRows: React.ReactElement[] = modulesIn.map((module: ModuleType) => {
      const { moduleID, capture, dateCreated, duration: durationStrIn, contentID } = module

      const durationObj = getDurationFromYoutubeSnippet(durationStrIn, {
        funcParent: 'MyModulesTable',
      })
      const { timeReadable: duration } = durationObj

      const dateString = getDateString({
        timestamp: dateCreated,
        style: 'US',
      })

      const pathnameModule = `/m/${moduleID}/${getSlug(capture)}`

      const propsOut: ModulesTablePropsOutType = {
        linkToModuleProps: {
          className: '__shield',
          to: {
            pathname: pathnameModule,
            search: { pageModules: 1, pageTags: 1, pageDocuments: 1 },
          },
          children: capture,
          onClick: (event: any) => {},
        },
        buttonDeactivateModuleProps: {
          icon: 'MdDeleteOutline',
          classAdded: 'Button_DeactivateModule',
          handleEvents,
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
            <NavLinkWithQuery {...propsOut.linkToModuleProps} />
          </div>
          <div className='_cell _module_duration'>{duration}</div>
          <div className='_cell _module_button_edit'>
            {/* TODO: Add a button and implement edit feature */}
          </div>
          <div className='_cell _remove'>
            <ButtonYrl {...propsOut.buttonDeactivateModuleProps} />
          </div>
        </div>
      )
    })

    return (
      <section className={getClasses('_modulesTable', classAdded)}>
        <header className='_row _row_header'>
          <div className='_cell _header_date'>{DICTIONARY.Date_of_creation[language]}</div>
          <div className='_cell _header_module_name'>{DICTIONARY.Module_name[language]}</div>
          <div className='_cell _header_module_duration'>{DICTIONARY.Duration[language]}</div>
          <div className='_cell _header_module_button_edit'>
            {/* TODO: Add a button and implement edit feature */}
            <div style={{ opacity: 0 }}>{DICTIONARY.Edit[language]}</div>
          </div>
          <div className='_cell _header_remove'>{DICTIONARY.Remove[language]}</div>
        </header>

        {modulesRows}
      </section>
    )
  }

  return (
    <div className={getClasses('MyModulesTable', classAdded)}>
      <h2 className='_screenTitle'>{DICTIONARY.My_modules[language]}</h2>
      {getModulesTable(modules)}
    </div>
  )
}

const storeStateSliceProps: string[] = []

export const MyModulesTable: MyModulesTableType = withPropsYrl({ handleEvents: handleEventsIn })(
  withPropsYrl({ handleEvents: handleEventsIn })(
    withStoreStateSelectedYrl(storeStateSliceProps, React.memo(MyModulesTableComponent))
  )
)

export type {
  MyModulesTablePropsType,
  MyModulesTablePropsOutType,
  MyModulesTableComponentType,
  MyModulesTableType,
}
