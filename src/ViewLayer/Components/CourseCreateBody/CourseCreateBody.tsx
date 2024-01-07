import React from 'react'
import { nanoid } from 'nanoid'

import { CreateCourseStatusEnumType } from '../../../Interfaces/'

import {
  InputGroupYrl,
  IconYrl,
  ImageYrl,
  ButtonYrl,
  withPropsYrl,
  withStoreStateSelectedYrl,
} from '../../ComponentsLibrary/'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { getClasses } from '../../../Shared/getClasses'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
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
  const {
    classAdded,
    storeStateSlice: { language, createModuleStages },
    handleEvents,
  } = props

  const stages: StagesType[] = getCourseCreateStages({
    createModuleStages,
  })

  const getStages = (stagesIn: StagesType[]) => {
    return stagesIn.map((stage: StagesType) => {
      const { name: stageName, action, status } = stage

      const propsOut: StagesPropsOut = {
        iconToDoProps: {
          classAdded: 'Icon_toDo',
          icon: 'MdCheckBoxOutlineBlank',
          isVisible: true, // status === CreateCourseStatusEnumType['todo'],
        },
        imagePendingProps: {
          classAdded: 'Image_pending',
          src: 'https://yourails.com/images/loading/loading01.gif',
          isVisible: true, //  status === CreateCourseStatusEnumType['pending'],
        },
        iconSuccessProps: {
          classAdded: 'Icon_success',
          icon: 'MdCheck',
          isVisible: true, //  status === CreateCourseStatusEnumType['success'],
        },
        iconFailedProps: {
          classAdded: 'Icon_failed',
          icon: 'MdClear',
          isVisible: true, //  status === CreateCourseStatusEnumType['failure'],
        },
        buttonRepeatProps: {
          classAdded: 'Button_create_stage_repeat',
          icon: 'MdOutlineReplay',
          action,
          isVisible: true, //  status === CreateCourseStatusEnumType['failure'],
        },
      }

      const key = nanoid()

      return (
        <div key={key} className='_stage'>
          <div className='_stageDesription'>
            <div className='_capture'>
              {DICTIONARY[`stage_${stageName}`][language]}
            </div>
            <div className='_status'>{DICTIONARY[`${status}`][language]}</div>
          </div>
          <div className='_stageVisualisation'>
            <IconYrl {...propsOut.iconToDoProps} />
            <ImageYrl {...propsOut.imagePendingProps} />
            <IconYrl {...propsOut.iconSuccessProps} />
            <IconYrl {...propsOut.iconFailedProps} />
            <ButtonYrl {...propsOut.buttonRepeatProps} />
          </div>
        </div>
      )
    })
  }

  const propsOut: CourseCreateBodyPropsOutType = {
    inputGroupProps: {
      classAdded: 'InputGroupYrl_CourseCreate',
      inputProps: {
        classAdded: '',
        type: 'text',
        placeholder: 'Add resource url...',
        typeEvent: 'ONCHANGE_SEARCH_INPUT',
        typeEventOnEnter: 'CLICK_ON_SEARCH_BUTTON',
        storeFormProp: 'searchInput',
      },
      buttonSubmitProps: {
        classAdded: 'Button_MdSearch',
        icon: 'MdOutlineSend',
        action: { typeEvent: 'CLICK_ON_SEARCH_BUTTON' },
      },
    },
  }

  return (
    <div className={getClasses('CourseCreateBody', classAdded)}>
      <h2 className='_h2'>{DICTIONARY.Create_course[language]}</h2>
      <div className='_inputGroupWrapper'>
        <InputGroupYrl {...propsOut.inputGroupProps} />
      </div>
      <div className='_stagesWrapper'>{getStages(stages)}</div>
    </div>
  )
}

const storeStateSliceProps: string[] = ['language', 'createModuleStages']
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
