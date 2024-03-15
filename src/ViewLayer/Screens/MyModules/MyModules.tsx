import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { FooterFrame } from '../../Frames/FooterFrame/FooterFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { MyModulesBody } from '../../Components/MyModulesBody/MyModulesBody'
import { actionAsync } from '../../../DataLayer/index.action'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import {
  CreateModuleStatusEnumType,
  CreateModuleStagesEnumType,
  CreateModuleStageType,
} from '../../../Interfaces/'
import {
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'
import { getClasses } from '../../../Shared/getClasses'
import {
  MyModulesComponentPropsType,
  MyModulesPropsType,
  MyModulesPropsOutType,
  MyModulesComponentType,
  MyModulesType,
} from './MyModulesTypes'

/**
 * @description Component to render MyModules
 * @import import { MyModules, MyModulesPropsType, MyModulesPropsOutType, MyModulesType } 
             from '../Components/MyModules/MyModules'
 */
const MyModulesComponent: MyModulesComponentType = (
  props: MyModulesComponentPropsType
) => {
  const {
    classAdded,
    storeStateSlice: {
      language,
      sub,
      createModuleStages,
      moduleCreateProgress,
      modules,
    },
    handleEvents,
  } = props

  const [isShowModuleCreateProgress, setIsShowModuleCreateProgress] =
    useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    handleEvents(
      {},
      { type: 'SET_SCREEN_ACTIVE', data: { screenActive: 'MyModules' } }
    )

    const isStatePendingAny = Object.values(CreateModuleStagesEnumType).reduce(
      (accum: boolean, item: CreateModuleStagesEnumType) => {
        let output = false
        if (
          createModuleStages[item].isActive &&
          createModuleStages[item].status ===
            CreateModuleStatusEnumType['pending']
        )
          output = true
        return output || accum
      },
      false
    )

    const isStateFailureAny = Object.values(CreateModuleStagesEnumType).reduce(
      (accum: boolean, item: CreateModuleStagesEnumType) => {
        let output = false
        if (
          createModuleStages[item].isActive &&
          createModuleStages[item].status ===
            CreateModuleStatusEnumType['failure']
        )
          output = true
        return output || accum
      },
      false
    )

    setIsShowModuleCreateProgress(!!isStatePendingAny || !!isStateFailureAny)

    const isStateTodoAll = Object.values(CreateModuleStagesEnumType).reduce(
      (accum: boolean, item: CreateModuleStagesEnumType) => {
        let output = true
        if (
          createModuleStages[item].isActive &&
          createModuleStages[item].status !== CreateModuleStatusEnumType['todo']
        ) {
          output = false
        }
        return accum && output
      },
      true
    )

    const isStateSuccessAll = Object.values(CreateModuleStagesEnumType).reduce(
      (accum: boolean, item: CreateModuleStagesEnumType) => {
        let output = true
        if (
          createModuleStages[item].isActive &&
          createModuleStages[item].status !==
            CreateModuleStatusEnumType['success']
        ) {
          output = false
        }
        return accum && output
      },
      true
    )

    if (sub && (isStateTodoAll || isStateSuccessAll)) {
      dispatch(actionAsync.GET_MODULES.REQUEST())
    }
    // TODO: to research why courses couses cycling call on prod
  }, [JSON.stringify({ sub, createModuleStages, modulesLen: modules.length })])

  const propsOut: MyModulesPropsOutType = {
    headerFrameProps: {
      brandName: 'YouRails Academy',
      moto: DICTIONARY['Together_know_everything'][language],
      logoPath: `${SERVERS_MAIN.remote}/images/logoYouRails.png`,
      contentComponentName: 'SearchFormSep',
      isButtonSideMenuLeft: true,
      isLogoGroup: true,
      isButtonAddCourse: true,
      isButtonAuthUser: true,
      isSelectLanguage: true,
      isButtonThemeToggle: true,
      isSeachGroup: true,
      isButtonBack: false,
      isPageActionsGroup: false,
      isButtonsShare: false,
    },
    mainFrameProps: {
      screenType: 'MyModules',
    },
    myModulesBodyProps: {
      language,
      createModuleStages,
      moduleCreateProgress,
      modules,
      isShowModuleCreateProgress,
    },
  }

  return (
    <div className={getClasses('MyModules', classAdded)}>
      <MainFrame {...propsOut.mainFrameProps}>
        {/* header */}
        <HeaderFrame {...propsOut.headerFrameProps} />
        {/* middle-left */}
        {null}
        {/* middle-main */}
        <MyModulesBody {...propsOut.myModulesBodyProps} />
        {/* <ProfileBody {...propsOut.profileBodyProps} /> */}
        {/* middle-right */}
        {null}
        {/* footer */}
        {null}
      </MainFrame>
    </div>
  )
}

const storeStateSliceProps: string[] = [
  'language',
  'sub',
  'createModuleStages',
  'moduleCreateProgress',
  'modules',
]
export const MyModules = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(
    storeStateSliceProps,
    React.memo(MyModulesComponent)
  )
)

export type {
  MyModulesPropsType,
  MyModulesPropsOutType,
  MyModulesComponentType,
  MyModulesType,
}
