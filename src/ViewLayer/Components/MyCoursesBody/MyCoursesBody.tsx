import React, { useMemo } from 'react'

import {
  PaginationNameEnumType,
  CreateModuleStagesEnumType,
  CreateCourseStatusEnumType,
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
import { MyCoursesTable } from '../MyCoursesTable/MyCoursesTable'
import { PaginationNavigation } from '../../Components/PaginationNavigation/PaginationNavigation'
import {
  StagesType,
  StagesPropsOut,
  MyCoursesBodyComponentPropsType,
  MyCoursesBodyPropsType,
  MyCoursesBodyPropsOutType,
  MyCoursesBodyComponentType,
  MyCoursesBodyType,
} from './MyCoursesBodyTypes'
import { getCourseCreateStages } from './getCourseCreateStages'

/**
 * @description Component to render MyCoursesBody
 * @import import { MyCoursesBody, MyCoursesBodyPropsType, MyCoursesBodyPropsOutType, MyCoursesBodyType } 
             from '../Components/MyCoursesBody/MyCoursesBody'
 */
const MyCoursesBodyComponent: MyCoursesBodyComponentType = (
  props: MyCoursesBodyComponentPropsType
) => {
  const {
    classAdded,
    language,
    courseCreateProgress,
    courses,
    createModuleStages,
    isShowCourseCreateProgress,
  } = props

  const stagesNo = Object.values(CreateModuleStagesEnumType).filter(
    (key: CreateModuleStagesEnumType) =>
      createModuleStages[key].isActive === true
  ).length
  const width: string = `${String(Math.round((100 * stagesNo) / 6))}%`

  const stages: StagesType[] = useMemo(
    () =>
      getCourseCreateStages({
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
            isDisplaying: status === CreateCourseStatusEnumType['todo'],
          },
          imagePendingProps: {
            classAdded: 'Image_pending',
            src: 'https://yourails.com/images/loading/loading01.gif',
            isDisplaying: status === CreateCourseStatusEnumType['pending'],
          },
          timerProps: {
            classAdded: 'Timer_MyCoursesBody',
            miliseconds: timeCalculated,
            isStoping: status !== CreateCourseStatusEnumType['pending'],
            isDisplaying: status === CreateCourseStatusEnumType['pending'],
          },
          iconSuccessProps: {
            classAdded: 'Icon_success',
            icon: 'MdCheck',
            isDisplaying: status === CreateCourseStatusEnumType['success'],
          },
          iconFailedProps: {
            classAdded: 'Icon_failed',
            icon: 'MdClear',
            isDisplaying: status === CreateCourseStatusEnumType['failure'],
          },
          buttonRepeatProps: {
            classAdded: 'Button_create_stage_repeat',
            icon: 'MdOutlineReplay',
            action,
            isDisplaying: status === CreateCourseStatusEnumType['failure'],
          },
        }

        return (
          <div key={stageName} className='_stage'>
            <div className='_stageDesription'>
              <div className='_capture'>
                {DICTIONARY[`stage_${stageName}`][language]}
              </div>
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
    console.info('MyCoursesBody [130] courseCreateProgress', {
      ...courseCreateProgress,
      createModuleStages,
    })
  }, [JSON.stringify(courseCreateProgress)])

  const propsOut: MyCoursesBodyPropsOutType = {
    inputGroupProps: {
      classAdded: 'InputGroupYrl_CourseCreate',
      inputProps: {
        classAdded: '',
        type: 'text',
        placeholder: 'Add resource url...',
        typeEvent: 'ONCHANGE_INPUT_SEARCH',
        typeEventOnEnter: 'CLICK_ON_COURSE_CREATE_SUBMIT',
        storeFormProp: 'inputCourseCreate',
      },
      buttonSubmitProps: {
        classAdded: 'Button_CourseCreateSubmit',
        icon: 'MdOutlineSend',
        action: { typeEvent: 'CLICK_ON_COURSE_CREATE_SUBMIT' },
      },
    },
    myCoursesTableProps: {
      courses,
      language,
    },
    paginationNavigationProps: {
      paginationName: PaginationNameEnumType['pageCourses'],
    },
  }

  return (
    <div className={getClasses('MyCoursesBody', classAdded)}>
      <div className='_inputGroupWrapper' style={{ width }}>
        <h3 className='_h2'>{DICTIONARY.Create_course[language]}</h3>
        <InputGroupYrl {...propsOut.inputGroupProps} />
      </div>
      <div className='_stagesWrapper'>
        {isShowCourseCreateProgress ? getStages(stages) : null}
      </div>
      <div className='_messageWrapper'></div>
      <div className='_coursesBodyWrapper'>
        {courses.length ? (
          <MyCoursesTable {...propsOut.myCoursesTableProps} />
        ) : null}
        <div className='_paginationNavigationWrapper'>
          {courses.length ? (
            <PaginationNavigation {...propsOut.paginationNavigationProps} />
          ) : null}
        </div>
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = [
  'language',
  'createModuleStages',
  'courseCreateProgress',
  'courses',
]
export const MyCoursesBody: MyCoursesBodyType = withStoreStateSelectedYrl(
  storeStateSliceProps,
  React.memo(MyCoursesBodyComponent)
)

export type {
  MyCoursesBodyPropsType,
  MyCoursesBodyPropsOutType,
  MyCoursesBodyComponentType,
  MyCoursesBodyType,
}
