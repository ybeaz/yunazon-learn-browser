import React, { useMemo } from 'react'

import {
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
import { CoursesBody } from '../CoursesBody/CoursesBody'
import {
  StagesType,
  StagesPropsOut,
  CourseCreateBodyComponentPropsType,
  CourseCreateBodyPropsType,
  CourseCreateBodyPropsOutType,
  CourseCreateBodyComponentType,
  CourseCreateBodyType,
} from './CourseCreateBodyTypes'
import { getCourseCreateStages } from './getCourseCreateStages'

/**
 * @description Component to render CourseCreateBody
 * @import import { CourseCreateBody, CourseCreateBodyPropsType, CourseCreateBodyPropsOutType, CourseCreateBodyType } 
             from '../Components/CourseCreateBody/CourseCreateBody'
 */
const CourseCreateBodyComponent: CourseCreateBodyComponentType = (
  props: CourseCreateBodyComponentPropsType
) => {
  const { classAdded, storeStateSlice, handleEvents } = props

  const { language, courseCreateProgress, courses } = storeStateSlice
  const createModuleStages: Record<
    CreateModuleStagesEnumType,
    CreateModuleStageType
  > = storeStateSlice.createModuleStages

  const stagesNo = Object.keys(createModuleStages).filter(
    // @ts-expect-error
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
            classAdded: 'Timer_CourseCreateBody',
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
    console.info('CourseCreateBody [130] courseCreateProgress', {
      ...courseCreateProgress,
      createModuleStages,
    })
  }, [JSON.stringify(courseCreateProgress)])

  const propsOut: CourseCreateBodyPropsOutType = {
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
    coursesBodyProps: {
      courses,
      language,
    },
  }

  console.info('CourseCreateBody [154]', { courses })

  return (
    <div className={getClasses('CourseCreateBody', classAdded)}>
      <div className='_inputGroupWrapper' style={{ width }}>
        <h3 className='_h2'>{DICTIONARY.Create_course[language]}</h3>
        <InputGroupYrl {...propsOut.inputGroupProps} />
      </div>
      <div className='_stagesWrapper'>{getStages(stages)}</div>
      <div className='_messageWrapper'></div>
      <div className='_coursesBodyWrapper'>
        {courses.length ? <CoursesBody {...propsOut.coursesBodyProps} /> : null}
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
export const CourseCreateBody: CourseCreateBodyType = withPropsYrl({
  handleEvents: handleEventsIn,
})(
  withStoreStateSelectedYrl(
    storeStateSliceProps,
    React.memo(CourseCreateBodyComponent)
  )
)

export type {
  CourseCreateBodyPropsType,
  CourseCreateBodyPropsOutType,
  CourseCreateBodyComponentType,
  CourseCreateBodyType,
}
