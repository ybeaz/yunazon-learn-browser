import {
  StagesType,
  GetCourseCreateStagesType,
  GetCourseCreateStagesPropsType,
} from './CourseCreateBodyTypes'

// STOPPED HERE: enum status { todo, pending, sucess, etc. }

/**
 * @description Function to getCourseCreateStages
 * @run ts-node src/shared/utils/getCourseCreateStages.ts
 *    In debugging mode:
 *       node --inspect-brk -r ts-node/register src/shared/utils/getCourseCreateStages.ts
 *       chrome://inspect/#devices > Open dedicated DevTools for Node
 * @import import { getCourseCreateStages, getCourseCreateStagesParamsType } from './getCourseCreateStages'
 */
export const getCourseCreateStages: GetCourseCreateStagesType = ({
  createModuleStages,
}: GetCourseCreateStagesPropsType) => {
  const stages: StagesType[] = [
    {
      name: 'metaData',
      isActive: true,
      action: {
        typeEvent: 'GET_COURSE_META_DATA_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['metaData']['status'],
      timeCalculated: createModuleStages['metaData']['timeCalculated'],
    },
    {
      name: 'transcript',
      isActive: true,
      action: {
        typeEvent: 'GET_COURSE_TRANSCRIPT_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['transcript']['status'],
      timeCalculated: createModuleStages['transcript']['timeCalculated'],
    },
    {
      name: 'summary',
      isActive: true,
      action: {
        typeEvent: 'GET_COURSE_SUMMARY_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['summary']['status'],
      timeCalculated: createModuleStages['summary']['timeCalculated'],
    },
    {
      name: 'questions',
      isActive: true,
      action: {
        typeEvent: 'GET_COURSE_QUESTIONS_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['questions']['status'],
      timeCalculated: createModuleStages['questions']['timeCalculated'],
    },
    {
      name: 'objections',
      isActive: true,
      action: {
        typeEvent: 'GET_COURSE_OBJECTIONS_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['objections']['status'],
      timeCalculated: createModuleStages['objections']['timeCalculated'],
    },
    {
      name: 'courseModule',
      isActive: true,
      action: {
        typeEvent: 'GET_COURSE_MODULE_CREATED_HANDLE',
        data: {},
      },
      status: createModuleStages['courseModule']['status'],
      timeCalculated: createModuleStages['courseModule']['timeCalculated'],
    },
  ]

  return stages
}
