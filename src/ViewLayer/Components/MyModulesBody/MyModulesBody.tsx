import React, { useMemo } from 'react'

import {
  PaginationNameEnumType,
  CreateModuleStagesEnumType,
  CreateModuleStatusEnumType,
  CreateModuleStageType,
} from '../../../Interfaces/'
import {
  InputGroupYrl,
  IconYrl,
  ImageYrl,
  ButtonYrl,
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'
import { Timer } from '../Timer/Timer'
import { DICTIONARY } from '../../../Constants/dictionary.const'
import { getClasses } from '../../../Shared/getClasses'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { MyModulesTable } from '../MyModulesTable/MyModulesTable'
import { PaginationNavigation } from '../../Components/PaginationNavigation/PaginationNavigation'
import {
  StagesType,
  StagesPropsOut,
  MyModulesBodyComponentPropsType,
  MyModulesBodyPropsType,
  MyModulesBodyPropsOutType,
  MyModulesBodyComponentType,
  MyModulesBodyType,
} from './MyModulesBodyTypes'
import { getModuleCreateStages } from './getModuleCreateStages'

/**
 * @description Component to render MyModulesBody
 * @import import { MyModulesBody, MyModulesBodyPropsType, MyModulesBodyPropsOutType, MyModulesBodyType } 
             from '../Components/MyModulesBody/MyModulesBody'
 */
const MyModulesBodyComponent: MyModulesBodyComponentType = (
  props: MyModulesBodyComponentPropsType
) => {
  const {
    classAdded,
    language,
    moduleCreateProgress,
    modules,
    createModuleStages,
    isShowModuleCreateProgress,
    storeStateSlice: { pageModules },
  } = props

  const stagesNo = Object.values(CreateModuleStagesEnumType).filter(
    (key: CreateModuleStagesEnumType) => createModuleStages[key].isActive === true
  ).length
  const width: string = `${String(Math.round((100 * stagesNo) / 6))}%`

  const stages: StagesType[] = useMemo(
    () =>
      getModuleCreateStages({
        createModuleStages,
      }),
    [JSON.stringify(createModuleStages)]
  )

  const getStages = (stagesIn: StagesType[]) => {
    return stagesIn
      .filter((stage: StagesType) => stage.isActive)
      .map((stage: StagesType) => {
        const { name: stageName, action, status, timeCalculated } = stage

        const propsOut: StagesPropsOut = {
          iconToDoProps: {
            classAdded: 'Icon_toDo',
            icon: 'MdCheckBoxOutlineBlank',
            isDisplaying: status === CreateModuleStatusEnumType['todo'],
          },
          imagePendingProps: {
            classAdded: 'Image_pending',
            src: 'https://yourails.com/images/loading/loading01.gif',
            isDisplaying: status === CreateModuleStatusEnumType['pending'],
          },
          timerProps: {
            classAdded: 'Timer_MyModulesBody',
            miliseconds: timeCalculated,
            isStoping: status !== CreateModuleStatusEnumType['pending'],
            isDisplaying: status === CreateModuleStatusEnumType['pending'],
          },
          iconSuccessProps: {
            classAdded: 'Icon_success',
            icon: 'MdCheck',
            isDisplaying: status === CreateModuleStatusEnumType['success'],
          },
          iconFailedProps: {
            classAdded: 'Icon_failed',
            icon: 'MdClear',
            isDisplaying: status === CreateModuleStatusEnumType['failure'],
          },
          buttonRepeatProps: {
            classAdded: 'Button_create_stage_repeat',
            icon: 'MdOutlineReplay',
            action,
            isDisplaying: status === CreateModuleStatusEnumType['failure'],
          },
        }

        return (
          <div key={stageName} className='_stage'>
            <div className='_stageDesription'>
              <div className='_capture'>{DICTIONARY[`stage_${stageName}`][language]}</div>
              <div className='_status'>{DICTIONARY[`${status}`][language]}</div>
            </div>
            <div className='_stageVisualisation'>
              <IconYrl {...propsOut.iconToDoProps} />
              {timeCalculated ? (
                <Timer {...propsOut.timerProps} />
              ) : (
                <ImageYrl {...propsOut.imagePendingProps} />
              )}
              <IconYrl {...propsOut.iconSuccessProps} />
              <IconYrl {...propsOut.iconFailedProps} />
              <ButtonYrl {...propsOut.buttonRepeatProps} />
            </div>
          </div>
        )
      })
  }

  useMemo(() => {
    console.info('MyModulesBody [130] moduleModuleProgress', {
      ...moduleCreateProgress,
      createModuleStages,
    })
  }, [JSON.stringify(moduleCreateProgress)])

  const propsOut: MyModulesBodyPropsOutType = {
    inputGroupProps: {
      classAdded: 'InputGroupYrl_CourseCreate',
      inputProps: {
        classAdded: '',
        type: 'text',
        placeholder: 'Add resource url...',
        typeEvent: 'ONCHANGE_INPUT_SEARCH',
        typeEventOnEnter: 'CLICK_ON_MODULE_CREATE_SUBMIT',
        storeFormProp: 'inputCourseCreate',
      },
      buttonSubmitProps: {
        classAdded: 'Button_CourseCreateSubmit',
        icon: 'MdOutlineSend',
        action: { typeEvent: 'CLICK_ON_MODULE_CREATE_SUBMIT' },
      },
    },
    myModulesTableProps: {
      modules,
      language,
    },
    paginationNavigationProps: {
      paginationName: PaginationNameEnumType['pageModules'],
    },
  }

  return (
    <div className={getClasses('MyModulesBody', classAdded)}>
      <div className='_inputGroupWrapper' style={{ width }}>
        <h2 className='_h2'>{DICTIONARY.Create_module[language]}</h2>
        <InputGroupYrl {...propsOut.inputGroupProps} />
      </div>
      <div className='_stagesWrapper'>{isShowModuleCreateProgress ? getStages(stages) : null}</div>
      <div className='_messageWrapper'></div>
      <div className='_modulesBodyWrapper'>
        {modules.length ? <MyModulesTable {...propsOut.myModulesTableProps} /> : null}
        {pageModules.offset <= modules.length && (
          <div className='_paginationNavigationWrapper'>
            {modules.length ? (
              <PaginationNavigation {...propsOut.paginationNavigationProps} />
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = ['pageModules']
export const MyModulesBody: MyModulesBodyType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(MyModulesBodyComponent)
)

export type {
  MyModulesBodyPropsType,
  MyModulesBodyPropsOutType,
  MyModulesBodyComponentType,
  MyModulesBodyType,
}
