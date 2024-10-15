import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'

import { ScreensEnumType } from 'yourails_common'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { HeaderFrame } from '../../Frames/HeaderFrame/HeaderFrame'
import { MainFrame } from '../../Frames/MainFrame/MainFrame'
import { SERVERS_MAIN } from '../../../Constants/servers.const'
import { SITE_META_DATA } from '../../../Constants/siteMetaData.const'
import { MyModulesBody } from '../../Components/MyModulesBody/MyModulesBody'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { useEffectedInitialRequests } from '../../Hooks/useEffectedInitialRequests'
import { CreateModuleStatusEnumType, CreateModuleStagesEnumType } from '../../../Interfaces/'
import { withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { getClasses } from 'yourails_common'
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
const MyModulesComponent: MyModulesComponentType = (props: MyModulesComponentPropsType) => {
  const {
    classAdded,
    storeStateSlice: { language, sub, createModuleStages, moduleCreateProgress, modules },
    handleEvents,
  } = props

  const screenType = ScreensEnumType['MyModules']
  const { titleSite, descriptionSite, canonicalUrlSite, langSite } = SITE_META_DATA
  const canonicalUrl = `${SERVERS_MAIN.remote}${decodeURIComponent(location.pathname)}`
  const [isShowModuleCreateProgress, setIsShowModuleCreateProgress] = useState(false)
  const dispatch = useDispatch()

  useEffectedInitialRequests([{ type: 'SET_SCREEN_ACTIVE', data: { screenActive: screenType } }])

  useEffect(() => {
    const isStatePendingAny = Object.values(CreateModuleStagesEnumType).reduce(
      (accum: boolean, item: CreateModuleStagesEnumType) => {
        let output = false
        if (
          createModuleStages[item].isActive &&
          createModuleStages[item].status === CreateModuleStatusEnumType['pending']
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
          createModuleStages[item].status === CreateModuleStatusEnumType['failure']
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
          createModuleStages[item].status !== CreateModuleStatusEnumType['success']
        ) {
          output = false
        }
        return accum && output
      },
      true
    )

    if (sub && (isStateTodoAll || isStateSuccessAll)) {
      handleEvents({}, { type: 'GET_MODULES_CONNECTION' })
    }
    // TODO: to research why courses couses cycling call on prod
  }, [JSON.stringify({ sub, createModuleStages, modulesLen: modules.length })])

  const propsOut: MyModulesPropsOutType = {
    headerFrameProps: {
      brandName: 'YouRails Academy',
      moto: DICTIONARY['Watch_Videos_With_a_Purpose'][language],
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
      <Helmet>
        <html lang={langSite} />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta name='google' content='notranslate' />
        <title>{titleSite}</title>
        <link rel='canonical' href={canonicalUrl} />
        <meta name='description' content={descriptionSite} />
      </Helmet>
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
  withStoreStateSelectedYrl(storeStateSliceProps, React.memo(MyModulesComponent))
)

export type { MyModulesPropsType, MyModulesPropsOutType, MyModulesComponentType, MyModulesType }
